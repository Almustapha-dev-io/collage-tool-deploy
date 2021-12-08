import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router';
import axios, { CancelTokenSource } from 'axios';

import { postCollage } from 'api-service';
import { PageContainer } from 'components/ui/StyledContainers';
import { CollageFormCard } from 'components/ui/Card';
import { PrimaryButton } from 'components/ui/StyledButtons';
import Spinner from 'components/ui/Spinner';
import FileUploader from 'components/FileUploader';
import ImagePreview from 'components/ImagePreview';
import RadioInput from 'components/RadioInput';
import {
    FormGroup,
    StyledInput,
    FormContainer,
} from 'components/ui/StyledInput';
import { FileContext } from 'context/files-context';
import { CollageContext } from 'context/collage-context';
import handleError from 'util/handleError';

export enum Orientation {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical',
}

const radioInputItems = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
];

const CollageForm: React.FC = () => {
    const { files, addFile } = useContext(FileContext);
    const { setTaskId, taskId } = useContext(CollageContext);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        loading: false,
        orientation: Orientation.HORIZONTAL,
    });
    const border = useRef<HTMLInputElement | null>(null);
    const borderColor = useRef<HTMLInputElement | null>(null);

    const axiosCancelSource = useRef<CancelTokenSource>(
        axios.CancelToken.source()
    );

    useEffect(() => {
        const source = axiosCancelSource.current;
        return () => source.cancel('Request cancelled');
    }, []);

    const radioChangeHandler = useCallback((orientation) => {
        setState((state) => ({ ...state, orientation }));
    }, []);

    const dataValid = () => {
        if (!border.current || !borderColor.current) return false;
        if (!border.current.value || !borderColor.current.value) return false;

        const orientations = ['horizontal', 'vertical'];
        return (
            +border.current.value >= 0 &&
            borderColor.current.value &&
            files.length &&
            orientations.includes(state.orientation)
        );
    };

    const submitHandler = async () => {
        if (!dataValid()) {
            return toast('Please provide valid details!');
        }

        if (!border.current || !borderColor.current) return;

        setLoading((_) => true);
        const fd = new FormData();
        files.forEach((file) => fd.append('files', file));
        fd.append('orientation', state.orientation);
        fd.append('border', border.current.value);
        fd.append('border_color', borderColor.current.value);

        try {
            const res = await postCollage(fd, {
                cancelToken: axiosCancelSource.current.token,
            });
            setTaskId(res.data.data);
        } catch (err) {
            if (axios.isCancel(err)) return;
            handleError(err);
        }

        setLoading((_) => false);
    };

    if (taskId) {
        return <Redirect to="/view-work" />;
    }

    let content = null;
    if (files.length) {
        content = (
            <>
                <RadioInput
                    value={state.orientation}
                    items={radioInputItems}
                    changed={radioChangeHandler}
                />

                <FormContainer>
                    <FormGroup>
                        <label>Border size</label>
                        <StyledInput width="100%" ref={border} />
                    </FormGroup>
                    <FormGroup>
                        <label>Border color</label>
                        <StyledInput
                            width="100%"
                            type="color"
                            ref={borderColor}
                        />
                    </FormGroup>
                </FormContainer>

                <PrimaryButton
                    style={{
                        width: '200px',
                        maxWidth: '100%',
                        margin: '15px auto',
                    }}
                    disabled={loading}
                    onClick={submitHandler}
                >
                    {loading ? <Spinner /> : 'Make collage'}
                </PrimaryButton>
            </>
        );
    }

    return (
        <PageContainer>
            <div className="content">
                <CollageFormCard>
                    <h2>Online Collage Tool</h2>
                    <FileUploader handleFile={addFile} multiple />
                    <br />
                    <ImagePreview />
                    <br />
                    {content}
                </CollageFormCard>
            </div>
        </PageContainer>
    );
};

export default React.memo(CollageForm);

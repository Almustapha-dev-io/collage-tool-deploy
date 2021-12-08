import React, { useContext, useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router';
import axios, { CancelTokenSource } from 'axios';

import { CollageContext } from 'context/collage-context';
import { ViewCollageContainer } from 'components/ui/StyledContainers';
import { CollageViewCard } from 'components/ui/Card';
import { PrimaryButton, SecondaryButton } from 'components/ui/StyledButtons';
import Spinner from 'components/ui/Spinner';
import { getStatus } from 'api-service';
import handleError from 'util/handleError';
import pendingSvg from 'assets/boy-image.svg';
import doneSvg from 'assets/image-done.svg';

const btnStyles = {
    width: '200px',
    maxWidth: '100%',
    margin: '15px 0 0',
    padding: '0',
};

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const CollageView: React.FC = () => {
    const [state, setState] = useState({
        msg: 'Your request has been received and is in progress!',
        loading: false,
    });

    const { taskId, collageId, resetValues, setCollageId } =
        useContext(CollageContext);

    const axiosCancelSource = useRef<CancelTokenSource>(
        axios.CancelToken.source()
    );

    useEffect(() => {
        const source = axiosCancelSource.current;
        return () => source.cancel('cancelled');
    }, []);

    if (!taskId) {
        return <Redirect to="/" />;
    }

    const url = collageId ? doneSvg : pendingSvg;
    
    const statusHandler = async () => {
        setState((state) => ({ ...state, loading: true }));
        let msg = state.msg;

        try {
            const res = await getStatus(taskId, {
                cancelToken: axiosCancelSource.current.token,
            });
            if (res.data.data) {
                setCollageId(res.data.data as string)
                msg = 'Your collage has been generated!';
            }
            else msg = res.data.msg;
        } catch (err: any) {
            if (axios.isCancel(err)) return resetValues();
            handleError(err);
        }

        setState((state) => ({ ...state, loading: false, msg }));
    };

    let btn = (
        <PrimaryButton
            disabled={state.loading}
            style={btnStyles}
            onClick={statusHandler}
        >
            {state.loading ? <Spinner /> : 'Check progress'}
        </PrimaryButton>
    );

    if (collageId) {
        btn = (
            <PrimaryButton
                as="a"
                href={`${apiBaseUrl}/download/${collageId}`}
                target="_blank"
                style={btnStyles}
            >
                Download image
            </PrimaryButton>
        );
    }

    return (
        <ViewCollageContainer>
            <CollageViewCard>
                <img src={url} alt="img" />
                <p style={{ textAlign: 'center' }}>{state.msg}</p>
                {btn}
                {!state.loading && (
                    <SecondaryButton style={btnStyles} onClick={resetValues}>
                        Make another collage
                    </SecondaryButton>
                )}
            </CollageViewCard>
        </ViewCollageContainer>
    );
};

export default CollageView;

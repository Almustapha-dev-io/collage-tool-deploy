import React, { useRef } from 'react';

import { FileUploadButton } from 'components/ui/StyledButtons';
import UploadSvg from 'components/svg/UploadSvg';

interface IProps {
    handleFile: (files: File[]) => void;
    multiple?: boolean;
};

const FileUploader: React.FC <IProps> = (props) => {
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const clickHandler = () => {
        hiddenFileInput.current!.click();
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files.length) return;
        props.handleFile(Array.from(e.target.files));
    };

    return (
        <>
            <FileUploadButton onClick={clickHandler}>
                <UploadSvg />
                <span>Add a file</span>
            </FileUploadButton>

            <input
                type="file"
                ref={hiddenFileInput}
                onChange={changeHandler}
                style={{ display: 'none' }}
                multiple={props.multiple ? true : false}
            />
        </>
    );
};

export default React.memo(FileUploader);

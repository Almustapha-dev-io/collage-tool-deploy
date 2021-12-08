import React, { useContext, useState, useEffect } from 'react';

import { FileContext } from 'context/files-context';
import idGenerator from 'util/idGenerator';
import fileToDataUrl from 'util/fileToDataurl';
import CloseSvg from 'components/svg/CloseSvg';
import {
    ImagePreviewContainer,
    ImagePreviewItem,
} from 'components/ui/StyledContainers';


const PreviewImage: React.FC<{ file: File }> = React.memo(({ file }) => {
    const [dataUrl, setDataurl] = useState('');

    useEffect(() => {
        fileToDataUrl(file)
            .then(dataUrl => setDataurl(_ => dataUrl));
    }, [file]);

    if (!dataUrl) return null;

    return <img src={dataUrl} alt="Img" />
});

const ImagePreview: React.FC = () => {
    const { files, removeFile } = useContext(FileContext);
    
    return (
        <>
            {!files.length && (
                <div style={{ textAlign: 'center', width: '100%' }}>
                    No files attached!
                </div>
            )}

            <ImagePreviewContainer>
                {files.map((file, i) => (
                    <ImagePreviewItem key={idGenerator()}>
                        <PreviewImage file={file} />
                        <p className="img-name">
                            {file.name.length > 15
                                ? file.name.slice(0, 15) + '...'
                                : file.name}
                        </p>
                        <CloseSvg clicked={() => removeFile(i)} />
                    </ImagePreviewItem>
                ))}
            </ImagePreviewContainer>
        </>
    );
};

export default React.memo(ImagePreview);

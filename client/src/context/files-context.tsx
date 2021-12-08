import React, { useCallback, useState } from 'react';
import { IContext } from './files-context-types';

export const FileContext = React.createContext<IContext>({
    files: [],
    addFile: () => {},
    removeFile: () => {},
    resetValues: () => {},
});

const FileContextProvider = (props: any) => {
    const [files, setFiles] = useState<File[]>([]);

    const addFileHandler = useCallback((files: File[]) => {
        setFiles((prevFiles) => [...prevFiles, ...files]);
    }, []);

    const removeFileHandler = useCallback((index: number) => {
        setFiles((files) => files.filter((_, i) => i !== index));
    }, []);

    const resetValuesHandler = useCallback(() => setFiles((_) => []), []);

    return (
        <FileContext.Provider
            value={{
                files: files,
                addFile: addFileHandler,
                removeFile: removeFileHandler,
                resetValues: resetValuesHandler,
            }}
        >
            {props.children}
        </FileContext.Provider>
    );
};

export default FileContextProvider;

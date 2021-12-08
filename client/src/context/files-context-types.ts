
export enum Actions {
    ADD_FILE = 'ADD_FILE',
    REMOVE_FILE = 'REMOVE_FILE',
    RESET = 'RESET'
};

export interface IContext {
    files: File[];
    addFile: (files: File[]) => void;
    removeFile: (index: number) => void;
    resetValues: () => void;
}

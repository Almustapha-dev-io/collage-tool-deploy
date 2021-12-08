export interface IContext {
    taskId: string;
    collageId: string;
    resetValues: () => void;
    setTaskId: (id: string) => void;
    setCollageId: (id: string) => void;
}

export interface IState {
    taskId: string;
    collageId: string;
}
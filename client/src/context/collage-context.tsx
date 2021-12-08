import React, { useCallback, useState } from 'react';
import { IContext, IState } from './collage-context-types';

export const CollageContext = React.createContext<IContext>({
    collageId: '',
    taskId: '',
    resetValues: () => {},
    setCollageId: () => {},
    setTaskId: () => {},
});

const CollageContextProvider = (props: any) => {
    const [state, setState] = useState<IState>({
        collageId: '',
        taskId: '',
    });

    const resetHandler = useCallback(() => {
        setState((_) => ({ taskId: '', collageId: '' }));
    }, []);

    const collageIdHandler = useCallback((id: string) => {
        setState((state) => ({ ...state, collageId: id }));
    }, []);

    const taskIdHandler = useCallback((id: string) => {
        setState((state) => ({ ...state, taskId: id }));
    }, []);

    return (
        <CollageContext.Provider
            value={{
                collageId: state.collageId,
                taskId: state.taskId,
                resetValues: resetHandler,
                setCollageId: collageIdHandler,
                setTaskId: taskIdHandler
            }}
        >
            {props.children}
        </CollageContext.Provider>
    );
};

export default CollageContextProvider;

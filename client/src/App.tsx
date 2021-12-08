import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import CollageContextProvider from 'context/collage-context';
import FileContextProvider from 'context/files-context';
import CollageForm from 'components/CollageForm';
import CollageView from 'components/CollageView';
import PageNotFound from 'components/PageNotFound';

interface IRoutes {
    path: string;
    element: ReactElement;
}

const App: React.FC = () => {
    const routes: IRoutes[] = [
        {
            path: '/create',
            element: (
                <FileContextProvider>
                    <CollageForm />
                </FileContextProvider>
            ),
        },
        {
            path: '/view-work',
            element: <CollageView />,
        },
        {
            path: '/page-not-found',
            element: <PageNotFound />,
        },
    ];

    return (
        <CollageContextProvider>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path}>
                        {route.element}
                    </Route>
                ))}
                <Redirect from="/" to="/create" exact />
                <Redirect to="/page-not-found" />
            </Switch>
        </CollageContextProvider>
    );
};

export default App;

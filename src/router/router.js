import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../config/routes';

const Router = () => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Route>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path.toString()}
                exact={route.exact}
                path={route.path}
                component={route.component()}
              />
            );
          })}
        </Switch>
      </Route>
    </Suspense>
  );
};

export default Router;

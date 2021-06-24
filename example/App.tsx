import { ComponentProps } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { app, sidenav } from './data';
import { MainLayout } from './layouts';
import { mainRoutes } from './routes';

const Layout = ({
  content,
  children,
}: {
  content: ComponentProps<typeof MainLayout>['content'];
  children: ComponentProps<typeof MainLayout>['children'];
}) => (
  <MainLayout appName={app.name} content={content} sidenav={sidenav}>
    {children}
  </MainLayout>
);

function App() {
  return (
    <Router>
      <Switch>
        {mainRoutes.map(({ title, component, path, exact }) => (
          <Route exact={exact} key={path} path={path}>
            <Layout content={{ title }}>{component}</Layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;

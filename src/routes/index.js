import { useSelector } from 'react-redux';
import { LoggedRoutes } from './logged.routes';
import { UnLoggedRoutes } from './unlogged.routes';

export const Routes = () => {
  const user = useSelector(({ auth }) => auth.user);

  if (user?.id) {
    return <LoggedRoutes />;
  }

  return <UnLoggedRoutes />;
};

import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthExpired } from 'utils/helper';
import NotFound from 'pages/common/NotFound/index';
import { revokeUserInfo } from 'redux/auth/actions';

const PrivateRoute = ({
  component: Component,
  roles,
  denyShowLoginPage,
  ...rest }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state?.auth?.data);
  const user = useSelector((state) => state?.user?.data);

  if (isAuthExpired()) {
    revokeUserInfo(dispatch);
  }
  const isUserLoggedIn = auth?.isLoggedIn && !isAuthExpired();

  const isPermissions = roles?.includes(user?.type_account);

  if (!isUserLoggedIn && !isPermissions) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <>
            <Redirect
              to={{
                pathname: "/admin/login",
              }}
            />
          </>
        )}
      />
    );
  }

  if (isUserLoggedIn && denyShowLoginPage) {
    return (
      <Route
        {...rest}
        render={() => (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )}
      />
    );
  }

  if (isUserLoggedIn && !isPermissions) {
    return <Route component={NotFound} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Component {...props} />
      )}
    />
  );
};

export default PrivateRoute;
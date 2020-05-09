import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const FakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    FakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    FakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
    localStorage.removeItem('loginInfo');
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        FakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    FakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default FakeAuth;
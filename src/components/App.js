import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./authentication/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dahsboard from "./google-drive/Dahsboard";
import "./icons/icons";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive Routes */}
          <PrivateRoute
            exact
            path={process.env.REACT_APP_BASE_HREF + "/"}
            component={Dahsboard}
          />

          {/* Folder Routes */}
          <PrivateRoute
            exact
            path={process.env.REACT_APP_BASE_HREF + "/folder/:folderId"}
            component={Dahsboard}
          />

          {/* User Profile Routes */}
          <PrivateRoute
            path={process.env.REACT_APP_BASE_HREF + "/user"}
            component={Profile}
          />
          <PrivateRoute
            path={process.env.REACT_APP_BASE_HREF + "/update-profile"}
            component={UpdateProfile}
          />

          {/* Authentication Routes */}
          <Route
            path={process.env.REACT_APP_BASE_HREF + "/signup"}
            component={Signup}
          />
          <Route
            path={process.env.REACT_APP_BASE_HREF + "/login"}
            component={Login}
          />
          <Route
            path={process.env.REACT_APP_BASE_HREF + "/forgot-password"}
            component={ForgotPassword}
          />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

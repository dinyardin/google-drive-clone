import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./authentication/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dahsboard from "./google-drive/Dahsboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive Routes */}
          <PrivateRoute exact path="/" component={Dahsboard} />

          {/* Folder Routes */}
          <PrivateRoute exact path="/folder/:folderId" component={Dahsboard} />

          {/* User Profile Routes */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Authentication Routes */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push(process.env.REACT_APP_BASE_HREF + "/login");
    } catch {
      setError("Failed to logout");
    }
  }

  function handleBack() {
    history.push(process.env.REACT_APP_BASE_HREF + "/");
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link
            to={process.env.REACT_APP_BASE_HREF + "/update-profile"}
            className="btn btn-primary w-100 mt-3"
          >
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button varient="link" onClick={handleBack}>
          Back
        </Button>
        <Button varient="link" className="ml-5" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </CenteredContainer>
  );
}

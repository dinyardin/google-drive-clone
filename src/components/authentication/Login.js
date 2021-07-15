import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import CenteredContainer from "./CenteredContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <CenteredContainer>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginBottom: "40px" }}
      >
        <img
          style={{ width: "150px", height: "150px", marginBottom: "5px" }}
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Drive.max-1100x1100.png"
          alt="logo"
        />
        <h3 className="mb-10">Google Drive Clone</h3>
      </div>

      <Card>
        <Card.Body>
          <h4 className="text-center mb-4">Log In</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <br />
            <hr />
            <div className="mt-4 mb-4 d-flex justify-content-center">
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                className="mr-3"
                icon={["fab", "google"]}
                size="lg"
                color="Tomato"
              />
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                className="mr-3"
                icon={["fab", "facebook-f"]}
                size="lg"
                color="#3b5998"
              />
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={["fab", "github"]}
                size="lg"
                color="black"
              />
            </div>
            <Button
              disabled={loading ? true : false}
              className="w-100"
              type="submit"
            >
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot password ?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </CenteredContainer>
  );
}

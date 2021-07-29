import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to={process.env.REACT_APP_BASE_HREF + "/"}>
        Google Drive Clone
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to={process.env.REACT_APP_BASE_HREF + "/user"}>
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

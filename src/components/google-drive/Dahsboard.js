import React from "react";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import NavBar from "./NavBar";

export default function Dahsboard() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <AddFolderButton />
      </Container>
    </>
  );
}

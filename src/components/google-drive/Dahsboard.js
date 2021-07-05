import React from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import NavBar from "./NavBar";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";

export default function Dahsboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder(folderId, state.folder);

  return (
    <>
      <NavBar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
      </Container>
      {childFolders.length > 0 && (
        <div className="d-flex flex-wrap">
          {childFolders.map((childFolder) => (
            <div
              key={childFolder.id}
              style={{ maxWidth: "250px" }}
              className="p-2"
            >
              <Folder folder={childFolder} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

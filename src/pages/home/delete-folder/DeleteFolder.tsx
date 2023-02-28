import React from "react";
import classes from "./DeleteFolder.module.css";

type DFProps = {
  folderId: string;
};

const DeleteFolder = ({ folderId }: DFProps) => {
  return <div>Delete Folder Id: {folderId}</div>;
};

export default DeleteFolder;

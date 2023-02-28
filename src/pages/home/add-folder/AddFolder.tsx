import React from "react";
import classes from "./AddFolder.module.css";

type AFProps = {
  parentId: string;
};

const AddFolder = ({ parentId }: AFProps) => {
  return <div>welcome to modal: {parentId}</div>;
};

export default AddFolder;

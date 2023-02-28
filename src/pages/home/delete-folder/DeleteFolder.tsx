import React from "react";
import classes from "./DeleteFolder.module.css";

type DFProps = {
  folder: any;
  modalClosed: () => void;
};

const DeleteFolder = ({ folder, modalClosed }: DFProps) => {
  return (
    <div className={classes.deleteModal}>
      <p className={classes.title}>Are you sure want to delete {folder?.name}?</p>
      <div className={classes.actions}>
        <button onClick={modalClosed}>Cancel</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default DeleteFolder;

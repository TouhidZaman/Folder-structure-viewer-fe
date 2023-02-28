import React from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axiosInstance";
import classes from "./DeleteFolder.module.css";

type DFProps = {
  folder: any;
  modalClosed: () => void;
  setRefetch: any;
};

const DeleteFolder = ({ folder, modalClosed, setRefetch }: DFProps) => {
  //Handling folder delete functionality
  const handleDelete = (folderId: string) => {
    axiosInstance.delete(`folders/${folderId}`).then((res) => {
      if (res.status === 200) {
        setRefetch((prevState: boolean) => !prevState);
        toast.success("Folder Deleted Successfully");
        modalClosed();
      }
    });
  };

  return (
    <div className={classes.deleteModal}>
      <p className={classes.title}>Are you sure want to delete {folder?.name}?</p>
      <div className={classes.actions}>
        <button onClick={modalClosed}>Cancel</button>
        <button onClick={() => handleDelete(folder._id)}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteFolder;

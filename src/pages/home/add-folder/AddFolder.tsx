import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axiosInstance";
import classes from "./AddFolder.module.css";

type AFProps = {
  parentId: string;
  setRefetch: any;
  modalClosed: () => void;
};

const AddFolder = ({ parentId, setRefetch, modalClosed }: AFProps) => {
  const [folderName, setFolderName] = useState("");

  //Handling folder delete functionality
  const handleAdd = (parentId: string) => {
    if (folderName) {
      const newFolder = {
        name: folderName,
        parentId,
        readOnly: false,
      };
      axiosInstance.post(`folders`, newFolder).then((res) => {
        if (res.status === 200) {
          setRefetch((prevState: boolean) => !prevState);
          toast.success("Folder Created Successfully");
          modalClosed();
        }
      });
    } else {
      toast.error("Please add folder name first");
    }
  };

  return (
    <div className={classes.addModal}>
      <p className={classes.title}>
        <span className="material-symbols-outlined">create_new_folder</span> Want to
        create new folder?
      </p>
      <input
        className={classes.folderInput}
        onChange={(e) => setFolderName(e.target.value)}
        type="text"
        placeholder="Enter folder name"
      />
      <div className={classes.actions}>
        <button onClick={modalClosed}>Cancel</button>
        <button onClick={() => handleAdd(parentId)}>Create</button>
      </div>
    </div>
  );
};

export default AddFolder;

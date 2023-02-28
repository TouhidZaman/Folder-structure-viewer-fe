import React from "react";
import Folders from "../Folders";
import classes from "./DisplayFolder.module.css";

const DisplayFolder = ({
  folder,
  handleDeleteFolder,
  handleAddFolder,
  getChildren,
}: any) => {
  //Getting nested children folders for this folder
  const nestedChildren = getChildren(folder._id)?.children;

  return (
    <li key={folder._id}>
      <div className={classes.flex}>
        <div className={classes.flex}>
          <span className="material-symbols-outlined">expand_more</span>
          <span className="material-symbols-outlined">folder_open</span>{" "}
          {folder.name}
        </div>
        <div className={classes.actions}>
          <button
            className={classes.flex}
            onClick={() => handleDeleteFolder(folder)}
          >
            <span className="material-symbols-outlined">delete_forever</span>
          </button>
          <button
            className={classes.flex}
            onClick={() => handleAddFolder(folder._id)}
          >
            <span className="material-symbols-outlined">create_new_folder</span>{" "}
          </button>
        </div>
      </div>

      {/* Using Recursion to generate all nested folders */}
      {nestedChildren?.length ? (
        <ul>
          <Folders
            folders={nestedChildren}
            handleDeleteFolder={handleDeleteFolder}
            handleAddFolder={handleAddFolder}
            getChildren={getChildren}
          />
        </ul>
      ) : (
        <p className={classes.noFolders}>--No Folders</p>
      )}
    </li>
  );
};

export default DisplayFolder;

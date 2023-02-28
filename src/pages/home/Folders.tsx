import React from "react";
import DisplayFolder from "./display-folder/DisplayFolder";

const Folders = ({
  folders,
  handleDeleteFolder,
  handleAddFolder,
  getChildren,
}: any) => {
  return (
    <>
      {folders.map((folder: any) => (
        <DisplayFolder
          key={folder._id}
          folder={folder}
          handleDeleteFolder={handleDeleteFolder}
          handleAddFolder={handleAddFolder}
          getChildren={getChildren}
        />
      ))}
    </>
  );
};

export default Folders;

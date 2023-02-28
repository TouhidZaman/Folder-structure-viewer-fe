import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import Modal from "../../components/modal/Modal";
import axiosInstance from "../../utils/axiosInstance";
import AddFolder from "./add-folder/AddFolder";
import DeleteFolder from "./delete-folder/DeleteFolder";
import Folders from "./Folders";
import classes from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [parentId, setParentId] = useState("");

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [folder, setFolder] = useState("");

  const [foldersByParent, setFoldersByParent] = useState<any>();

  //Getting grouped folders using parentId
  useEffect(() => {
    axiosInstance.get("folders/parent").then((res) => {
      setFoldersByParent(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  const handleAddFolder = (parentId: string) => {
    setAddModalVisible(true);
    setParentId(parentId);
  };

  const handleDeleteFolder = (folder: string) => {
    setDeleteModalVisible(true);
    setFolder(folder);
  };

  //Getting Children Folders for a specific Parent folder Id
  const getChildren = (parentId: string) =>
    foldersByParent.find((item: any) => item._id === parentId);
  const root = getChildren("root");

  return (
    <section className={classes.fonderStructure}>
      <h3 className={classes.title}>Folder structure Viewer</h3>

      <div className={classes.folders}>
        <ul>
          <li>
            <div className={classes.flex}>
              <div className={classes.flex}>
                <span className="material-symbols-outlined">expand_more</span>
                <span className="material-symbols-outlined">folder_open</span>{" "}
                {root.children[0].name}
              </div>
              <div className={classes.actions}>
                <button
                  className={classes.flex}
                  onClick={() => handleAddFolder(root.children[0]._id)}
                >
                  <span className="material-symbols-outlined">
                    create_new_folder
                  </span>{" "}
                </button>
              </div>
            </div>
            <ul>
              <Folders
                folders={getChildren(root.children[0]._id).children}
                handleDeleteFolder={handleDeleteFolder}
                handleAddFolder={handleAddFolder}
                getChildren={getChildren}
              />
            </ul>
          </li>
        </ul>
      </div>
      {addModalVisible ? (
        <Modal show={addModalVisible} modalClosed={() => setAddModalVisible(false)}>
          <AddFolder parentId={parentId} />
        </Modal>
      ) : null}
      {deleteModalVisible ? (
        <Modal
          show={deleteModalVisible}
          modalClosed={() => setDeleteModalVisible(false)}
        >
          <DeleteFolder
            folder={folder}
            modalClosed={() => setDeleteModalVisible(false)}
          />
        </Modal>
      ) : null}
    </section>
  );
};

export default Home;

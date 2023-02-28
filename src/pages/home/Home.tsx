import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import Modal from "../../components/modal/Modal";
import axiosInstance from "../../utils/axiosInstance";
import AddFolder from "./add-folder/AddFolder";
import DeleteFolder from "./delete-folder/DeleteFolder";
import classes from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [parentId, setParentId] = useState("");

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [folderId, setFolderId] = useState("");

  const [foldersByParent, setFoldersByParent] = useState<any>();
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

  const getChildren = (parentId: string) =>
    foldersByParent.find((item: any) => item._id === parentId);
  const root = getChildren("root");

  console.log(foldersByParent, "foldersByParent");

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
              <li>
                <div className={classes.flex}>
                  <div className={classes.flex}>
                    <span className="material-symbols-outlined">expand_more</span>
                    <span className="material-symbols-outlined">
                      folder_open
                    </span>{" "}
                    Folder 1
                  </div>
                  <div className={classes.actions}>
                    <button className={classes.flex}>
                      <span className="material-symbols-outlined">
                        delete_forever
                      </span>
                    </button>
                    <button className={classes.flex}>
                      <span className="material-symbols-outlined">
                        create_new_folder
                      </span>{" "}
                    </button>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className={classes.flex}>
                      <div className={classes.flex}>
                        <span className="material-symbols-outlined">
                          keyboard_arrow_right
                        </span>
                        <span className="material-symbols-outlined">folder</span>{" "}
                        Nested 1
                      </div>
                      <div className={classes.actions}>
                        <button className={classes.flex}>
                          <span className="material-symbols-outlined">
                            delete_forever
                          </span>
                        </button>
                        <button className={classes.flex}>
                          <span className="material-symbols-outlined">
                            create_new_folder
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={classes.flex}>
                      <div className={classes.flex}>
                        <span className="material-symbols-outlined">
                          keyboard_arrow_right
                        </span>
                        <span className="material-symbols-outlined">folder</span>{" "}
                        Nested 2
                      </div>
                      <div className={classes.actions}>
                        <button className={classes.flex}>
                          <span className="material-symbols-outlined">
                            delete_forever
                          </span>
                        </button>
                        <button className={classes.flex}>
                          <span className="material-symbols-outlined">
                            create_new_folder
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className={classes.flex}>
                  <div className={classes.flex}>
                    <span className="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                    <span className="material-symbols-outlined">folder</span> Folder
                    2
                  </div>
                  <div className={classes.actions}>
                    <button className={classes.flex}>
                      <span className="material-symbols-outlined">
                        delete_forever
                      </span>
                    </button>
                    <button className={classes.flex}>
                      <span className="material-symbols-outlined">
                        create_new_folder
                      </span>{" "}
                    </button>
                  </div>
                </div>
              </li>
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
          <DeleteFolder folderId={folderId} />
        </Modal>
      ) : null}
    </section>
  );
};

export default Home;

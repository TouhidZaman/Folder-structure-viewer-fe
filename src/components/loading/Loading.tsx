import React from "react";
import loading from "../../assets/loading.svg";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loading}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;

import React from "react";
import "./UpdatePasswordContainer.css";

const MustContainItem = (props) => {
  const { data } = props;
  const label = data[0];
  const meetsReq = data[1];

  const setClass = () => {
    const classArr = ["must-line"];
    if (meetsReq) classArr.push("cross-out");
    return classArr.join(" ");
  };

  return (
    <>
      <li className="list-group-item">{label}</li>
      <div className={setClass()}></div>
    </>
  );
};

export default MustContainItem;

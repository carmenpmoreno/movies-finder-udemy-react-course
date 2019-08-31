import React from "react";
import ButtonBackToHome from "../components/ButtonBackToHome";

import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="notification-wraper">
        <div className="notification is-danger">
          <h1 className="title">404!</h1>
          <h2>No existe la página</h2>
        </div>
      </div>
      <ButtonBackToHome />
    </>
  );
};

export default NotFound;

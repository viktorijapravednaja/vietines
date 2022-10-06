import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

//Styles
import "./Modal.css";

export const Modal = () => {
  return ReactDom.createPortal(
    <div className="overlay">
      <div className="ModalContainer">
        <p className="modalText">COMING SOON</p>
        <Link to="/">
          <button className="modalButton">BACK TO HOMEPAGE </button>
        </Link>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;

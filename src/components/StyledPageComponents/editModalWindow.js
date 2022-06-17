import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import stylish from "styled-components";

import { ModalContent, ModalWindow, CardColumn } from "./pageStyling";

const EditModalWindow = ({ children, open, handleOpen, handleClose }) => {
  return (
    // <div>
      <ModalWindow>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalContent>{children}</ModalContent>
        </Modal>
      </ModalWindow>
    // </div>
  );
};

export default EditModalWindow;

import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import stylish from "styled-components";

import { ModalContent, ModalWindow, CardColumn } from "./pageStyling";

const ButtonContainer = stylish.div`
  float: right;
  margin-top: -30px;
  margin-right: 5px;
`;

const AddModalWindow = ({ children, open, handleOpen, handleClose }) => {
  return (
    <div>
      <ButtonContainer>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Add
        </Button>
      </ButtonContainer>
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
    </div>
  );
};

export default AddModalWindow;

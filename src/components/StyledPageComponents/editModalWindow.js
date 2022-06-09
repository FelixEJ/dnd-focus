import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";

import { ModalWindow, PageContent, CardColumn } from "./pageStyling";

const EditModalWindow = ({
  children,
  open,
  handleOpen,
  handleClose,  
}) => {
  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleOpen}>
        Edit
      </Button>
      <PageContent>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CardColumn>
            <ModalWindow>{children}</ModalWindow>

            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </CardColumn>
        </Modal>
      </PageContent>
    </div>
  );
};

export default EditModalWindow;

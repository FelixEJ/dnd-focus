import React, { useState } from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AddModalWindow from "./StyledPageComponents/addModalWindow";

import {
  Window,
  Page,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
  TopRightButton,
} from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddNoteModal = ({ addNote }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [note, setNote] = useState({
    note_id: "",
    title: "",
    note_body: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNote((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  //sometimes duplicate feature id?
  function clearNote() {
    setNote({
      note_id: "",
      title: "",
      note_body: "",
    });
  }

  return (
    <>
      <TopRightButton>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Add
        </Button>
      </TopRightButton>
      <AddModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <h2>Add Note</h2>
          <Label>Title:</Label>
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Note:</Label>
          <textarea
              type="text"
              id="note_body"
              name="note_body"
              value={note.note_body}
              onChange={handleChange}
              cols="30"
              rows="5"
            />
        </Item>
        
        <Item>
          <Button
            variant="contained"
            onClick={() => {
              addNote(note);
              clearNote();
              handleClose();
            }}
          >
            Confirm Note
          </Button>
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </AddModalWindow>
    </>
  );
};

export default AddNoteModal;

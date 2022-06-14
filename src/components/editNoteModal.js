import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SaveIcon from "@material-ui/icons/Save";

import ConfirmDeleteNoteModal from "./confirmDeleteNoteModal";
import EditModalWindow from "./StyledPageComponents/editModalWindow";
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
} from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditNoteModal = ({ character, updateNotes, index, name, oldNote }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [note, setNote] = useState({oldNote});

  useEffect(() => {
    setNote(
      ...character.notes.filter((note) => note.title === name)
    );
  }, [character.notes]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNote((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  const editNote = () => {
    let notes = [...character.notes];
    notes[index] = note;
    updateNotes(notes);
    handleClose();
  };

  return (
    <>
      <BotButton>
        <Button
          variant="outlined"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Edit
        </Button>
      </BotButton>
      <EditModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <Label>
            Title:</Label>
            <input
              type="text"
              id="title"
              name="title"
              value={note.title}
              onChange={handleChange}
              cols="30"
              rows="2"
            />            
          
        </Item>        
        <Item>
          <Label>
            Note:</Label>
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
              editNote();
            }}
            startIcon={<SaveIcon />}
            color="primary"
          >
            Save change
          </Button>
          <ConfirmDeleteNoteModal
            character={character}
            updateNotes={updateNotes}
            index={index}
            closePrev={handleClose}
          />
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </EditModalWindow>
    </>
  );
};

export default EditNoteModal;

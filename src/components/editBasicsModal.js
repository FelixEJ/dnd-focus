import React from "react";
import stylish from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  TopRightButton,
} from "./StyledPageComponents/pageStyling";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EditBasicsModal = ({ character, onCharacterChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TopRightButton>
        <Button
          variant="contained"
          size="small"
          onClick={handleOpen}
          color="primary"
        >
          Edit
        </Button>
      </TopRightButton>
      <EditModalWindow
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Item>
          <Label>Name:</Label>
          <input
            type="text"
            id="name"
            name="name"
            value={character.name}
            onChange={onCharacterChange}
          />
        </Item>
        <Item>
          <Label>Class:</Label>
          <input
            type="text"
            id="class"
            name="class"
            value={character.class}
            onChange={onCharacterChange}
          />
        </Item>
        <Item>
          <Label>Subclass:</Label>
          <input
            type="text"
            id="subclass"
            name="subclass"
            value={character.subclass}
            onChange={onCharacterChange}
          />
        </Item>
        <Item>
          <Label>Level:</Label>
          <select
            id="level"
            name="level"
            value={character.level}
            onChange={onCharacterChange}
          >
            <option value={0}>-</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
          </select>
        </Item>
        <Item>
          <Label>Race:</Label>
          <input
            type="text"
            id="race"
            name="race"
            value={character.race}
            onChange={onCharacterChange}
          />
        </Item>
        <Item>
          <Label>Age:</Label>
          <input
            type="text"
            id="age"
            name="age"
            value={character.age}
            onChange={onCharacterChange}
          />
        </Item>
        <Item>
          <Label>Background:</Label>
          <input
            type="text"
            id="title"
            placeholder="Noble, Orphan..."
            name="background.title"
            value={character.background.title}
            onChange={onCharacterChange}
            required
          />
        </Item>
        <Item>
          <Label>Alignment:</Label>
          <input
            type="text"
            id="alignment"
            name="alignment"
            value={character.alignment}
            onChange={onCharacterChange}
          />
        </Item>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </EditModalWindow>
    </>
  );
};

export default EditBasicsModal;

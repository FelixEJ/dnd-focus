import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import EditNoteModal from "./editNoteModal";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log(""));

  return (
    <button
      type="button"
      style={{ backgroundColor: "none" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const ButtonRight = styled.div`
  float: right;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const Header = styled.div`
  float: left;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const ItemRow = styled.div`
  width: 90%
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  clear: both;
`;

const Item = styled.div`
  font-size: 0.9em;
  margin: 5px 5px;
  max-width: 85%;
`;

const Container = styled.div`
  width: 95vw;
  max-width: 400px;
  max-height: 60vh;
`;

const NotesAccordion = ({ character, updateNotes }) => {
  const [tempNotes, setTempNotes] = useState([...character.notes]);

  useEffect(() => {
    setTempNotes([...character.notes]);
  }, [character]);

  // const handleChange = (e, index, title) => {
  //   e.preventDefault();
  //   let notes = [...character.notes];

  //   let noteIndex = notes.findIndex((note) => note.title === title);
  //   notes[noteIndex].current_uses = e.target.value;

  //   updateNotes(tempNotes);
  // };

  return (
    <Container>
      <Accordion>
        <div>
          {character.notes.length > 0 &&
            character.notes.map((note, index) => (
              <Card>
                <Card.Header>
                  <ItemRow>
                    <Item>
                      <Header>{note.title}:</Header>
                    </Item>
                    <ButtonRight>
                      <CustomToggle eventKey={note.title}>
                        EXPAND
                      </CustomToggle>
                    </ButtonRight>
                  </ItemRow>
                </Card.Header>

                <Accordion.Collapse eventKey={note.title}>
                  <Card.Body
                    style={{ backgroundColor: "lightgrey" }}
                    class="overflow-auto"
                  >
                    <p>{note.note_body}</p>
                    <EditNoteModal
                      character={character}
                      updateNotes={updateNotes}
                      index={index}
                      name={note.title}
                      note={{ note }}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
        </div>
      </Accordion>
    </Container>
  );
};

export default NotesAccordion;

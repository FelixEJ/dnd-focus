import React from "react";
import stylish from "styled-components";
import { Button, ButtonGroup } from "@material-ui/core";

import CreateProficiencies from "./createProficiencies";

import Inventory from "../inventory";
import Features from "../features";

import {
  WindowContent,
  PageContent,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../StyledPageComponents/pageStyling";

const ChooseBackgroundGrid = ({
  nextStep,
  prevStep,
  onCharacterChange,
  character,
  addFeature,
  updateFeatures,
  addEquipment,
  updateEquipment,
  addItem,
  updateInventory,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  // console.log("character:", character);

  return (
    <WindowContent>
      <h1>Choose Background:</h1>
      <ButtonGroup variant="contained">
        <Button onClick={Previous}>Back</Button>
        <Button onClick={Continue}>Next</Button>
      </ButtonGroup>
      <Label>
        {character.name}, lvl:{character.level}
      </Label>
      <PageContent>
        <SectionColumn>
          <CardColumn>
            <Label>Title:</Label>
            <input
              type="text"
              id="title"
              placeholder="Noble, Orphan..."
              name="background.title"
              value={character.background.title}
              onChange={onCharacterChange}
              required
            />
          </CardColumn>
        </SectionColumn>
        <SectionColumn>
          <CreateProficiencies
            character={character}
            onCharacterChange={onCharacterChange}
          />
        </SectionColumn>
        <SectionColumn>
          <Inventory
            character={character}
            onCharacterChange={onCharacterChange}
            updateEquipment={updateEquipment}
            addItem={addItem}
            updateInventory={updateInventory}
            addEquipment={addEquipment}
          />
        </SectionColumn>
        <SectionColumn>
          <Features
            character={character}
            onCharacterChange={onCharacterChange}
            addFeature={addFeature}
            updateFeatures={updateFeatures}
          />
        </SectionColumn>
        <SectionColumn>
          <h3>Characteristics</h3>
          <CardColumn>
            <Label>Personality:</Label>
            <textarea
              type="text"
              id="trait1"
              placeholder="The first thing I ...?"
              name="personality.trait1"
              value={character.personality.trait1}
              onChange={onCharacterChange}
              cols="30"
              rows="2"
            />
            <textarea
              type="text"
              id="trait2"
              placeholder="I always ...?"
              name="personality.trait2"
              value={character.personality.trait2}
              onChange={onCharacterChange}
              cols="30"
              rows="2"
            />
          </CardColumn>
          <CardColumn>
            <Label>Ideal:</Label>
            <textarea
              type="text"
              id="ideal"
              placeholder="Honour, freedom, charity...?"
              name="personality.ideal"
              value={character.personality.ideal}
              onChange={onCharacterChange}
              cols="30"
              rows="2"
            />
          </CardColumn>
          <CardColumn>
            <Label>Bond:</Label>
            <textarea
              type="text"
              id="bond"
              placeholder="Debt, family, home..."
              name="personality.bond"
              value={character.personality.bond}
              onChange={onCharacterChange}
              cols="30"
              rows="2"
            />
          </CardColumn>
          <CardColumn>
            <Label>Flaw:</Label>
            <textarea
              type="text"
              id="flaw"
              placeholder="Greed, pleasure, fame..."
              name="personality.flaw"
              value={character.personality.flaw}
              onChange={onCharacterChange}
              cols="30"
              rows="2"
            />
          </CardColumn>
        </SectionColumn>
      </PageContent>
      <BotButton>
        <ButtonGroup variant="contained">
          <Button onClick={Previous}>Back</Button>
          <Button onClick={Continue}>Next</Button>
        </ButtonGroup>
      </BotButton>
    </WindowContent>
  );
};

export default ChooseBackgroundGrid;

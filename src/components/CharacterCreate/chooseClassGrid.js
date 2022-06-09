import React from "react";
import stylish from "styled-components";
import { Button, ButtonGroup, Select } from "@material-ui/core";


import CreateProficiencies from "./createProficiencies";

import Inventory from "../inventory";
import Features from "../features";
import SheetAttacks from "../sheetAttacks";
import SheetMagic from "../sheetMagic";

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

const ChooseClassGrid = ({
  nextStep,
  prevStep,
  onCharacterChange,
  character,
  setMagicUser,
  addFeature,
  updateFeatures,
  addEquipment,
  updateEquipment,
  addItem,
  updateInventory,
  addAttack,
  updateAttacks,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  // duplicate, move to utilities
  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  const getSpellModifier = (spellStat) => {
    for (const stat in character.stats) {
      // console.log(spellStat, stat);
      if (stat === spellStat) {
        // console.log(spellStat, character.stats[stat]);
        return getModifier(character.stats[stat]);
      }
    }
  };

  function setMagicUse(e) {
    console.log("setMagicUser");
    // onCharacterChange(e);
    setMagicUser(e);
  }

  return (
    <WindowContent>
      <h1>Choose Class:</h1>
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
            <Label>Class:</Label>
            <input
              type="text"
              id="class"
              name="class"
              value={character.class}
              onChange={onCharacterChange}
            />
          </CardColumn>

          <CardColumn>
            <Label>Subclass:</Label>
            <input
              type="text"
              id="subclass"
              name="subclass"
              value={character.subclass}
              onChange={onCharacterChange}
            />
          </CardColumn>

          <CardRow>
            <Label>Hit Dice:</Label>
            <Select
              id="hit_dice"
              name="hit_dice.dice"
              value={character.hit_dice.dice}
              onChange={onCharacterChange}
            >
              <option value={"d6"}>d6</option>
              <option value={"d8"}>d8</option>
              <option value={"d10"}>d10</option>
              <option value={"d12"}>d12</option>
            </Select>
            <Label> Max:</Label>
            <input
              type="number"
              id="hit_dice.max"
              name="hit_dice.max"
              value={character.hit_dice.max}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
              display="none"
            />
          </CardRow>

          <CardRow>
            <Label>Multiclass 1 Hit Dice:</Label>
            <Select
              id="hit_dice.mult1_dice"
              name="hit_dice.mult1_dice"
              value={character.hit_dice.mult1_dice}
              onChange={onCharacterChange}
            >
              <option value={"d6"}>d6</option>
              <option value={"d8"}>d8</option>
              <option value={"d10"}>d10</option>
              <option value={"d12"}>d12</option>
            </Select>
            <Label> Max:</Label>
            <input
              type="number"
              id="hit_dice.mult1_max"
              name="hit_dice.mult1_max"
              value={character.hit_dice.mult1_max}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
              display="none"
            />
          </CardRow>

          <CardRow>
            <Label>Hit Points Max</Label>
            <input
              type="number"
              id="max"
              name="hp.max"
              value={character.hp.max}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
              required
            />
            <Label>Con mod = {getModifier(character.stats.con)}</Label>
          </CardRow>
          <CardColumn>
            <Label>Speed:</Label>
            <input
              type="number"
              id="speed"
              name="speed"
              value={character.speed}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
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
          <h3>Saving Throws:</h3>
          <CardRow>
            <CardColumn>
              <CardItem>
                <Label>STR:</Label>
                <input
                  type="checkbox"
                  id="str"
                  name="saves.str"
                  checked={character.saves.str}
                  onChange={onCharacterChange}
                />
                <Label>bonus:</Label>
                <input
                  type="number"
                  id="saves.str_bonus"
                  name="saves.str_bonus"
                  value={character.saves.str_bonus}
                  onChange={onCharacterChange}
                  style={{ width: "20%" }}
                />
              </CardItem>
            </CardColumn>
            <CardColumn>
              <CardItem>
                <Label>DEX:</Label>
                <input
                  type="checkbox"
                  id="dex"
                  name="saves.dex"
                  checked={character.saves.dex}
                  onChange={onCharacterChange}
                />
                <Label>bonus:</Label>
                <input
                  type="number"
                  id="saves.dex_bonus"
                  name="saves.dex_bonus"
                  value={character.saves.dex_bonus}
                  onChange={onCharacterChange}
                  style={{ width: "20%" }}
                />
              </CardItem>
            </CardColumn>
          </CardRow>
          <CardRow>
            <CardColumn>
              <CardItem>
                <Label>CON:</Label>
                <input
                  type="checkbox"
                  id="con"
                  name="saves.con"
                  checked={character.saves.con}
                  onChange={onCharacterChange}
                />
                <Label>bonus:</Label>
                <input
                  type="number"
                  id="saves.con_bonus"
                  name="saves.con_bonus"
                  value={character.saves.con_bonus}
                  onChange={onCharacterChange}
                  style={{ width: "20%" }}
                />
              </CardItem>
            </CardColumn>
            <CardColumn>
              <CardItem>
                <Label>INT:</Label>
                <input
                  type="checkbox"
                  id="int"
                  name="saves.int"
                  checked={character.saves.int}
                  onChange={onCharacterChange}
                />
                <Label>bonus:</Label>
                <input
                  type="number"
                  id="saves.int_bonus"
                  name="saves.int_bonus"
                  value={character.saves.int_bonus}
                  onChange={onCharacterChange}
                  style={{ width: "20%" }}
                />
              </CardItem>
            </CardColumn>
          </CardRow>
          <CardRow>
            <CardColumn>
              <CardItem>
                <Label>WIS:</Label>
                <input
                  type="checkbox"
                  id="wis"
                  name="saves.wis"
                  checked={character.saves.wis}
                  onChange={onCharacterChange}
                />
                <Label>bonus:</Label>
                <input
                  type="number"
                  id="saves.wis_bonus"
                  name="saves.wis_bonus"
                  value={character.saves.wis_bonus}
                  onChange={onCharacterChange}
                  style={{ width: "20%" }}
                />
              </CardItem>
            </CardColumn>
            <CardColumn>
              <CardItem>
                <Label>CHA: </Label>
                <input
                  type="checkbox"
                  id="cha"
                  name="saves.cha"
                  checked={character.saves.cha}
                  onChange={onCharacterChange}
                />
                <Label>bonus:</Label>{" "}
                <input
                  type="number"
                  id="saves.cha_bonus"
                  name="saves.cha_bonus"
                  value={character.saves.cha_bonus}
                  onChange={onCharacterChange}
                  style={{ width: "20%" }}
                />
              </CardItem>
            </CardColumn>
          </CardRow>
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
          <CardColumn>
            <CardColumn>
              <Label>Armour Class (AC):</Label>
              <input
                type="number"
                id="ac"
                name="ac"
                value={character.ac}
                onChange={onCharacterChange}
                style={{ width: "20%" }}
              />
              <Label>DEX mod = {getModifier(character.stats.dex)}</Label>
            </CardColumn>
            <CardColumn>
              <Label>Initiative:</Label>
              <input
                type="number"
                id="initiative"
                name="initiative"
                value={character.initiative}
                onChange={onCharacterChange}
                style={{ width: "20%" }}
              />
            </CardColumn>
          </CardColumn>
        </SectionColumn>
        <SectionColumn>
          <h3>Magic</h3>
          <CardColumn>
            <Label>
              if applicable:
              <Select
                type="Select"
                id="ability"
                name="magic.ability"
                value={character.magic.ability}
                onChange={(e) => setMagicUse(e)}
              >
                <option value={""}>NA</option>
                <option value={"int"}>Intelligence</option>
                <option value={"wis"}>Wisdom</option>
                <option value={"cha"}>Charisma</option>
              </Select>
            </Label>
            <SheetMagic
              character={character}
              onCharacterChange={onCharacterChange}
            />
          </CardColumn>
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
          <SheetAttacks
            character={character}
            updateAttacks={updateAttacks}
            addAttack={addAttack}
          />
        </SectionColumn>
        <SectionColumn>
          <h3>Passives:</h3>
          <CardColumn>
            <CardRow>
              <Label>Senses:</Label>
              <input
                type="text"
                id="senses"
                placeholder="Darkvision?"
                name="passives.senses"
                value={character.passives.senses}
                onChange={onCharacterChange}
              />
            </CardRow>
            <CardRow>
              <Label>Passive Perception (PP):</Label>
              <input
                type="number"
                id="PP"
                name="passives.perception"
                value={character.passives.perception}
                onChange={onCharacterChange}
                style={{ width: "20%" }}
              />

              <Label>= 10 {getModifier(character.stats.wis)}(WIS)</Label>
              {character.skills.Perception === "Proficient" ? (
                <Label>+ {character.proficiency_bonus}</Label>
              ) : null}
              {character.skills.Perception === "Expert" ? (
                <Label>+ {character.proficiency_bonus * 2}</Label>
              ) : null}

              <Label>PP bonus:</Label>
              <input
                type="number"
                id="perception_bonus"
                name="passives.perception_bonus"
                value={character.passives.perception_bonus}
                onChange={onCharacterChange}
                style={{ width: "20%" }}
              />
            </CardRow>
            <CardRow>
              <Label>Passive Investigation (PInv):</Label>
              <input
                type="number"
                id="PI"
                name="passives.investigation"
                value={character.passives.investigation}
                onChange={onCharacterChange}
                style={{ width: "20%" }}
              />

              <Label>= 10 {getModifier(character.stats.int)}(INT)</Label>
              {character.skills.Investigation === "Proficient" ? (
                <Label>+ {character.proficiency_bonus}</Label>
              ) : null}
              {character.skills.Investigation === "Expert" ? (
                <Label>+ {character.proficiency_bonus * 2}</Label>
              ) : null}

              <Label>PInv bonus:</Label>
              <input
                type="number"
                id="investigation_bonus"
                name="passives.investigation_bonus"
                value={character.passives.investigation_bonus}
                onChange={onCharacterChange}
                style={{ width: "20%" }}
              />
            </CardRow>
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

export default ChooseClassGrid;

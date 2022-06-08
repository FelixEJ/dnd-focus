import React from "react";
import stylish from "styled-components";
import { Button, ButtonGroup, Select } from "@material-ui/core";
import AddItemModal from "./addItemModal";
import AddAttackModal from "./addAttackModal";

import ConfirmDeleteItemModal from "../confirmDeleteItemModal";
import ConfirmDeleteAttackModal from "../confirmDeleteAttackModal";

import CreateProficiencies from "./createProficiencies";
import CreateFeatures from "./createFeatures";
import CreateInventory from "./createInventory";

import Inventory from "../inventory";
import Features from "../features";
import SheetAttacks from "../sheetAttacks";
import SheetMagic from "../sheetMagic";

import { getModifier, getSave, getSkill, getPassive } from "../utils";

import {
  WindowContent,
  PageContent,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButtons,
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
  updateAttacks,
  addAttack,
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
              <option value={""}></option>
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
              size="3"
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
              <option value={""}></option>
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
              size="3"
              display="none"
            />
          </CardRow>
          <CardRow>
            <Label>Multiclass 2 Hit Dice:</Label>
            <Select
              id="hit_dice.mult2_dice"
              name="hit_dice.mult2_dice"
              value={character.hit_dice.mult2_dice}
              onChange={onCharacterChange}
            >
              <option value={""}></option>
              <option value={"d6"}>d6</option>
              <option value={"d8"}>d8</option>
              <option value={"d10"}>d10</option>
              <option value={"d12"}>d12</option>
            </Select>
            <Label> Max:</Label>
            <input
              type="number"
              id="hit_dice.mult2_max"
              name="hit_dice.mult2_max"
              value={character.hit_dice.mult2_max}
              onChange={onCharacterChange}
              size="3"
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
              size="4"
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
              size="4"
            />
          </CardColumn>
        </SectionColumn>
        <CreateProficiencies
          character={character}
          onCharacterChange={onCharacterChange}
        />
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
                  size="2"
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
                  size="2"
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
                  size="2"
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
                  size="2"
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
                  size="2"
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
                  size="2"
                />
              </CardItem>
            </CardColumn>
          </CardRow>
          <SectionColumn>
            <Inventory
              character={character}
              onCharacterChange={onCharacterChange}
              updateInventory={updateInventory}
              updateEquipment={updateEquipment}
              addItem={addItem}
              addFeature={addFeature}
              addEquipment={addEquipment}
            />
          </SectionColumn>
        </SectionColumn>
        <SectionColumn>
          <CardRow>
            <CardColumn>
              <Label>Armour Class (AC):</Label>
              <input
                type="number"
                id="ac"
                name="ac"
                value={character.ac}
                onChange={onCharacterChange}
                size="3"
              />
              <Label>
                AC = 10/armour + {getModifier(character.stats.dex)}
                {"(DEX)"}
              </Label>
            </CardColumn>
            <CardColumn>
              <Label>Initiative:</Label>
              <input
                type="number"
                id="initiative"
                name="initiative"
                value={character.initiative}
                onChange={onCharacterChange}
                size="3"
              />
              <Label>DEX mod = {getModifier(character.stats.dex)}</Label>
            </CardColumn>
          </CardRow>
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
            {character.magic.magic_user === true && (
              <CardColumn>
                <SheetMagic
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
              </CardColumn>
            )}
          </CardColumn>
        </SectionColumn>

        <SectionColumn>
          <Features
            character={character}
            updateFeatures={updateFeatures}
            onCharacterChange={onCharacterChange}
            addFeature={addFeature}
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
            <CardColumn> 
              <Label>Passive Perception (PP) = 
                {getPassive(
                  character,
                  character.passives.perception_bonus,
                  character.skills.Perception,
                  character.skills.Perception_bonus,
                  character.stats.wis
                )}
              </Label>

              <Label>
                PP bonus:
                <input
                  type="number"
                  id="perception_bonus"
                  name="passives.perception_bonus"
                  value={character.passives.perception_bonus}
                  onChange={onCharacterChange}
                  size="3"
                />
              </Label>
            </CardColumn>
            <CardColumn>
              <Label>Passive Investigation (PI) = 
                {getPassive(
                  character,
                  character.passives.investigation_bonus,
                  character.skills.Investigation,
                  character.skills.Investigation_bonus,
                  character.stats.int
                )}
              </Label>

              <Label>
                PI bonus:
                <input
                  type="number"
                  id="investigation_bonus"
                  name="passives.investigation_bonus"
                  value={character.passives.investigation_bonus}
                  onChange={onCharacterChange}
                  size="3"
                />
              </Label>
            </CardColumn>
          </CardColumn>
        </SectionColumn>
      </PageContent>
      <BotButtons>
        <ButtonGroup variant="contained">
          <Button onClick={Previous}>Back</Button>
          <Button onClick={Continue}>Next</Button>
        </ButtonGroup>
      </BotButtons>
    </WindowContent>
  );
};

export default ChooseClassGrid;

import React from "react";
import stylish from "styled-components";
import { Button, ButtonGroup, Select } from "@material-ui/core";

import { getModifier, getSave, getSkill, getPassive } from "../utils";

import CreateProficiencies from "./createProficiencies";
import Inventory from "../inventory";
import Features from "../features";
import SheetAttacks from "../sheetAttacks";
import SheetMagic from "../sheetMagic";
import FeatureAccordion from "../featuresAccordion";
import AddFeatureModal from "../addFeatureModal";
import AddSkillModal from "../addSkillModal";
import InventoryAccordion from "../inventoryAccordion";
import EquipmentAccordion from "../equipmentAccordion";
import EditMagicModal from "../editMagicModal";
import AddAttackModal from "../addAttackModal";
import AttackAccordion from "../attackAccordion";

import {
  Window,
  Page,
  Section,
  Card,
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
  saveLocalCharacter,
  saveCharacter,
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

  function saveLocal(e) {
    saveLocalCharacter(character);
    Continue(e);
  }

  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character));

  return (
    <Page>
      <h1>Choose Class:</h1>
      <ButtonGroup variant="contained">
        <Button onClick={Previous}>Back</Button>
        <Button onClick={saveLocal}>Next</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button onClick={() => saveCharacter(character)} variant="outlined">
          Save Character to Browser
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button>
          <a
            href={"data:" + data}
            download={character.name + "_lvl" + character.level + ".json"}
          >
            Download Character
          </a>
        </Button>
      </ButtonGroup>
      <Label>
        {character.name}, lvl:{character.level}
      </Label>
      <Section>
        <Card>
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

          <CardColumn>
            <Label>Proficiency Bonus:</Label>
            <input
              type="number"
              id="proficiency_bonus"
              name="proficiency_bonus"
              value={character.proficiency_bonus}
              onChange={onCharacterChange}
              style={{ width: "15%" }}
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
        </Card>
      </Section>
      <Section>
        <h3>Proficiencies</h3>
        <AddSkillModal
          character={character}
          onCharacterChange={onCharacterChange}
        />
        <Card>
          <CreateProficiencies
            character={character}
            onCharacterChange={onCharacterChange}
          />
        </Card>
      </Section>
      <Section>
        <h3>Saving Throws:</h3>
        <Card>
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
                  style={{ width: "30%" }}
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
                  style={{ width: "30%" }}
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
                  style={{ width: "30%" }}
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
                  style={{ width: "30%" }}
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
                  style={{ width: "30%" }}
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
                  style={{ width: "30%" }}
                />
              </CardItem>
            </CardColumn>
          </CardRow>
        </Card>
      </Section>
      <Section>
        <h4>Inventory</h4>
        <Inventory
          character={character}
          onCharacterChange={onCharacterChange}
          updateEquipment={updateEquipment}
          addItem={addItem}
          updateInventory={updateInventory}
          addEquipment={addEquipment}
        />
      </Section>
      <Section>
        <Card>
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
        </Card>
      </Section>
      <Section>
        <h4>Magic</h4>
        <EditMagicModal
          character={character}
          onCharacterChange={onCharacterChange}
        />
        <Card>
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
        </Card>
      </Section>
      <Section>
        <h4>Features & Abilities</h4>
        <AddFeatureModal addFeature={addFeature} />
        <Card>
          <FeatureAccordion
            character={character}
            updateFeatures={updateFeatures}
          />
        </Card>
      </Section>

      <Section>
        <h4>Attacks</h4>
        <AddAttackModal addAttack={addAttack} character={character} />
        <Card>
          <AttackAccordion
            character={character}
            updateAttacks={updateAttacks}
          />
        </Card>
      </Section>
      <Section>
        <h3>Passives:</h3>
        <Card>
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
            <CardColumn>
              <Label>Passive Perception (PP): </Label>
              {getPassive(
                character,
                character.passives.perception_bonus,
                character.skills.Perception,
                character.skills.Perception_bonus,
                character.stats.wis
              )}
            </CardColumn>

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
            <CardColumn>
              <Label>Passive Investigation (PI):</Label>
              {getPassive(
                character,
                character.passives.investigation_bonus,
                character.skills.Investigation,
                character.skills.Investigation_bonus,
                character.stats.int
              )}
            </CardColumn>

            <Label>PI bonus:</Label>
            <input
              type="number"
              id="investigation_bonus"
              name="passives.investigation_bonus"
              value={character.passives.investigation_bonus}
              onChange={onCharacterChange}
              style={{ width: "20%" }}
            />
          </CardRow>
        </Card>
      </Section>
      <ButtonGroup variant="contained">
        <Button onClick={() => saveCharacter(character)} variant="outlined">
          Save Character to Browser
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button>
          <a
            href={"data:" + data}
            download={character.name + "_lvl" + character.level + ".json"}
          >
            Download Character
          </a>
        </Button>
      </ButtonGroup>
      <BotButton>
        <ButtonGroup variant="contained">
          <Button onClick={Previous}>Back</Button>
          <Button onClick={saveLocal}>Next</Button>
        </ButtonGroup>
      </BotButton>
    </Page>
  );
};

export default ChooseClassGrid;

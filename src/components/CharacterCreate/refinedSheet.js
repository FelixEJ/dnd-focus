import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, FormControl } from "@material-ui/core";
import styled from "styled-components";

import SideBar from "../Navigation/SideBar";
import LoadCharacterFromJSON from "../loadCharacterFromJSONModal";
import Basics from "../sectionBasics";
import Abilities from "../sectionAbilities";
import Proficiencies from "../sectionProficiencies";
import Attacks from "../sectionAttacks";
import Combat from "../sectionCombat";
import Inventory from "../sectionInventory";
import Magic from "../sectionMagic";
import Personality from "../sectionPersonality";
import NotesAccordion from "../notesAccordion";

import { blankCharacter } from "../../data/character";

import RollDiceModal from "../rollDiceModal";
import RestModal from "../restModal";
import EditAbilitiesModal from "../editAbilitiesModal";
import EditProficienciesModal from "../editProficienciesModal";
import EditCombatModal from "../editCombatModal";
import AddAttackModal from "../addAttackModal";
import EditMagicModal from "../editMagicModal";
import AddFeatureModal from "../addFeatureModal";
import FeaturesAccordion from "../featuresAccordion";
import EditPersonalitiesModal from "../editPersonalitiesModal";
import AddNoteModal from "../addNoteModal";
import RollAttacks from "../rollAttacksModal";

import {
  Window,
  Page,
  Layout,
  Section,
  Card,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../StyledPageComponents/pageStyling";

const BasicSection = styled(Section)`
  flex-flow: row nowrap;
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
    max-width: 50vw;
  }
  @media only screen and (min-width: 1600px) {
  }
`;
const AbilitySection = styled(Section)`
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    height: 99vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 60vh;
  }
  @media only screen and (min-width: 1600px) {
    height: 99vh;
  }
`;

const CombatSection = styled(Section)`
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    height: 48vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 39vh;
  }
  @media only screen and (min-width: 1600px) {
    height: 45vh;
  }
`;
const AttackSection = styled(Section)`
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    height: 48vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 64vh;
  }
  @media only screen and (min-width: 1600px) {
    height: 54vh;
  }
`;
const MagicSection = styled(Section)`
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    max-height: 40vh;
  }
  @media only screen and (min-width: 1024px) {
    max-height: 35vh;
  }
  @media only screen and (min-width: 1600px) {
    max-height: 48vh;
  }
`;
const FeatSection = styled(Section)`
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    height: 99vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 60vh;
  }
  @media only screen and (min-width: 1600px) {
    height: 99vh;
  }
`;
const InvSection = styled(Section)`
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    height: 50vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 39vh;
  }
  @media only screen and (min-width: 1600px) {
    height: 48vh;
  }
`;

const RefinedSheet = () => {
  const [character, setLoadedChar] = useState(blankCharacter);
  let allChars = getAllCharacters();

  // useEffect(() => {
  //   // allChars = getAllCharacters();
  //   console.log("new chars");
  // }, [allChars]);

  function getAllCharacters() {
    var arrayOfChars = [];
    var archive = {},
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      archive[keys[i]] = localStorage.getItem(keys[i]);
      arrayOfChars[i] = JSON.parse(archive[keys[i]]);
    }
    return arrayOfChars;
  }

  function handleChange(e) {
    let charNum = e.target.value;
    setLoadedChar(allChars[charNum]);
  }

  function loadFromJson(character) {
    const newChar = character;
    setLoadedChar(newChar);
    console.log(newChar);
  }

  function onCharacterChange(e) {
    const path = e.target.name.split(".");
    const finalProp = path.pop();
    const newCharacter = { ...character };
    let pointer = newCharacter;
    path.forEach((el) => {
      pointer[el] = { ...pointer[el] };
      pointer = pointer[el];
    });
    pointer[finalProp] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setLoadedChar(newCharacter);
    // saveLocalCharacter(newCharacter);
    // console.log("new char", newCharacter);
  }

  function updateCharacter(newChar) {
    // const tempChar = newChar;
    // const updatedCharacter = { ...loadedChar };
    // updatedCharacter = tempChar;
    setLoadedChar(newChar);
    saveLocalCharacter(newChar);
    // console.log("updated char:", newChar);
  }

  function updateFeatures(newFeats) {
    const tempFeatures = newFeats;
    const updatedCharacter = { ...character };
    updatedCharacter.features = tempFeatures;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateInventory(newInv) {
    const tempInv = newInv;
    const updatedCharacter = { ...character };
    updatedCharacter.inventory = tempInv;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateEquipment(newEquip) {
    const tempEquip = newEquip;
    const updatedCharacter = { ...character };
    updatedCharacter.equipment = tempEquip;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateAttacks(newAttack) {
    const tempAttack = newAttack;
    const updatedCharacter = { ...character };
    updatedCharacter.attacks = tempAttack;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateNotes(newNote) {
    const tempNote = newNote;
    const updatedCharacter = { ...character };
    updatedCharacter.notes = tempNote;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
    // console.log("new Feature", updatedCharacter);
  }

  function updateHealth(newHealth) {
    const tempHealth = newHealth;
    const updatedCharacter = { ...character };
    updatedCharacter.hp = tempHealth;
    setLoadedChar(updatedCharacter);
    saveLocalCharacter(updatedCharacter);
  }

  // duplicate
  function addFeature(newFeat) {
    const newFeature = newFeat;
    newFeat.feature_id = character.features.length + 1;
    const newCharacter = { ...character };
    // console.log("char copy:", newCharacter);
    const oldFeatures = newCharacter.features;
    oldFeatures.push(newFeature);
    // setCharacter({ features: [...character.features, oldFeatures]});
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Feature", newCharacter);
  }

  // duplicated
  function addEquipment(newEquip) {
    const newEquipment = newEquip;
    newEquip.equipment_id = character.equipment.length + 1;
    const newCharacter = { ...character };
    const freshEquipment = newCharacter.equipment;
    freshEquipment.push(newEquipment);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Equipment", newCharacter);
  }

  // duplicated
  function addItem(newItem) {
    const newInventoryItem = newItem;
    newItem.item_id = character.inventory.length + 1;
    const newCharacter = { ...character };
    const freshInventory = newCharacter.inventory;
    freshInventory.push(newInventoryItem);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new Invetory", ogCharacter);
  }

  function addAttack(newattack) {
    const newAttack = newattack;
    newattack.attack_id = character.attacks.length + 1;
    const newCharacter = { ...character };
    const oldAttacks = newCharacter.attacks;
    oldAttacks.push(newAttack);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new attack", loadedChar);
  }
  function addNote(newnote) {
    const newNote = newnote;
    newnote.note_id = character.notes.length + 1;
    const newCharacter = { ...character };
    const oldNotes = newCharacter.notes;
    oldNotes.push(newNote);
    setLoadedChar(newCharacter);
    saveLocalCharacter(newCharacter);
    // console.log("new attack", loadedChar);
  }

  function saveLocalCharacter(char) {
    localStorage.setItem(char.name, JSON.stringify(char));
  }

  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character));

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  return (
    <div>
      <Page>
        <SideBar />
        <LoadCharacterFromJSON
          loadFromJson={loadFromJson}
          character={character}
        />
        <FormControl>
          {/* <label>Select Character&emsp;</label> */}
          <select
            id="char_select"
            name="char_select"
            value={character.name}
            onChange={handleChange}
          >
            <option value={character}>Select character</option>
            {allChars.map((char, index) => (
              <>
                {char.size && (
                  <option key={index} value={index}>
                    {char.name} lvl{char.level}
                  </option>
                )}
              </>
            ))}
          </select>
        </FormControl>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{character.name}</title>
        </Helmet>
        {character.level != 0 && (
          <>
            <div id="top" />
            <BasicSection>
              <RollDiceModal />
              <Card>
                <Basics
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
              </Card>
              <RestModal
                character={character}
                updateCharacter={updateCharacter}
              />
            </BasicSection>
            <Button
              variant="contained"
              onClick={() => saveLocalCharacter(character)}
            >
              Save to local storage
            </Button>
            <button>
              <a
                href={"data:" + data}
                download={
                  character.name +
                  "_lvl" +
                  character.level +
                  "_" +
                  today +
                  ".json"
                }
              >
                Download Character
              </a>
            </button>
            <Layout>
              <div id="abilities" />
              <AbilitySection>
                <h4>Ability Scores</h4>
                <EditAbilitiesModal
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
                <Card>
                  <Abilities
                    character={character}
                    setLoadedChar={setLoadedChar}
                    onCharacterChange={onCharacterChange}
                  />
                </Card>
              </AbilitySection>
              {/* <ProfsSection>
                <h4>Profs & Languages</h4>
                <EditProficienciesModal
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
                <Card>
                  <Proficiencies
                    character={character}
                    onCharacterChange={onCharacterChange}
                  />
                </Card>
              </ProfsSection> */}
              <div id="combat"></div>
              <CombatSection>
                <h4>Combat</h4>
                <EditCombatModal
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
                <Card>
                  <Combat
                    character={character}
                    onCharacterChange={onCharacterChange}
                    updateHealth={updateHealth}
                  />
                </Card>
              </CombatSection>
              <div id="attacks"></div>
              <AttackSection>
                <RollAttacks character={character} />
                <h4>Attacks & Spells</h4>
                <AddAttackModal addAttack={addAttack} character={character} />
                <Card>
                  <Attacks
                    character={character}
                    updateAttacks={updateAttacks}
                    addAttack={addAttack}
                  />
                </Card>
              </AttackSection>
              <div id="magic"></div>
              <MagicSection>
                <h4>Magic</h4>
                <EditMagicModal
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
                {character.magic.ability !== "" && (
                  <Card>
                    <Magic
                      character={character}
                      onCharacterChange={onCharacterChange}
                    />
                  </Card>
                )}
              </MagicSection>
              <div id="inventory"></div>
              <InvSection>
                <h4>Inventory</h4>
                <Inventory
                  character={character}
                  onCharacterChange={onCharacterChange}
                  updateInventory={updateInventory}
                  updateEquipment={updateEquipment}
                  addItem={addItem}
                  addEquipment={addEquipment}
                />
              </InvSection>
              <div id="features"></div>
              <FeatSection>
                <h4>Features & Abilities</h4>
                <AddFeatureModal addFeature={addFeature} />
                <Card>
                  <FeaturesAccordion
                    character={character}
                    updateFeatures={updateFeatures}
                  />
                </Card>
              </FeatSection>

              {/* <PersSection>
                <h4>Personality</h4>
                <EditPersonalitiesModal
                  character={character}
                  onCharacterChange={onCharacterChange}
                />
                <Card>
                  <Personality
                    character={character}
                    onCharacterChange={onCharacterChange}
                  />
                </Card>
              </PersSection> */}
              {/* <NotesSection>
                <h4>Notes</h4>
                <AddNoteModal addNote={addNote} />
                <Card>
                  <NotesAccordion
                    character={character}
                    onCharacterChange={onCharacterChange}
                    updateNotes={updateNotes}
                  />
                </Card>
              </NotesSection> */}
            </Layout>
          </>
        )}
      </Page>
    </div>
  );
};

export default RefinedSheet;

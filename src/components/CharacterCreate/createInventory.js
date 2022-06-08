import React from "react";
import styled from "styled-components";

import AddFeatureModal from "./addFeatureModal";
import AddEquipmentModal from "./addEquipmentModal";
import AddItemModal from "./addItemModal";
import AddSkillModal from "./addSkillModal";

import ConfirmDeleteEquipmentModal from "../confirmDeleteEquipmentModal";
import ConfirmDeleteItemModal from "../confirmDeleteItemModal";

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

export const CreateInventory = ({
  onCharacterChange,
  character,
  updateEquipment,
  addEquipment,
  addItem,
  updateInventory,
}) => {
  return (
    <SectionColumn>
      <h3>Equipment</h3>
      <CardColumn>
        <CardColumn>
          <AddEquipmentModal
            addEquipment={addEquipment}
            character={character}
          />

          {character.equipment.map((equip, index) => (
            <h4 key={equip.equipment_id + equip.equipment_name}>
              {equip.equipment_name}
              <ConfirmDeleteEquipmentModal
                character={character}
                updateEquipment={updateEquipment}
                index={index}
              />
            </h4>
          ))}
        </CardColumn>
      </CardColumn>
      <h3>Inventory</h3>
      <CardColumn>
        <CardColumn>
          <AddItemModal addItem={addItem} character={character} />

          {character.inventory.map((CardColumn, index) => (
            <h4 key={index}>
              {CardColumn.item_name}
              <ConfirmDeleteItemModal
                character={character}
                updateInventory={updateInventory}
                index={index}
              />
            </h4>
          ))}
        </CardColumn>
      </CardColumn>
        <h3>Money</h3>
        <CardRow>
          <CardColumn>
            <Label>Copper:</Label>
            <input
              type="number"
              id="copper"
              name="currency.copper"
              value={character.currency.copper}
              onChange={onCharacterChange}
              size="6"
            />
          </CardColumn>
          <CardColumn>
            <Label>Silver:</Label>
            <input
              type="number"
              id="silver"
              name="currency.silver"
              value={character.currency.silver}
              onChange={onCharacterChange}
              size="6"
            />
          </CardColumn>
          <CardColumn>
            <Label>Electrum:</Label>
            <input
              type="number"
              id="electrum"
              name="currency.electrum"
              value={character.currency.electrum}
              onChange={onCharacterChange}
              size="6"
            />
          </CardColumn>
          <CardColumn>
            <Label>Gold:</Label>
            <input
              type="number"
              id="gold"
              name="currency.gold"
              value={character.currency.gold}
              onChange={onCharacterChange}
              size="6"
            />
          </CardColumn>
          <CardColumn>
            <Label>Platinums:</Label>
            <input
              type="number"
              id="platinum"
              name="currency.platinum"
              value={character.currency.platinum}
              onChange={onCharacterChange}
              size="6"
            />
          </CardColumn>
        </CardRow>
    </SectionColumn>
  );
};

export default CreateInventory;

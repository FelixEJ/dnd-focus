import React from "react";
import styled from "styled-components";
import InventoryAccordion from "./inventoryAccordion";
import EquipmentAccordion from "./equipmentAccordion";

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
} from "./StyledPageComponents/pageStyling";

const MoneyBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 99%;
`;

const MoneyUnit = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 70px;
  padding: 2px;
`;

const Container = styled.div`
  width: 99%;
`;

const Inventory = ({
  character,
  onCharacterChange,
  updateInventory,
  updateEquipment,
  addItem,
  addEquipment,
}) => {
  const getTotalMoney = () => {
    let total = 0;
    total += Number(character.currency.copper) / 100;
    total += Number(character.currency.silver) / 10;
    total += Number(character.currency.electrum) / 2;
    total += Number(character.currency.gold);
    total += Number(character.currency.platinum) * 10;
    return total;
  };

  return (
    <Card>
      <EquipmentAccordion
        character={character}
        updateEquipment={updateEquipment}
        addEquipment={addEquipment}
      />
      <InventoryAccordion
        character={character}
        addItem={addItem}
        updateInventory={updateInventory}
      />
      <b>Money</b>
        <MoneyBox>
          <MoneyUnit>
            CP
            <input
              type="number"
              min="0"
              id="currency.copper"
              name="currency.copper"
              value={character.currency.copper}
              onChange={onCharacterChange}
              style={{ width: "60px", maxWidth: "70px" }}
            />
          </MoneyUnit>
          <MoneyUnit>
            SP
            <input
              type="number"
              min="0"
              id="currency.silver"
              name="currency.silver"
              value={character.currency.silver}
              onChange={onCharacterChange}
              style={{ width: "60px", maxWidth: "70px" }}
            />
          </MoneyUnit>
          <MoneyUnit>
            EP
            <input
              type="number"
              min="0"
              id="currency.electrum"
              name="currency.electrum"
              value={character.currency.electrum}
              onChange={onCharacterChange}
              style={{ width: "60px", maxWidth: "70px" }}
            />
          </MoneyUnit>
          <MoneyUnit>
            GP
            <input
              type="number"
              min="0"
              id="currency.gold"
              name="currency.gold"
              value={character.currency.gold}
              onChange={onCharacterChange}
              style={{ width: "60px", maxWidth: "70px" }}
            />
          </MoneyUnit>
          <MoneyUnit>
            PP
            <input
              type="number"
              min="0"
              id="currency.platinum"
              name="currency.platinum"
              value={character.currency.platinum}
              onChange={onCharacterChange}
              style={{ width: "60px", maxWidth: "70px" }}
            />
          </MoneyUnit>
        </MoneyBox>
      Total: <b>{getTotalMoney()} gp</b>
    </Card>
  );
};

export default Inventory;

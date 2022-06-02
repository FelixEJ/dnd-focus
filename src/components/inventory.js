import React from "react";
import styled from "styled-components";
import InventoryAccordion from "./inventoryAccordion";
import EquipmentAccordion from "./equipmentAccordion";

const Container = styled.div`
  text-align: center;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  background-color: none;
  max-height: 30vh;
  overflow: auto;

  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 1300px) {
    max-height: 50vh;
  }
`;

const Box = styled.div`
  width: 98%;
  background-color: none;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Text = styled.div`
  border-style: inset;
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const MoneyBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MoneyUnit = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
`;

const Inventory = ({
  character,
  onCharacterChange,
  updateInventory,
  updateEquipment,
  addItem,
  addFeature,
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
    <div>
      <h4>Inventory</h4>
      <Container>
        <Box>
          <Text>
            <EquipmentAccordion
              character={character}
              updateEquipment={updateEquipment}
              addEquipment={addEquipment}
              addFeature={addFeature}
            />{" "}
          </Text>
        </Box>
        <Box>
          <Text>
            <InventoryAccordion
              character={character}
              addItem={addItem}
              updateInventory={updateInventory}
            />{" "}
          </Text>
        </Box>
        
      </Container>
      <Box>
          <Text>
            <b>Money</b>
            <MoneyBox>
              <MoneyUnit>
                cp:
                <input
                  type="number"
                  min="0"
                  id="currency.copper"
                  name="currency.copper"
                  value={character.currency.copper}
                  onChange={onCharacterChange}
                  size="4"
                />
              </MoneyUnit>
              <MoneyUnit>
                sp:
                <input
                  type="number"
                  min="0"
                  id="currency.silver"
                  name="currency.silver"
                  value={character.currency.silver}
                  onChange={onCharacterChange}
                  size="4"
                />
              </MoneyUnit>
              <MoneyUnit>
                ep:
                <input
                  type="number"
                  min="0"
                  id="currency.electrum"
                  name="currency.electrum"
                  value={character.currency.electrum}
                  onChange={onCharacterChange}
                  size="4"
                />
              </MoneyUnit>
              <MoneyUnit>
                gp:
                <input
                  type="number"
                  min="0"
                  id="currency.gold"
                  name="currency.gold"
                  value={character.currency.gold}
                  onChange={onCharacterChange}
                  size="4"
                />
              </MoneyUnit>
              <MoneyUnit>
                pp:
                <input
                  type="number"
                  min="0"
                  id="currency.platinum"
                  name="currency.platinum"
                  value={character.currency.platinum}
                  onChange={onCharacterChange}
                  size="4"
                />
              </MoneyUnit>
            </MoneyBox>
            Total: <b>{getTotalMoney()} gp</b>
          </Text>
        </Box>
    </div>
  );
};

export default Inventory;

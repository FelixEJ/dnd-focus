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
const Inset = styled.div`
  border-style: inset;
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const MoneyBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 90vw;
  max-width: 400px;
`;

const MoneyUnit = styled.div`
  display: flex;
  flex-flow: column nowrap;
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
          <Inset>
            <EquipmentAccordion
              character={character}
              updateEquipment={updateEquipment}
              addEquipment={addEquipment}
              addFeature={addFeature}
            />{" "}
          </Inset>
        </Box>
        <Box>
          <Inset>
            <InventoryAccordion
              character={character}
              addItem={addItem}
              updateInventory={updateInventory}
            />{" "}
          </Inset>
        </Box>
        
      </Container>
      <Box>
          <Inset>
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
                  style={{width: "18vw", maxWidth: "80px"}}
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
                  style={{width: "18vw", maxWidth: "80px"}}
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
                  style={{width: "18vw", maxWidth: "80px"}}
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
                  style={{width: "18vw", maxWidth: "80px"}}
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
                  style={{width: "18vw", maxWidth: "80px"}}
                />
              </MoneyUnit>
            </MoneyBox>
            Total: <b>{getTotalMoney()} gp</b>
          </Inset>
        </Box>
    </div>
  );
};

export default Inventory;

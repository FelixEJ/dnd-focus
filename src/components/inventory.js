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
      <Container>
        <Box>
          <h4>Inventory</h4>
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
        <Box>
          <Text>
            cp:{character.currency.copper} | sp:{character.currency.silver} |
            ep: {character.currency.electrum} | gp: {character.currency.gold} |
            pp: {character.currency.platinum}
            <br />
            Total: {getTotalMoney()} gp
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default Inventory;

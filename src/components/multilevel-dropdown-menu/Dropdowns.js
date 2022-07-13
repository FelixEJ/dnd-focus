import styled from "styled-components";
import MenuItems from "./MenuItems";

const Dropdown = styled.ul`
  position: absolute;
  left: ${(props) => (props.dropdownAgain ? "100%" : "auto")};
  right: 0;
  top: ${(props) => (props.dropdownAgain ? "-7px" : "")};
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
  font-size: 0.875rem;
  z-index: 9999;
  min-width: 10rem;
  padding: 0.5rem 0;
  list-style: none;
  background-color: #fff;
  border-radius: 0.5rem;
  display: ${(props) => (props.dropdown ? "block" : "none")};

`;

const Dropdowns = ({ submenus, dropdown, depthLevel }) => {
    depthLevel++;
     const dropdownAgain = depthLevel > 1 ? "true" : "";
  return (
    <Dropdown dropdown={dropdown}  dropdownAgain={dropdownAgain}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </Dropdown>
  );
};

export default Dropdowns;

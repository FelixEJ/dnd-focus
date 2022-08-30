import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdowns";
import styled from "styled-components";

const MenuItemList = styled.li`
  position: relative;
  font-size: 14px;
  list-style-type: none;
`;

const MenuItemButton = styled.button`
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 0.7rem 1rem;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const Arrow = styled.span`
  &::after {
    content: "";
    display: inline-block;
    margin-left: 0.28em;
    vertical-align: 0.09em;
    border-top: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const MenuItems = ({ items, depthLevel, handleToggle, index }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeMenu = () => {
    handleToggle();
  }

  return (
    <MenuItemList
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {(items.submenu && items.submenu.length > 0) ? (
        <>
          <MenuItemButton
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} {depthLevel > 0 ? <span>&raquo;</span> : <Arrow />}
          </MenuItemButton>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <MenuItemButton>
          <Link to={items.path} style={linkStyle} onClick={() => closeMenu()}>{items.title}</Link>
        </MenuItemButton>
      )}
    </MenuItemList>
  );
};

export default MenuItems;

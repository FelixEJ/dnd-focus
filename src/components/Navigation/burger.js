import * as React from "react";
import styled from "styled-components";
import Menu from 'react-burger-menu/lib/menus/slide'
import MenuItems from "./MenuItems";
import { menuTitles } from "./menuTitles";

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "16px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    maxWidth: "90%",
    left: "0",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    height: "100%",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    height: "95%",
  },
  bmItem: {
    display: "block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};


class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div>
        <Menu
          styles={styles}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          {menuTitles.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel}
                  />
                );
              })}
        </Menu>
        {/* <button onClick={() => this.toggleMenu()}>toggle</button> */}
      </div>
    );
  }
}

export default Burger;

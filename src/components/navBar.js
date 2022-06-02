import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {  
  render() {
    return (
      <div>
        <div className="barNav" id="barNav">
          <table >
            <thead className="navTable">
              <th className="nav-item">
                <NavLink exact={true} className="nav-link" to="/">
                  Home
                </NavLink>
              </th>
              {/* <th className="nav-item">
                <NavLink className="nav-link" to="/createCharacter">
                Create Character
                </NavLink>
              </th> */}
              <th className="nav-item">
                <NavLink className="nav-link" to="/createCharacterGrid">
                Create Character
                </NavLink>
              </th>
              <th className="nav-item">
                <NavLink className="nav-link" to="/loadCharacter">
                Load Character
                </NavLink>
              </th>
            </thead>
          </table>
        </div>
      </div>      
    );
  }
}

export default NavBar;
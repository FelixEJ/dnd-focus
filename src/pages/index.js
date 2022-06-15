import React from "react";
import NavBar from "../components/navBar";
import "../App.css";
import Success from "../components/CharacterCreate/success";


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
} from "../components/StyledPageComponents/pageStyling";

const IndexPage = () => {
  return (
    <div>
      <NavBar />
      <Page>
        <h1>hello</h1>
      </Page>
    </div>
  );
};

export default IndexPage;

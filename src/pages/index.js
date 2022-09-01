import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/navBar";
import "../App.css";
import styled from "styled-components";

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

const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 60vw;
  padding-left: 15vw;

  .dark-mode &{
    color: #dbdbdb;
  }

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 10vw;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 0;
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Word = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const TitleText = styled.h1`
  display: inline;
  text-transform: uppercase;
  font-size: 1.5em;
`;
const Capital = styled.h1`
  display: inline;
  text-transform: uppercase;
  font-size: 5em;
`;
const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90vw;
  padding: 15px;

  .dark-mode &{
    color: #dbdbdb;
  }

  @media only screen and (min-width: 480px) {
    width: 80vw;
  }
  @media only screen and (min-width: 768px) {
    width: 60vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 60vw;
  }
  @media only screen and (min-width: 1600px) {
    width: 60vw;
  }
`;
const Text = styled.p`
  font-size: 1.2em;
  text-align: left;
`;
const Question = styled.p`
  font-size: 1.6em;
`;
const Answer = styled.p`
  font-size: 1.1em;
`;

const IndexPage = () => {
  return (
    <Page>
      <Helmet>
            <meta charSet="utf-8" />
            <title>DnD FOCUS Free Online Character Upkeep Sheet</title>
          </Helmet>
      <TitleContainer>
        <Word>
          <Capital>F</Capital>
          <TitleText>ree</TitleText>
        </Word>
        <Word>
          <Capital>O</Capital>
          <TitleText>nline</TitleText>
        </Word>
        <Word>
          <Capital>c</Capital>
          <TitleText>haracter</TitleText>
        </Word>
        <Word>
          <Capital>u</Capital>
          <TitleText>pkeep</TitleText>
        </Word>
        <Word>
          <Capital>s</Capital>
          <TitleText>heet</TitleText>
        </Word>
      </TitleContainer>
      <TextContainer >
      {/* <TextContainer style={{ backgroundColor: "rgb(255,255,255, .3)"}}> */}
        <Text>
          Are you sick of being asked to re-buy all your cool physical D&D books
          to use online character tracking? Do you want to be able to remember
          your HP and spell slots without having to remember to bring a folder
          whenever you play? Do you want to be able to homebrew a character to
          the minnest/maxest? Then do I have the site for you!
        </Text>
        <Text>
          This is a home-made site designed to act as a semi-online, paper free
          way to store all your D&D characters information in one, easy to
          access place. You will be able to store everything you need to play a
          session of the greatest table-top roleplaying game, and no longer have
          to worry about carrying your character sheet or bringing your rule
          books from home, as you can store all the necessary sections right
          here. And best of all, it's all free! You will need your own copy of
          the rules, as this site is not licensed or endorsed by WotC, however
          there are no restrictions on what you can enter for your character, so
          homebrew away! Once you have made it, you will be able to access it on
          your phone, tablet or computer at any time. Track your health,
          abilities, spell slots, and items; Look up all of your characters info
          in only a few clicks/touches, and even keep notes about your current
          campaign.
        </Text>
        <Text>
          This project is a solo side gig and may have features (bugs) that
          haven't been optimised (fixed) yet, so please email me at{" "}
          <a href="mailto: dndfocuscontact@gmail.com">
            dndfocuscontact@gmail.com
          </a>{" "}
          if you run into any issues. Screenshots and character JSON files are
          appreciated.
        </Text>
        <Question>Q's</Question>
        <Question>Q: How is this wizardry possible?</Question>
        <Answer>
          The character sheet is converted to a JSON file and saved to your
          browser as you use it. You can also download the file and email it to
          yourself (or me to help me refine the site) to be able to access it
          anywhere and across browsers. The file is only a few KB.
        </Answer>
        <Question>Q: Do I need to sign in or something?</Question>
        <Answer>
          No! Heck no! Data collection, in this economy? You gotta be kidding
          me. If you want to change device or browser, simply send your
          downloaded character json to yourself (email, messenger, whatever) and
          then load it up.
        </Answer>
        <Question>
          Q: The layout isn't exactly suited to my character, can you change it
          for me?
        </Question>
        <Answer>
          Kind of! I'm currently working with a 'single page' character sheet
          design, similar to an A4 page character sheet as this project started
          as a way to replace and digitise those. I realise that there are
          sections that don't need to be displayed at all times and will be
          creating more refined displays, please let me know your suggestions
          and wants.
        </Answer>
        <Question>Q: How can I help?</Question>
        <Answer>Tell your friends, have fun, be good to one another.</Answer>
      </TextContainer>
    </Page>
  );
};

export default IndexPage;

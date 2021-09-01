import React from "react";
import {
  Select,
  TextField,
  Button,
  ButtonGroup,
  MenuItem,
  InputLabel,
  FormGroup,
  FormControl,
  Container,
  Input,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import stylish, { css } from "styled-components";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "inline-block",
  width: "100%",
}));

const ConfirmCharacter = ({
  nextStep,
  prevStep,
  onCharacterChange,
  character,
  saveCharacter,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  const getSave = (stat, save) => {
    let saveMod = Math.floor((stat - 10) / 2);
    if (save === true) {
      saveMod = character.proficiency_bonus + saveMod;
    }
    if (saveMod > 0) {
      return "+" + saveMod;
    } else {
      return saveMod;
    }
  };

  const getTotalMoney = () => {
    let total = 0;
    total += character.currency.copper / 100;
    total += character.currency.silver / 10;
    total += character.currency.electrum / 2;
    total += character.currency.gold;
    total += character.currency.platinum * 10;
    return total;
  };

  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character));

  const Page = stylish.div`
    padding-bottom: 20px;
  `;

  return (
    <Page>
      <h1>Confirm Character</h1>
      <div>
        <ButtonGroup variant="contained">
          <Button onClick={Previous}>Back</Button>
          <Button onClick={Continue}>Next</Button>
        </ButtonGroup>
      </div>
      <Box sx={{ width: "100%", overflowY: "scroll" }}>
        {/* <ImageList variant="masonry" cols={1} rows={6} gap={5}> */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
          columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}
        >
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Name: {character.name}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Level: {character.level}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Race: {character.race}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Size: {character.size}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Alignment: {character.alignment}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Background: {character.background.title}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              Background feature: {character.background.characteristic}
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Class: {character.class}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Subclass: {character.subclass}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Hit Die: {character.hit_dice.dice}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>HP: {character.hp.max}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Resitances: {character.defences.resistances}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Immunities: {character.defences.immunities}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Vulnerabilities: {character.defences.vulnerabilities}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>AC: {character.ac}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Speed: {character.speed}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Initiative: {character.initiative}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>Proficiency Bonus: {character.proficiency_bonus}</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Ability Modifiers</h4>
              <Item>
                STR:{getModifier(character.stats.str)}
                &emsp;DEX:{getModifier(character.stats.dex)}
                &emsp;CON:{getModifier(character.stats.con)}
              </Item>
              <Item>
                &emsp;INT:{getModifier(character.stats.int)}
                &emsp;WIS:{getModifier(character.stats.wis)}
                &emsp;CHA:{getModifier(character.stats.cha)}
              </Item>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Saving throws</h4>
              <Item>
                STR:{getSave(character.stats.str, character.saves.save_str)}
                &emsp;DEX:
                {getSave(character.stats.dex, character.saves.save_dex)}
                &emsp;CON:
                {getSave(character.stats.con, character.saves.save_con)}
              </Item>
              <Item>
                &emsp;INT:
                {getSave(character.stats.int, character.saves.save_int)}
                &emsp;WIS:
                {getSave(character.stats.wis, character.saves.save_wis)}
                &emsp;CHA:
                {getSave(character.stats.cha, character.saves.save_cha)}
              </Item>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Skills</h4>
              {/* <Item>All: {character.skills.all}</Item> */}
              <Item>
                Proficient(+{character.proficiency_bonus}):
                {character.skills.proficient}
              </Item>
              <Item>
                Expert(+{character.proficiency_bonus * 2}):
                {character.skills.expert}
              </Item>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Senses</h4>
              <Item>Vision: {character.passives.senses}</Item>
              <Item>Passive Perception: {character.passives.perception}</Item>
              <Item>
                Passive Investigation: {character.passives.investigation}
              </Item>
              <Item>Passive Insight:{character.passives.insight}</Item>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Features</h4>
              {character.features.map((feature, index) => (
                <p key={index}>{feature.feature_name}</p>
              ))}
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Attacks</h4>
              {character.attacks.map((attack, index) => (
                <p key={index}>{attack.weapon}</p>
              ))}
            </Item>
          </Grid>
          {character.magic.magic_user ? (
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Item>
                <h4>Magic</h4>
                <Item>Spell Save DC:{character.magic.save_dc}</Item>
                <Item>
                  Spell Attack Modifier:{character.magic.spell_attack_mod}
                </Item>
                <Item>Spell Ability:{character.magic.ability}</Item>
                <Item>Cantrips known:{character.magic.cantrips_known}</Item>
                <Item>Spells known:{character.magic.spells_known}</Item>
                <Item>
                  Spell Slots
                  <Item>1st: {character.spellslots.first}</Item>
                  <Item>2nd: {character.spellslots.second}</Item>
                  <Item>3rd: {character.spellslots.third}</Item>
                  <Item>4th: {character.spellslots.fourth}</Item>
                  <Item>5th: {character.spellslots.fifth}</Item>
                  <Item>6th: {character.spellslots.sixth}</Item>
                  <Item>7th: {character.spellslots.seventh}</Item>
                  <Item>8th: {character.spellslots.eighth}</Item>
                  <Item>9th: {character.spellslots.ninth}</Item>
                </Item>
              </Item>
            </Grid>
          ) : (
            <div></div>
          )}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Inventory</h4>
              {character.inventory.map((item, index) => (
                <p key={index}>{item.item_name}</p>
              ))}
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Equipment</h4>
              {character.equipment.map((item, index) => (
                <p key={index}>{item.equipment_name}</p>
              ))}
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Currency</h4>
              <Item>
                <b>Copper:</b> {character.currency.copper}
              </Item>
              <Item>
                <b>Silver:</b> {character.currency.silver}
              </Item>
              <Item>
                <b>Electrum:</b> {character.currency.electrum}
              </Item>
              <Item>
                <b>Gold:</b> {character.currency.gold}
              </Item>
              <Item>
                <b>Platinum:</b> {character.currency.platinum}
              </Item>
              <Item>
                <b>Total(GP):</b> {getTotalMoney()}
              </Item>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Proficiencies</h4>
              <Item>
                <b>Languages:</b> {character.proficiencies.languages}
              </Item>
              <Item>
                <b>Weapons:</b> {character.proficiencies.weapons}
              </Item>
              <Item>
                <b>Armour:</b> {character.proficiencies.armour}
              </Item>
              <Item>
                <b>Other:</b> {character.proficiencies.other}
              </Item>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <h4>Personality</h4>
              <Item>
                <b>Traits:</b> {character.personality.trait1},{" "}
                {character.personality.trait1}
              </Item>
              <Item>
                <b>Ideals</b>: {character.personality.ideal}
              </Item>
              <Item>
                <b>Bonds</b>: {character.personality.bond}
              </Item>
              <Item>
                <b>Flaw</b>: {character.personality.flaw}
              </Item>
            </Item>
          </Grid>
        </Grid>
        {/* </ImageList> */}
      </Box>

      <div>
        <ButtonGroup variant="contained">
          <Button onClick={Previous}>Back</Button>
          <Button onClick={Continue}>Next</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant="contained">
          <Button onClick={() => saveCharacter(character)} variant="outlined">
            Save Character to Browser
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant="contained">
          <Button>
            <a
              href={"data:" + data}
              download={character.name + " lvl" + character.level + ".json"}
            >
              Download Character
            </a>
          </Button>
        </ButtonGroup>
      </div>
    </Page>
  );
};

export default ConfirmCharacter;

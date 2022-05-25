import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddAttackModal = ({ addAttack, character }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [attack, setAttack] = useState({
    attack_id: 0,
    attack_name: "",
    mod_used: "",
    attack_bonus: 0,
    damage_bonus: 0,
    damage_dice: "",
    damage_dice_num: 0,
    damage_type: "",
    range: "",
    tags: "",
    ammo: 0,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAttack((prev) => ({ ...prev, [name]: value }));
    e.preventDefault();
  };

  function clearAttack() {
    setAttack({
      attack_id: 0,
      attack_name: "",
      mod_used: "",
      attack_bonus: 0,
      damage_bonus: 0,
      damage_dice: "",
      damage_dice_num: 0,
      damage_type: "",
      range: "",
      tags: "",
      ammo: 0,
    });
  }

  const getModifier = (stat) => {
    let mod = Math.floor((stat - 10) / 2);
    if (mod > 0) {
      return "+" + mod;
    } else {
      return mod;
    }
  };

  const showModifier = () => {
    switch (attack.mod_used) {
      case "str":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "dex":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "con":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "int":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "wis":
        return <div>{getModifier(character.stats.cha)}</div>;
      case "cha":
        return <div>{getModifier(character.stats.cha)}</div>;
      default:
        return <div>yup</div>;
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Attack
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            <Item>
              <h2>Add Attack</h2>
              <label>Attack name</label>
              <input
                type="text"
                id="attack_name"
                name="attack_name"
                value={attack.attack_name}
                onChange={handleChange}
                required
              />
            </Item>
            <Item>
              <label>
                Modifier used: &emsp;
                <select
                  id="mod_used"
                  name="mod_used"
                  value={attack.mod_used}
                  onChange={handleChange}
                >
                  <option value={""}>-</option>
                  <option value={"str"}>Strength</option>
                  <option value={"dex"}>Dexterity</option>
                  <option value={"con"}>Constitution</option>
                  <option value={"int"}>Intelligence</option>
                  <option value={"wis"}>Wisdom</option>
                  <option value={"cha"}>Charisma</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Attack modifier (
                {attack.mod_used === "str" ? (
                  <label>{getModifier(character.stats.str)}</label>
                ) : null}{" "}
                {attack.mod_used === "dex" ? (
                  <label>{getModifier(character.stats.dex)}</label>
                ) : null}{" "}
                {attack.mod_used === "con" ? (
                  <label>{getModifier(character.stats.con)}</label>
                ) : null}{" "}
                {attack.mod_used === "int" ? (
                  <label>{getModifier(character.stats.int)}</label>
                ) : null}{" "}
                {attack.mod_used === "wis" ? (
                  <label>{getModifier(character.stats.wis)}</label>
                ) : null}{" "}
                {attack.mod_used === "cha" ? (
                  <label>{getModifier(character.stats.cha)}</label>
                ) : null}{" "}
                + {character.proficiency_bonus})
                <input
                  type="number"
                  id="attack_bonus"
                  name="attack_bonus"
                  value={attack.attack_bonus}
                  onChange={handleChange}
                  size="3"
                />
              </label>
            </Item>
            <Item>
              <label>
                Damage: &emsp;
                <input
                  type="number"
                  id="damage_dice_num"
                  name="damage_dice_num"
                  value={attack.damage_dice_num}
                  onChange={handleChange}
                  size="3"
                />
                <select
                  id="damage_dice"
                  name="damage_dice"
                  value={attack.damage_dice}
                  onChange={handleChange}
                >
                  <option value={"d4"}>d4</option>
                  <option value={"d6"}>d6</option>
                  <option value={"d8"}>d8</option>
                  <option value={"d10"}>d10</option>
                  <option value={"d12"}>d12</option>
                </select>
              </label>
            </Item>
            <Item>
              <label>
                Damage bonus ({attack.mod_used === "str" ? (
                  <label>{getModifier(character.stats.str)}</label>
                ) : null}{" "}
                {attack.mod_used === "dex" ? (
                  <label>{getModifier(character.stats.dex)}</label>
                ) : null}{" "}
                {attack.mod_used === "con" ? (
                  <label>{getModifier(character.stats.con)}</label>
                ) : null}{" "}
                {attack.mod_used === "int" ? (
                  <label>{getModifier(character.stats.int)}</label>
                ) : null}{" "}
                {attack.mod_used === "wis" ? (
                  <label>{getModifier(character.stats.wis)}</label>
                ) : null}{" "}
                {attack.mod_used === "cha" ? (
                  <label>{getModifier(character.stats.cha)}</label>
                ) : null}{" "})
                <input
                  type="number"
                  id="damage_bonus"
                  name="damage_bonus"
                  value={attack.damage_bonus}
                  onChange={handleChange}
                  size="3"
                />
              </label>
            </Item>
            <Item>
              <label>Damage Type</label>
              <input
                type="text"
                id="damage_type"
                name="damage_type"
                placeholder="...Slashing..."
                value={attack.damage_type}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <label>Tags</label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="..Two-Handed.."
                value={attack.tags}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <label>Range</label>
              <input
                type="text"
                id="range"
                name="range"
                placeholder="..60/120.."
                value={attack.range}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <label>Ammo</label>
              <input
                type="number"
                id="ammo"
                name="ammo"
                placeholder="..30.."
                value={attack.ammo}
                onChange={handleChange}
                size="4"
              />
            </Item>
          </Grid>
          <Item>
            <Button
              variant="contained"
              onClick={() => {
                addAttack(attack);
                clearAttack();
              }}
            >
              Confirm Attack
            </Button>
          </Item>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddAttackModal;

import * as React from "react";
import { styled } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AttackAccordion = ({ attacks }) => {
  const [expanded, setExpanded] = React.useState(attacks[0].attack_id);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {attacks.map((attack, index) => (
        <Accordion
          key={index}
          expanded={expanded === attack.attack_id}
          onChange={handleChange(attack.attack_id)}
        >
          <AccordionSummary>
            <Typography>
              {attack.attack_name}:{" "}
              <b>
                +{attack.attack_bonus}; {attack.damage_dice_num}
                {attack.damage_dice}+{attack.damage_bonus} {attack.damage_type}
              </b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Attack Bonus: <b>+{attack.attack_bonus}</b>; Damage:
              <b>
                {attack.damage_dice_num}
                {attack.damage_dice}+{attack.damage_bonus}
                {attack.damage_type}
              </b>
              ; Tags: <b>{attack.tags}</b>
              {attack.range.length > 0 && (
                <p>
                  Range: {attack.range}; Ammo: {attack.ammo}
                </p>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AttackAccordion;

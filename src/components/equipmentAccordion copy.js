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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.5rem", margin: "0"}} />}
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
    marginLeft: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const EquipmentAccordion = ({ equipment }) => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getEquipmentValue = () => {
    let total = 0;
    equipment.forEach(myFunc);

    function myFunc(item) {
      total += Number(item.value);
    }
    return total;
  };

  return (
    <div>
      <Accordion
        expanded={expanded === equipment.equipment_id}
        onChange={handleChange(equipment.equipment_id)}
      >
        <AccordionSummary>
          <Typography>
            <b>Equipment:</b> total value = {getEquipmentValue()} gp
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {equipment.map((item, index) => (
              <p key={index}>
                <b>{item.equipment_name}</b> 
                ({item.value}
                {item.value_currency})
                <br></br>{item.desc}
              </p>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EquipmentAccordion;

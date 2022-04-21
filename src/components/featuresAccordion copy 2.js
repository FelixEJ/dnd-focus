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

const FeatureAccordion = ({ features, character, onCharacterChange }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {features.map((feature, index) => (
        <Accordion
          key={index}
          expanded={expanded === feature.feature_id}
          onChange={handleChange(feature.feature_id)}
        >
          <AccordionSummary>
            <Typography>
              <b>
                ({feature.level_acquired}){feature.feature_name}:
                <input
                  type="number"
                  max={feature.max_uses}
                  min="0"
                  id={"features[" + feature.feature_id + "].current_uses"}
                  name={"features[" + feature.feature_id + "].current_uses"}
                  value={feature.current_uses}
                  onChange={onCharacterChange}
                  size="2"
                  display="none"
                />
                /{feature.max_uses}
              </b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Source: <b>{feature.source}</b>
              </p>
              <p>{feature.description}</p>

              {feature.max_uses > 0 && (
                <text>
                  <p>
                    Uses:{" "}
                    <b>
                      {feature.current_uses}/{feature.max_uses}
                    </b>
                    <input
                      type="number"
                      max={feature.max_uses}
                      min="0"
                      id={"features[" + feature.feature_id + "].current_uses"}
                      name={"features[" + feature.feature_id + "].current_uses"}
                      value={feature.current_uses}
                      onChange={onCharacterChange}
                      size="2"
                      display="none"
                    />
                    /{feature.max_uses}
                  </p>
                  <p>Recharge: {feature.recharge}</p>
                </text>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FeatureAccordion;

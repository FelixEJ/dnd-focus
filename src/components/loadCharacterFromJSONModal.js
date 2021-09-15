import React from "react";
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

const LoadCharacterFromJSON = ({ loadFromJson, character }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleChange(e) {
    const files = document.getElementById("file-selector").files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }

    var fr = new FileReader();

    fr.onload = function (e) {
      console.log(e);
      var result = JSON.parse(e.target.result);
      // var formatted = JSON.stringify(result, null, 2);
      loadFromJson(result);
    };
    fr.readAsText(files.item(0));    
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Load Character from file
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
              <input type="file" id="file-selector"></input>              
            </Item>
          </Grid>
          <Item>
            <Button
              variant="contained"
                onClick={() => {
                    handleChange();
                    handleClose();
                }}
            >
              Load Character
            </Button>
          </Item>
        </Box>
      </Modal>
    </div>
  );
};

export default LoadCharacterFromJSON;

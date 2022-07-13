import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";

import { Toggle } from "@react-ui-org/react-ui";

const Container = styled.div`
  float: left;
`;

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <Container>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </Container>
  );
};

export default DarkModeToggle;

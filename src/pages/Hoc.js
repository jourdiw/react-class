import React from "react";
import { Header, Input } from "semantic-ui-react";

// see HOC implementation
import withAlert from "../helpers/withAlert";

const messageOnBlur = withAlert({ event: "onBlur", message: "blur !" });
const AlertBasicInput = messageOnBlur("input");
const AlertInputComponent = messageOnBlur(Input);

const AlertButton = withAlert({ event: "onClick", message: "clicked !" })(
  "button"
);

export default props => (
  <>
    <Header>HOC pattern (High Order Component)</Header>
    <p>Check the source code</p>
    <p>
      <AlertBasicInput />
    </p>
    <p>
      <AlertInputComponent />
    </p>
    <p>
      <AlertButton>Click me</AlertButton>
    </p>
  </>
);

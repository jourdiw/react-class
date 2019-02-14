import React from "react";
import { Header } from "semantic-ui-react";
import withAlert from '../helpers/withAlert'

const ComponentName = "input"

const AlertInput = withAlert({ event: "onMouseDown", message: "hellooooo"})(
  ComponentName
)

export default () => (
  <>
    <Header>Hello React</Header>
    <p>
      <AlertInput type="text" defaultValue="test" />
    </p>
    <p>
      <ComponentName type="text" placeholder="buddy" />
    </p>
  </>
);

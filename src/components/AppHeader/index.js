import React from "react";
import { Menu } from "semantic-ui-react";

import Clock from "../Clock";

const AppHeader = props => (
  <Menu fixed="top" inverted {...props}>
    <Menu.Item>React Class: 1</Menu.Item>
    <Menu.Item position="right">
      <Clock />
    </Menu.Item>
  </Menu>
);

export default AppHeader;

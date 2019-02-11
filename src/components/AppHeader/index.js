import React from "react";

import { Menu } from "semantic-ui-react";

const AppHeader = props => (
  <Menu fixed="top" inverted {...props}>
    <Menu.Item>React Class: 1</Menu.Item>
  </Menu>
);

export default AppHeader;

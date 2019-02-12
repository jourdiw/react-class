import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Clock from "../Clock";

const AppHeader = props => (
  <Menu fixed="top" inverted {...props}>
    <Menu.Item>React Class: 1</Menu.Item>
    <Menu.Item as={Link} to="/about">
      About
    </Menu.Item>
    <Menu.Item as={Link} to="/shows">
      TV Shows
    </Menu.Item>
    <Menu.Item position="right">
      <Clock />
    </Menu.Item>
  </Menu>
);

export default AppHeader;

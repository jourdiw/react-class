import React from "react";

import { Header } from "semantic-ui-react";
import { connect } from "react-redux";

import { updateTitle } from "../actions";

const AboutPage = ({ handleTitleChange }) => (
  <>
    <Header>About this site</Header>
    <input onChange={e => handleTitleChange(e.target.value)} />
  </>
);
AboutPage.defaultProps = {
  handleTitleChange: a => a
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleTitleChange: value => dispatch(updateTitle(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);

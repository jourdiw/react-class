import React from "react";

import { Header } from "semantic-ui-react";
import { connect } from "react-redux";

import { updateTitle, updateClockDisplay } from "../actions";

const AboutPage = ({ title, handleTitleChange, handleClockDisplay }) => (
  <>
    <Header>About this site</Header>
    <p>
    <input value={title} onChange={e => handleTitleChange(e.target.value)} />
    </p>
    <label>
      Display clock? {" "}<input type="checkbox" onChange={(e) => handleClockDisplay(e.target.checked)} />

    </label>
  </>
);
AboutPage.defaultProps = {
  handleTitleChange: a => a
};

const mapStateToProps = state => ({
  title: state.appTitle,
  displayClock: state.displayClock
});

const mapDispatchToProps = dispatch => ({
  handleTitleChange: value => dispatch(updateTitle(value)),
  handleClockDisplay: value => dispatch(updateClockDisplay(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);

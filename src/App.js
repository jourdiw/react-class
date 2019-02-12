import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import ShowsPage from "./pages/ShowsPage";
import ShowPage from "./pages/ShowPage";

import Theme from "./components/Theme";

/**
 * create-react-app default webpack configuration handles css files in two ways:
 *  - importing "<filepath>.css" will add it's content to the global css file, whithout any tranformation
 *  - importing "<filepath>.module.css" will handle it as a 'css module':
 *    (https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)
 *    Class names are returned as an object from the import, to be used as object keys in className attributes.
 *    They will be renamed on build time in order to have unique names, avoiding potentialname clashes,
 *    and allowing you to name your css classes without worring if they havae already been used elsewhere.
 *
 *  Css files path resolution follow the standard import rules
 *  (relative to current location if starting with . or .. , in node_modules elseway)
 */

import "semantic-ui-css/semantic.min.css";
import "./app.css";
import styles from "./app.module.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Theme.Provider value={{ mainColor: "#333", altColor: "pink" }}>
          {/** 
            A component must render a single node (Single React element, array of elements, or a primitive type).
            React provides a <React.Fragment> (or <>) component as wrapping element, to be able
            to return multiple elements without wrapping them in an additional DOM node.
            See https://reactjs.org/docs/fragments.html.

            <Router> only accepts a single children, so we have to use a Fragment too 
          */}
          <AppHeader />
          <div className={styles.main}>
            <main className={styles.mainInner}>
              {/** 
                'exact' ensures that a Route is only resolves for an exact match. 
                Here '/' won't render on '/about' anymore. 
              */}
              <Route path="/" exact component={IndexPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/shows" component={ShowsPage} />
              <Route path="/show/:id" component={ShowPage} />
            </main>
          </div>
        </Theme.Provider>
      </Router>
    );
  }
}

export default App;

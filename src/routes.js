import React from "react";
import { Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import HocPage from "./pages/Hoc";
// import ShowsPage from "./pages/ShowsPage";
import ShowPage from "./pages/ShowPage";
import ShowsRoute from './modules/shows/routes';

export default () => (
  <>
    {/** 
    'exact' ensures that a Route is only resolves for an exact match. 
    Here '/' won't render on '/about' anymore. 
    */}
    <Route path="/" exact component={IndexPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/hoc" component={HocPage} />
    <ShowsRoute />
    <Route path="/show/:id" component={ShowPage} />
  </>
);

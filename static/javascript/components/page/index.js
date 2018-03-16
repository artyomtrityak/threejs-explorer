import React from "react";
import { HashRouter, Route } from 'react-router-dom';

import MainMenu from "./main-menu";
import BasicScene from "../basic-scene";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" component={MainMenu}/>
          <Route path="/basic-scene" component={BasicScene}/>
        </div>
      </HashRouter>
    );
  }
}

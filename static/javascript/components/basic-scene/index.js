import React from "react";
import { NavLink, Route } from "react-router-dom";
import BasicScene from "./basic-scene";
import LinesAndTextScene from "./lines-and-text";

export default class BasicSceneScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { match } = this.props;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/scene`}>
              Scene
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/lines-and-text`}>
              Lines and Text
            </NavLink>
          </li>
        </ul>

        <div className="tree-charts-container">
          <Route path={`${match.url}/scene`} component={BasicScene} />
          <Route path={`${match.url}/lines-and-text`} component={LinesAndTextScene} />
        </div>
      </div>
    );
  }
}

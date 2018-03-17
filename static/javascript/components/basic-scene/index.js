import React from "react";
import { NavLink, Route } from "react-router-dom";
import BasicScene from "./basic-scene";
import TextsScene from "./texts-scene";

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
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/scene-and-objects`}>
              Scene and Objects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/texts`}>
              Texts
            </NavLink>
          </li>
        </ul>

        <div className="tree-charts-container">
          <Route path={`${match.url}/scene-and-objects`} component={BasicScene} />
          <Route path={`${match.url}/texts`} component={TextsScene} />
        </div>
      </div>
    );
  }
}

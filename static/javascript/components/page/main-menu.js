import React, { Fragment } from "react";
import cn from 'classnames';
import { NavLink, matchPath } from 'react-router-dom';


export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <ul className="nav justify-content-center mb-5">
          <a className="navbar-brand" href="#/">Three.js Explorer</a>

          <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/basic'}) || pathname === '/'})}>
            <NavLink activeClassName="disabled" className="nav-link" to="/basic">Basic</NavLink>
          </li>
        </ul>
      </Fragment>
    );
  }
}

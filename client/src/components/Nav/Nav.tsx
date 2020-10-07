import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav-Wrapper green darken-4 nav-wrapper">
        <div className="Nav-Logo brand-logo">
          <span className="Nav-LogoText">GuestBook</span>
        </div>
        <ul id="nav-mobile" className="Nav-List right hide-on-med-and-down">
          <li>
            <NavLink
              to="/"
              exact
              className="Nav-Item"
              activeClassName="Nav-Item_active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chits"
              className="Nav-Item"
              activeClassName="Nav-Item_active"
            >
              List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className="Nav-Item"
              activeClassName="Nav-Item_active"
            >
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

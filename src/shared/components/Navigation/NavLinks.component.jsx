import { NavLink } from 'react-router-dom';

import './NavLinks.styles.css';

const NavLinks = (props) => {
  return (
    <nav className={props.className}>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            USERS
          </NavLink>
        </li>

        <li>
          <NavLink to="/users/new">ADD USER</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;

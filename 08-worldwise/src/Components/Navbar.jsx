import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from './Logo';
import ButtonUI from './ButtonUI';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <ButtonUI type="primary">Login</ButtonUI>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

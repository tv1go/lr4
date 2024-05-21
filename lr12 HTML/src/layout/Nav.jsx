import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import calculation from '../img/calculation.svg';
import measuring from '../img/measuring.svg';
import logo from '../img/logo.svg';

const Nav = () => {
  return (
    <div>
      <nav className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <ul className={styles.links}>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.request}>
            <img src={measuring} alt="Make request" /> Make request
          </button>
          <button className={styles.calculate}>
            <img src={calculation} alt="Calculation" /> Calculation
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

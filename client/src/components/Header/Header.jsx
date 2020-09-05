import React from 'react';
import Logo from './../../assets/Logo.png';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.Header}>
      <Link to='/' className={s.Logo}>
        <img src={Logo} alt='logo' />
      </Link>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/rockets'>
          <li>Rockets</li>
        </Link>
        <Link to='/launches'>
          <li>Launches</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;

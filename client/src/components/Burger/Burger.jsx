import React from 'react';
import { Link } from 'react-router-dom';
import s from './Burger.module.css';
import { slide as Menu } from 'react-burger-menu';
import BurgerIcon from './../../assets/burger.png';
import CloseIcon from './../../assets/close.png';

const Burger = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const handleOnOpen = () => {
    setOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
  };

  const links = [
    { text: 'Home', link: '/' },
    { text: 'Rockets', link: '/rockets' },
    { text: 'Launches', link: '/launches' },
  ];

  return (
    <div className={s.BurgerMenu}>
      <Menu
        customBurgerIcon={<img src={BurgerIcon} alt='menu-icon' />}
        customCrossIcon={<img src={CloseIcon} alt={'close-icon'} />}
        burgerButtonClassName={open ? s.hidden : ''}
        onOpen={handleOnOpen}
        isOpen={open}
        onClose={handleOnClose}
      >
        {links.map((l, index) => {
          return (
            <Link
              key={l.link + index}
              to={l.link}
              onClick={() => {
                handleOnClose();
                setActive(index);
              }}
              className={index === active ? s.Active : ''}
            >
              {l.text}
            </Link>
          );
        })}
      </Menu>
    </div>
  );
};

export default Burger;

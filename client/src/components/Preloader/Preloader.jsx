import React from 'react';
import rocketImg from '../../assets/rocketImg.svg';
import s from './Preloader.module.css'

const Preloader = () => {
  return (
    <div class={s.Preloader}>
      <img src={rocketImg} />
    </div>
  );
};

export default Preloader;

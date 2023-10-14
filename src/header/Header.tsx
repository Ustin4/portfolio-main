import React from 'react';
import style from './Header.module.scss'
import BurgerNav from "./burgerNav/BurgerNav";
import {Nav} from "./Nav/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};

export default Header;
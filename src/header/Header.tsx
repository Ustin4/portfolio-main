import React from 'react';
import style from './Header.module.scss'
import BurgerNav from "./burgerNav/BurgerNav";

const Header = () => {
    return (
        <div className={style.header}>
            <BurgerNav/>
        </div>
    );
};

export default Header;
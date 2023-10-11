import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";

const BurgerNav = () => {
    const [menuIsOpen, setBurgerMenu] = useState(false)
    let onBurgerBthClick = () => {
        setBurgerMenu(
            !menuIsOpen
        )
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <Link
                    activeClass={style.active}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >
                    Projects
                </Link>
                {/*<a href="#projects">Проекты</a>*/}
                <a href="">Contacts</a>
            </div>
            <div onClick={onBurgerBthClick} className={style.burgerBth}></div>
        </div>
    );
};

export default BurgerNav;
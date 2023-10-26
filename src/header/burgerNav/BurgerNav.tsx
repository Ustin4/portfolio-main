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
    const heightHeader = 80
    return (
        <div className={style.burgerNav}>
            <div className={`${style.burgerNavItems} ${menuIsOpen ? style.show : ''}`}>
                <Link activeClass={style.active} offset={-heightHeader} to="main" spy={true} smooth={true}
                      duration={500}>Main</Link>

                <Link activeClass={style.active} offset={-heightHeader} to="AboutMe" spy={true} smooth={true}
                      duration={500}>About Me</Link>

                <Link activeClass={style.active} offset={-heightHeader} to="contacts" spy={true} smooth={true}
                      duration={500}>Contacts</Link>
            </div>
            <img className={style.burgerButton} onClick={onBurgerBthClick} src={''} alt={'sdsdsd'}></img>
        </div>
    );
};

export default BurgerNav;
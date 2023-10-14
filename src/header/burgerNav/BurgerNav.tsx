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
        // <div className={style.burgerNav}>
        //     <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
        //         {/*<a href="">Main</a>*/}
        //         {/*<a href="">Skills</a>*/}
        //         <Link
        //             activeClass={style.active}
        //             to='projects'
        //             spy={true}
        //             smooth={true}
        //             offset={1}
        //             duration={500}
        //         >
        //             Projects
        //         </Link>
        //         {/*<a href="#projects">Проекты</a>*/}
        //         {/*<a href="">Contacts</a>*/}
        //     </div>
        //     <div onClick={onBurgerBthClick} className={style.burgerBth}></div>

        <div className={style.burgerNav}>
            <div className={`${style.burgerNavItems} ${menuIsOpen ? style.show : ''}`}>
                <Link activeClass={style.active} offset={-heightHeader} to="main" spy={true} smooth={true}
                      duration={500}>Main</Link>

                <Link activeClass={style.active} offset={-heightHeader} to="projects" spy={true} smooth={true}
                      duration={500}>MyProjects</Link>

                <Link activeClass={style.active} offset={-heightHeader} to="contacts" spy={true} smooth={true}
                      duration={500}>Contacts</Link>
            </div>
            <img className={style.burgerButton} onClick={onBurgerBthClick} src={''} alt={'sdsdsd'}></img>
        </div>
    );
};

export default BurgerNav;
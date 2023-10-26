// import React, {useState} from 'react';
// import style from './BurgerNav.module.scss'
// import {Link} from "react-scroll";
//
// const BurgerNav = () => {
//     const [menuIsOpen, setBurgerMenu] = useState(false)
//     let onBurgerBthClick = () => {
//         setBurgerMenu(
//             !menuIsOpen
//         )
//     }
//     const heightHeader = 80
//     return (
//         <div className={style.burgerNav}>
//             <div className={`${style.burgerNavItems} ${menuIsOpen ? style.show : ''}`}>
//                 <Link activeClass={style.active} offset={-heightHeader} to="main" spy={true} smooth={true}
//                       duration={500}>Main</Link>
//
//                 <Link activeClass={style.active} offset={-heightHeader} to="AboutMe" spy={true} smooth={true}
//                       duration={500}>About Me</Link>
//
//                 <Link activeClass={style.active} offset={-heightHeader} to="contacts" spy={true} smooth={true}
//                       duration={500}>Contacts</Link>
//             </div>
//             <img className={style.burgerButton} onClick={onBurgerBthClick} src={''} alt={'sdsdsd'}></img>
//         </div>
//     );
// };
//
// export default BurgerNav;

import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import React, {useState} from "react";
import iconBurger from '../../assets/image/Hamburger_icon.svg.png'


export const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onBurgerBtn = () => {
        setIsOpen(!isOpen)
    }
    const heightHeader = 80
    return (
        <div className={style.burgerNav}>
            <div className={`${style.burgerNavItems} ${isOpen ? style.show : ''}`}>
                <Link activeClass={style.active} to="main" spy={true} smooth={true}
                      duration={500} offset={-heightHeader}>main</Link>
                <Link activeClass={style.active} to="aboutMe" spy={true} smooth={true}
                      duration={500} offset={-heightHeader}>aboutMe</Link>
                {/*<Link activeClass={style.active} to="projects" spy={true} smooth={true}*/}
                {/*      duration={500} offset={-heightHeader}>{langData.myProjects}</Link>*/}
                <Link activeClass={style.active} to="contacts" spy={true} smooth={true}
                      duration={500} offset={-heightHeader}>contacts</Link>
            </div>
            <img className={isOpen ? style.burgerButton : style.burgerButtonOn} onClick={onBurgerBtn} src={iconBurger}></img>
        </div>
    )
}
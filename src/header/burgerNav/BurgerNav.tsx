import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import React, {useState} from "react";
import iconBurger from '../../assets/image/burger-menu-svgrepo-com.svg'


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
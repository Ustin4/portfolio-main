import style from './Nav.module.scss'
import React from "react";
import {Link} from "react-scroll";


export const Nav = () => {
    const heightHeader = 80
    return (
        <div className={style.navSection}>
            <Link activeClass={style.active} to="main" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>Main</Link>
            <Link activeClass={style.active} to="skills" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>Skills</Link>
            <Link activeClass={style.active} to="projects" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>MyProjects</Link>
            <Link activeClass={style.active} to="contacts" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>Contacts</Link>
        </div>
    )
}
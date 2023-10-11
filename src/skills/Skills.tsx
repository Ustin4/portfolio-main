import React from 'react';
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import cssIcon from "../assets/image/icons8-css-logo-480.png";
import jsIcon from "../assets/image/icons8-js-100.png"
import reactIcon from "../assets/image/icons8-react-480.png"

const Skills = () => {
    const css = {
        backgroundImage: `url(${cssIcon})`
    };
    const js = {
        backgroundImage: `url(${jsIcon})`
    };
    const react = {
        backgroundImage: `url(${reactIcon})`
    };
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill style={js} title={'Js'} description={'123ewewda'}/>
                    <Skill style={css} title={'CSS'} description={'sdasdasd'}/>
                    <Skill style={react} title={'React'} description={'sadasdasd'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
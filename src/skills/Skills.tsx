import React from 'react';
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import cssIcon from "../assets/image/icons8-css-logo-480.png";
import jsIcon from "../assets/image/icons8-js-100.png"
import reactIcon from "../assets/image/icons8-react-480.png"

const Skills = () => {

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'This is a language from programin'} icon={jsIcon}/>
                    <Skill title={'CSS'} description={'sdasdasd'} icon={cssIcon}/>
                    <Skill title={'React'} description={'sadasdasd'} icon={reactIcon}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
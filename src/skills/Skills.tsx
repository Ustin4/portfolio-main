import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'123ewewda'}/>
                    <Skill title={'CSS'} description={'sdasdasd'}/>
                    <Skill title={'React'} description={'sadasdasd'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
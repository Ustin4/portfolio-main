import React, {ReactElement} from 'react';
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    //style:any
    icon: string
}

const Skill = ({title, description, icon}: SkillPropsType) => {
    return (
        <div className={style.skill}>
            {/*<div className={style.icon} style={props.style}></div>*/}
            <div className={style.icon}>
                <img className={style.icon} src={icon} alt="Icon Skils"/>
            </div>
            <div className={style.descriptionContainer}>
                <h2 className={style.title}>{title}</h2>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    );
};

export default Skill;
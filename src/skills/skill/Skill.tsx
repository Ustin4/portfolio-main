import React, {ReactElement} from 'react';
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    //style:any
    icon: ReactElement
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            {/*<div className={style.icon} style={props.style}></div>*/}
            <div className={style.icon}>{props.icon}</div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Skill;
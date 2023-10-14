import React from 'react';
import style from './Project.module.scss'

type ProjectPropsType = {
    style: any
    title: string
    description: string
    projectLink:string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div  className={style.project}>
            <div className={style.image}
                 style={props.style}>
                <a href={props.projectLink} className={style.viewBth} >Смотреть</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
};

export default Project;
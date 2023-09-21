import React from 'react';
import style from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import styleContainer from '../common/styles/Container.module.css'
import socialImage from './../assets/image/social-network-icon-people-network-vector-23633273.jpg'
import todoImage from './../assets/image/Снимок экрана 2023-08-17 161736.png'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`
    };


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project projectLink={'https://Ustin4.github.io/1-todoList'}
                             style={social}
                             title={'Social network'}
                             description={'Lorem ipsum'}/>
                    <Project projectLink={'https://Ustin4.github.io/Social'}
                             style={todolist}
                             title={'Social network'}
                             description={'Lorem ipsum'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
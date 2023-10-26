// import React from 'react';
// import style from './Projects.module.scss'
// import Project from "./project/Project";
// import Title from "../common/components/title/Title";
// import socialImage from './../assets/image/social-network-icon-people-network-vector-23633273.jpg'
// import todoImage from './../assets/image/Снимок экрана 2023-08-17 161736.png'
//
// const Projects = () => {
//     const social = {
//         backgroundImage: `url(${socialImage})`
//     };
//     const todolist = {
//         backgroundImage: `url(${todoImage})`
//     };
//
//
//     return (
//         <div id='projects' className={style.projectsBlock}>
//             <div className={style.container}>
//                 <Title text={'Projects'}/>
//                 <div className={style.projects}>
//                     <Project projectLink={'https://Ustin4.github.io/1-todoList'}
//                              style={social}
//                              title={'Social network'}
//                              description={'Lorem ipsum'}/>
//                     <Project projectLink={'https://Ustin4.github.io/Social'}
//                              style={todolist}
//                              title={'Social network'}
//                              description={'Lorem ipsum'}/>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Projects;


import style from './MyProjects.module.scss'
import {Fade} from "react-awesome-reveal";
import {MyProject} from "./project/MyProject";
import imageMyProject from '../assets/image/github-svgrepo-com (3) 1.svg'

export const MyProjects = (props: any) => {
    const social = {
        backgroundImage: `url(${imageMyProject})`
    };

    return (
        <div id='projects' className={style.myProjectsBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.myProjectsContainer}>
                    {/*<Title text={'HIII'}/>*/}
                    <div className={style.myProjects}>
                        <MyProject image={social} title={'Social Network'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik'}
                                   link={'https://github.com/Ustin4/Social'}/>
                        <MyProject image={social} title={'Todolist'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik, MUI, Storybook'}
                                   link={'https://github.com/Ustin4/1-todoList'}/>
                        {/*<MyProject image={social} title={'Project Food'}*/}
                        {/*           description={'Stack: JavaScript, Fetch API'}*/}
                        {/*           link={'https://github.com/DreamLife37/JS_Project_Food'}/>*/}
                        {/*<MyProject  image={social} title={'Project Cards'}*/}
                        {/*           description={'Stack: TS, React, Redux Toolkit, Redux-Thunk, React Router DOM, Axios, Formik, MUI'}*/}
                        {/*           link={'https://github.com/DreamLife37/React_Project_Cards'}/>*/}
                    </div>
                </div>
            </Fade>
        </div>
    )
}
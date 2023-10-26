// import React from 'react';
// import style from './Skills.module.scss'
// import Skill from "./skill/Skill";
// import Title from "../common/components/title/Title";
// import cssIcon from "../assets/image/icons8-css-logo-480.png";
// import jsIcon from "../assets/image/icons8-js-100.png"
// import reactIcon from "../assets/image/icons8-react-480.png"
//
// const Skills = () => {
//
//     return (
//         <div id='skills' className={style.skillsBlock}>
//             <div className={style.skillsContainer}>
//                 <Title text={'Skills'}/>
//                 <div className={style.skills}>
//                     <Skill title={'Js'} description={'This is a language from programin'} icon={jsIcon}/>
//                     <Skill title={'CSS'} description={'sdasdasd'} icon={cssIcon}/>
//                     <Skill title={'React'} description={'sadasdasd'} icon={reactIcon}/>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Skills;


import style from './Skills.module.scss'

import React from "react";


export const Skills = () => {
    return (
        <div className={style.skillsContainer}>
            <ul>
                <li>
                    <span className={style.title}>Javascript, Typescript, ES6+</span>
                </li>
                <li>
                    <span className={style.title}>JavaScript library and frameworks - React, React Native</span>
                </li>
                <li>
                    <span className={style.title}>
                        State management libraries - Redux-toolkit, Thunk, Saga</span>
                </li>
                <li>
                    <span className={style.title}>
                        Routing - React router dom, React navigation</span>
                </li>
                <li>
                    <span
                        className={style.title}>Forms - Formik, React final form</span>
                </li>
                <li>
                    <span
                        className={style.title}>Testing - Unit tests, Snapshot image test, Storybook, Postman </span>
                </li>
                <li>
                    <span
                        className={style.title}>API - Axios, Rest API, WebSocket, Socket.io, FireBase</span>
                </li>
                <li>
                    <span
                        className={style.title}>Version control - Git</span>
                </li>
                <li>
                    <span
                        className={style.title}>Material Ul, Ant design</span>
                </li>
                <li>
                    <span className={style.title}>CSS preprocessors - SASS</span>
                </li>

            </ul>
        </div>
    )
}

// import React from 'react';
// import style from './Main.module.scss'
// import ReactTypingEffect from 'react-typing-effect'
// import photo from "../assets/image/photo_2023-10-26_19-10-10.jpg";
// import {Fade} from "react-awesome-reveal";
// import Tilt from 'react-parallax-tilt';
// import ParticlesComponent from "../common/components/ParticlesComponent/ParticlesComponent";
//
//
// export const Main = () => {
//
//     return (
//
//         <div id='main' className={style.mainBlock}>
//             <ParticlesComponent/>
//             <Fade delay={100} triggerOnce style={{width: '100%'}}>
//                 <div className={style.container}>
//
//                     <div className={style.titleBlock}>
//                         <span className={style.subTitle}> Hi there</span>
//                         <h1 className={style.title}>I am Ustin Kovalenko
//                             <br/>
//                             <ReactTypingEffect
//                                 text='Fronted Developer.'
//                             />
//                         </h1>
//
//                     </div>
//
//                     <Tilt className={style.tilt} tiltMaxAngleX={10} tiltMaxAngleY={10}>
//                         <img className={style.photo} src={photo}/>
//                     </Tilt>
//
//                 </div>
//             </Fade>
//         </div>
//     );
// };
//


import style from './Main.module.scss'
import photo from '../assets/image/photo_2023-10-26_19-10-10.jpg'
import {Fade} from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt';
import React from "react";


export const Main = () => {
    return (
        <div id='main' className={style.mainBlock}>
            <Fade delay={100} triggerOnce style={{width: '100%'}}>
                <div className={` ${style.mainContainer}`}>
                    <div className={style.titleBlock}>
                        <span className={style.subTitle}>Hi there</span>
                        <h1 className={style.title}>I'm Ustin Kovalenko
                            <br/>
                            <ReactTypingEffect
                                text={'Fronted Developer'}
                            />
                        </h1>
                    </div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <img className={style.photo} alt={'photo'} src={photo}/>
                    </Tilt>
                </div>

            </Fade>
        </div>

    )
}
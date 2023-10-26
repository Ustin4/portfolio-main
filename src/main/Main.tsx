import React from 'react';
import style from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect'
import cssIcon from "../assets/image/icons8-css-logo-480.png";
import {Fade} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import ParticlesComponent from "../common/components/ParticlesComponent/ParticlesComponent";


const Main = () => {

    return (

        <div id='main' className={style.mainBlock}>
            <ParticlesComponent/>
            <Fade delay={100} triggerOnce style={{width: '100%'}}>
                <div className={style.container}>

                    <div className={style.titleBlock}>
                        <span className={style.subTitle}> Hi there</span>
                        <h1 className={style.title}>I am Ustin Kovalenko
                            <br/>
                            <ReactTypingEffect
                                text='Fronted Developer.'
                            />
                        </h1>

                    </div>

                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <img className={style.photo} src={cssIcon}/>
                    </Tilt>

                </div>
            </Fade>
        </div>
    );
};

export default Main;
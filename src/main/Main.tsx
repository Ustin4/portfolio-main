import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Particles from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect'
import cssIcon from "../assets/image/icons8-css-logo-480.png";
const particalesOption = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}


const Main = () => {
    const css = {
        backgroundImage: `url(${cssIcon})`
    };
    const Fade = require("react-reveal/Fade");

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particalesOption}/>
            <Fade top>
                <div className={styleContainer.container}>
                    <div className={style.greeting}>
                        <span> Hi there</span>
                        <span>I am Ustin <span>Kovalenko</span></span>

                        <ReactTypingEffect
                            text='Fronted Developer.'/>
                        {/*<h1>Fronted Developer.</h1>*/}
                    </div>

                    <div className={style.photo}>
                        <div style={css} className={style.image}>

                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default Main;
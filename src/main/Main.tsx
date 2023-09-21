import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                ` <div className={style.greeting}>
                <span> Hi there</span>
                <span>I am Ustin <span>Kovalenko</span></span>
                <h1>Fronted Developer.</h1>
            </div>
                <div className={style.photo}>
                    <div className={style.image}>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;
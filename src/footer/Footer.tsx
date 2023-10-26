import React from 'react';
import style from './Footer.module.scss'
import {Title} from "../common/components/title/Title";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={'Ustin Kavalenka'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href=''>
                            <img src="" alt="telegramIcon"/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href={''}>
                            <img src="" alt="facebookIcon"/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href={''}>
                            <img src="" alt="likedinIcon"/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href={''}>
                            <img src="" alt="VkIcon"/>
                        </a>
                    </div>

                </div>
            </div>
            <span className={style.copuright}>2023 All Rights Reserved</span>
            <div/>
        </div>
    );
};


export default Footer;
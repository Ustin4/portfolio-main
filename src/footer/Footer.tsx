import React from 'react';
import style from './Footer.module.scss'
import {Title} from "../common/components/title/Title";
import gitHubIcon from '../assets/image/github-svgrepo-com (3) 1.svg'
import telegramIcon from '../assets/image/telegram-icon-2048x2048-5hgjjk0t.png'
import vkIcon from '../assets/image/vk-social-logotype.svg'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={'Ustin Kovalenko'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href='https://t.me/Ustin4'>
                            <img src={telegramIcon} alt="telegramIcon"/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href={''}>
                            <img src={vkIcon} alt="VkIcon"/>
                        </a>
                    </div>

                    <div className={style.socialIcon}>
                        <a href={'https://github.com/Ustin4'}>
                            <img src={gitHubIcon} alt="GitHub"/>
                        </a>
                    </div>

                </div>
            </div>
            <div/>
            {/*<span className={style.copuright}>2023 All Rights Reserved</span>*/}

        </div>
    );
};


export default Footer;
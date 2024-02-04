import style from './AboutMe.module.scss';
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Title2 } from "../common/components/title/Title";
import { Skills } from "./Skills/Skills";
import { MyProjects } from "../projects/MyProjects";

export const AboutMe = (props: any) => {
    type Tabs = 'MainSkills' | 'Projects' | 'workExperience';

    const [currentTab, setCurrentTab] = useState<Tabs>(
        localStorage.getItem("currentTab") as Tabs || 'MainSkills'
    );

    const handleTabClick = (tab: Tabs) => {
        setCurrentTab(tab);
    };

    useEffect(() => {
        localStorage.setItem("currentTab", currentTab);
    }, [currentTab]);

    return (
        <div id='aboutMe' className={style.aboutMeBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.aboutMeContainer}>
                    <Title2
                        title={'About me'}
                        description={
                            "I am a front-end developer with experience in creating SPAs using React, Redux, and TypeScript. I'm constantly learning, developing, and improving my skills. I'm open to cool project opportunities. Feel free to reach out."
                        }
                    />
                    <div className={style.menuTab}>
                        <div className={style.navMenu}>
                            <a
                                onClick={() => handleTabClick('MainSkills')}
                                className={currentTab === 'MainSkills' ? style.navItemActive : style.navItem}
                            >
                                Skills
                            </a>
                        </div>
                        <div className={style.navMenu}>
                            <a
                                onClick={() => handleTabClick('Projects')}
                                className={currentTab === 'Projects' ? style.navItemActive : style.navItem}
                            >
                                Projects
                            </a>
                        </div>
                    </div>
                    <div className={style.contentTab}>
                        {currentTab === 'MainSkills' && <Skills />}
                        {currentTab === 'Projects' && <MyProjects />}
                    </div>
                </div>
            </Fade>
        </div>
    );
};
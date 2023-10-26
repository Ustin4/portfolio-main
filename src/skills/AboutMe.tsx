import style from './AboutMe.module.scss'
import React, {useState} from "react";
import {Fade} from "react-awesome-reveal";
import {Title2} from "../common/components/title/Title";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "../projects/MyProjects";

export const AboutMe = (props: any) => {

    type Tabs = 'MainSkills' | 'Projects' | 'workExperience'

    const [currentTab, setCurrentTab] = useState<Tabs>('MainSkills')
    return (

        <div id='aboutMe' className={style.aboutMeBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.aboutMeContainer}>
                    <Title2 title={'About me'}
                            description={'I am front-end developer with experience in creating SPA, using React, Redux, TypeScript. I\'m learning, developing, constantly improving my skills, I want to participate in cool projects. Open for your suggestions.'}/>
                    <div className={style.menuTab}>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('MainSkills')}
                               className={currentTab === 'MainSkills' ? style.navItemActive : style.navItem}>Skills</a>
                        </div>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('Projects')}
                               className={currentTab === 'Projects' ? style.navItemActive : style.navItem}>Projects</a>
                        </div>

                    </div>
                    <div className={style.contentTab}>
                        {(currentTab === 'MainSkills') &&
                            <Skills/>
                        }
                        {(currentTab === 'Projects') &&
                            <MyProjects/>
                        }
                        {/*{(currentTab === 'WORK_EXPERIENCE') &&*/}
                        {/*    <WorkExperience language={language}/>*/}
                        {/*}*/}
                    </div>

                </div>
            </Fade>
        </div>

    )
}
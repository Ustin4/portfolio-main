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
                    <div className={style.myProjects}>
                        <MyProject image={social} title={'Todolist'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik, MUI, Storybook,redux toolkit,scss'}
                                   link={'https://todolists-omega.vercel.app/login'}/>
                        {/*<MyProject image={social} title={'Card'}*/}
                        {/*           description={'Stack: JavaScript, Fetch API'}*/}
                        {/*           link={'https://github.com/DreamLife37/JS_Project_Food'}/>*/}
                        <MyProject  image={social} title={'Project Cards'}
                                   description={'Stack: TS, React, Redux Toolkit, Redux-Thunk, React Router DOM,Formik, MUI,Radix UI,RTK Query,Vite,Storybook'}
                                   link={'https://learning-cards-beige.vercel.app'}/>
                        <MyProject image={social} title={'Social Network'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik'}
                                   link={'https://github.com/Ustin4/Social'}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
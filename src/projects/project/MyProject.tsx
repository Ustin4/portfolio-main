// import React from 'react';
// import style from './Project.module.scss'
//
// type ProjectPropsType = {
//     style: any
//     title: string
//     description: string
//     projectLink:string
// }
//
// const Project = (props: ProjectPropsType) => {
//     return (
//         <div  className={style.project}>
//             <div className={style.image}
//                  style={props.style}>
//                 <a href={props.projectLink} className={style.viewBth} >Смотреть</a>
//             </div>
//             <div className={style.projectInfo}>
//                 <h3 className={style.projectTitle}>{props.title}</h3>
//                 <span className={style.description}>{props.description}</span>
//             </div>
//
//         </div>
//     );
// };
//
// export default Project;


import Tilt from "react-parallax-tilt";
import React from "react";
import style from './MyProject.module.scss'

type MyProjectType = {
    title: string
    description: string
    image: any
    link: string
}
export const MyProject: React.FC<MyProjectType> = ({title, description, image, link}) => {
    const handleClick = () => {
        window.location.href = link;
    }
    return (
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className={style.portfolio}>
                <div className={style.projectImgContainer} style={image}></div>
                <div className={style.content}>
                    <h3 onClick={handleClick}  className={style.projectTitle}>
                        {title}
                    </h3>
                    <p><span className={style.description}>{description}</span></p>
                </div>
            </div>
        </Tilt>
    )
}
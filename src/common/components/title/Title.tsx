import React from 'react';
import style from './Title.module.scss'


import style2 from './Title2.module.scss'

type TitlePropsType={
    text:string
}

export const Title = (props:TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>

        </div>
    );
};

type Title2Type = {
    title: string
    subTitle?: string
    description: string
}
export const Title2 = (props: Title2Type) => {
    return (
        <div className={style2.title}>
            <span className={style2.subTitle}>{props.subTitle}</span>
            <h2><span>{props.title}</span></h2>
            <p >{props.description}</p>
        </div>
    )
}


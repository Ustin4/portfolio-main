import React from 'react';
import style from './Button.module.scss'

type ButtonProps = {
    text: string
}
const Button = (props: ButtonProps) => {
    return (
        <a href={''} className={style.bth}>{props.text}</a>
    );
};

export default Button;
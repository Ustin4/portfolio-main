import React from 'react';
import style from './Hire.module.scss'
import styleContainer from "../common/styles/Container.module.css";

const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.HireContainer}`}>
                <h2 className={style.title}>I am available for Freelance </h2>
                <a href="" className={style.hireBth}>Нанять меня </a>
            </div>

        </div>
    );
};

export default Hire;
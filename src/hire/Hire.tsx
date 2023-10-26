import React from 'react';
import style from './Hire.module.scss'
import {Title} from "../common/components/title/Title";

const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={style.HireContainer}>
                <Title text={'I am available for Freelance '}/>
                {/*<h2 className={style.title}></h2>*/}
                <button className={style.hireBth} >Send message</button>
            </div>

        </div>
    );
};

export default Hire;
// import React from 'react';
// import style from './Header.module.scss'
// import BurgerNav from "./burgerNav/BurgerNav";
// import {Nav} from "./Nav/Nav";
//
// const Header = () => {
//     return (
//         <div className={style.header}>
//             <Nav/>
//             <BurgerNav/>
//         </div>
//     );
// };
//
// export default Header;
import style from './Header.module.scss'
import React from "react";
import {Nav} from "./Nav/Nav";
import BurgerNav from "./burgerNav/BurgerNav";



export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerSection}>
                <div className={style.logo}>Ustin</div>
            </div>
            <div className={style.headerSection}>
                <Nav/>
                <BurgerNav/>
            </div>
        </div>
    )
}
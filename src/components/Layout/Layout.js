import React from 'react';
import {Link} from "react-router-dom";

import css from './Layout.module.css';

const Layout = () => {
    return (
        <div className={css.menu}>
            <Link className={css.link} to={"/"}>Список машин</Link>
            <Link className={`${css.link} `} to={"/store"}>Список делатей</Link>
        </div>



        // <div c"lassName={"menu"}>
        //     <Link to={"/"}>Список машин</Link>
        //     <Link to={"/store"}>Список делатей</Link>
        // </div>
    );
};

export default Layout;
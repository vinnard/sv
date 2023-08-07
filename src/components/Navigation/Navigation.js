import React from 'react';
import {Outlet} from "react-router-dom";
import Layout from "../Layout/Layout";

const Navigation = () => {
    return (
        <div>
            <Layout/>
            <Outlet/>
        </div>
    );
};

export default Navigation;
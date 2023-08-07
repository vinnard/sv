import React from 'react';
import {Link} from "react-router-dom";

import css from './CarsList.module.css'


const CarsList = ({car}) => {
    return (
        <div className={css.carsList}>
            <Link to={car.id.toString()} className={css.link}>
                <ul className={css.list}>
                    <li className={css.item}>{car.brand}</li>
                    <li className={css.item}>{car.model}</li>
                    <li className={css.item}>{car.plate}</li>
                </ul>
            </Link>


        </div>
    );
};

export default CarsList;
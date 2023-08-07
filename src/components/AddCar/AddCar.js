import React, {useRef} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addNewCar} from "../../store";
import css from "./AddCar.module.css"


const AddCar = ({setAddCar, addCar}) => {
    const test = useRef(null)
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();
    const submit = (car) => {
        dispatch(addNewCar({car}));

        reset()

    }
    return (
        <div className={`${css.container} ${addCar ? '' : css.active}`} onClick={() => setAddCar(false)}>
            <form onSubmit={handleSubmit(submit)} onClick={e => e.stopPropagation()} className={css.form}>
                <div className={css.wrapper}>
                    <label> Ім'я <input type="text" {...register('name')} /></label>
                    <label> Прізвище <input type="text" {...register('surname')} /></label>
                    <label> Марка авто <input type="text" {...register('brand')} /></label>
                    <label> Модель авто<input type="text" {...register('model')}/> </label>
                    <label> Номерний знак <input type="text" {...register('plate')}/> </label>
                    <label> VIN код <input type="text" {...register('vin')}/> </label>
                    <label>Що міняємо? <textarea className={css.car_repair} rows="5" {...register('repair')}/></label>
                </div>
                <button ref={test} className={css.button} >Додати авто</button>
            </form>
        </div>
    );
};

export default AddCar;
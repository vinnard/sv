import React, {useEffect} from 'react';
import {useOutletContext, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import {getCarById, updateCarById} from "../../store";
import {useForm} from "react-hook-form";
import css from './Car.module.css'
import ModalWindow from "../ModalWindow/ModalWindow";

const Car = () => {
    const {id} = useParams();
    const {car} = useSelector(state => state.carReducer)
    const dispatch = useDispatch();
    const {handleSubmit, register, setValue} = useForm();
    const active = useOutletContext();

    useEffect(() => {
        dispatch(getCarById({id}))
    }, [id])

    useEffect(() => {
        setValue('name', car.name)
        setValue('surname', car.surname)
        setValue('brand', car.brand)
        setValue('model', car.model)
        setValue('plate', car.plate)
        setValue('vin', car.vin)
        setValue('repair', car.repair)
    }, [car])
    const submit = (data) => {
        dispatch(updateCarById({id: car.id, car: data}))

    }

    return (
        <div className={`${css.container}    ${active ? css.active : ""}`}>
            <form className={css.car_form} onSubmit={handleSubmit(submit)}>
                <div className={css.form_wrapper}>
                    <label>Ім'я <input type="text"  {...register('name')}/></label>
                    <label>Прізвище <input type="text" {...register('surname')}/></label>
                    <label>Марка авто <input type="text" {...register('brand')}/></label>
                    <label>Модель авто <input type="text"   {...register('model')}/> </label>
                    <label>Номерний знак <input type="text"  {...register('plate')}/></label>
                    <label>VIN Код <input type="text" {...register('vin')}/></label>
                    <label>Що міняємо? <textarea className={css.car_repair} rows="5" {...register('repair')}/></label>
                </div>
                <div className={css.button_container}>
                    <button className={css.car_button}>Оновити</button>
                    <button className={css.car_button}>Видалити</button>
                </div>
                <ModalWindow/>
            </form>

        </div>
);
};

export default Car;
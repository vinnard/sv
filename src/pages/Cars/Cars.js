import {Outlet, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import CarsList from "../../components/CarsList/CarsList";
import css from './Cars.module.css'
import AddCar from "../../components/AddCar/AddCar";
import {getAllCars} from "../../store";
import {set} from "react-hook-form";


const Cars = () => {
    const {cars} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();
    const queryCar = query.get('cars') || '';
    const [addCar, setAddCar] = useState(false);

    useEffect(() => {
        dispatch(getAllCars());
    }, [])

    const submit = (e) => {
        e.preventDefault();
        setQuery({cars: e.target.value});
    }


    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div>
                    <div className={css.cars} onClick={ () => setAddCar(false)}>
                        <input onChange={submit} className={css.cars_search} placeholder="Пошук за номерним знаком"
                               type="search"/>
                        {cars.filter(car => car.vin.includes(queryCar) || car.plate.includes(queryCar)).map(car =>
                            <CarsList key={car.id} car={car}/>)}
                    </div>
                    <div className={css.list_wrapper}>
                        <button className={css.cars__button} onClick={ () => setAddCar(true) } >Додати автомобіль</button>
                    </div>
                </div>
            </div>
            <AddCar addCar={addCar} setAddCar={setAddCar}/>
            <Outlet context={addCar}/>

        </div>
    );
};

export default Cars;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../services";


export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, car}, {dispatch}) => {
        try {
            const updatedCar = await carsService.updateCar(id, car);
            dispatch(updateCar({car: updatedCar}))
            dispatch(getAllCars())

        } catch (e) {
            console.log(e)
        }
    }
)
export const deleteCarById = createAsyncThunk(
    'carSlice/deleteCar',
    async (id) => {
        try {
            await carsService.deleteById(id)
            const cars = await carsService.getAll();
            return cars
        } catch (e) {
        }
    }
)


export const addNewCar = createAsyncThunk(
    'carSlice/addNewCar',
    async ({car}) => {
        try {
            const newCar = await carsService.create(car);
            // dispatch(addCar({data: newCar}))
            return {car: newCar}
        } catch (e) {

        }
    }
)

export const getCarById = createAsyncThunk(
    'carSlice/getCarById',
    async ({id}) => {
        try {
            const carById = await carsService.getById(id)
            return carById;

        } catch (e) {

        }
    }
)

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async () => {
        try {
            const cars = await carsService.getAll();
            return cars
        } catch (e) {

        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        car: {},
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(...action.payload.data)
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = action.payload.car;
        }
    },
    extraReducers: {
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload;
        },
        [addNewCar.fulfilled]: (state, action) => {
            state.cars.push(action.payload.car)
        },
        [getCarById.fulfilled]: (state, action) => {
            state.car = action.payload;

        },
        [deleteCarById.fulfilled]: (state, action) => {
            state.cars = action.payload

        },


    }
})

const carReducer = carSlice.reducer;

export const {addCar, updateCar} = carSlice.actions;
export default carReducer;



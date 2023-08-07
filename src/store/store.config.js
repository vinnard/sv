import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./car.slice";


const store = configureStore({
    reducer: {
        carReducer: carReducer
    }
})

export default store
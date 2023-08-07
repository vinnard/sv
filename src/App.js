import {Route, Routes} from "react-router-dom";

import Cars from "./pages/Cars/Cars";
import DetailsList from "./pages/DetailsList/DetailsList";
import Navigation from "./components/Navigation/Navigation";
import Car from "./components/Car/Car";

import './index.css'


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigation/>}>
                    <Route path={'/'} element={<Cars/>}>
                        <Route path={'/:id'} element={<Car/>}> </Route>
                    </Route>
                    <Route path={'/store'} element={<DetailsList/>}> </Route>
                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;

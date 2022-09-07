import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Login } from '../../Pages/Login/Login'
import { HouseDetails } from "../../Pages/Boliger/HouseDetails";
import { HouseList } from "../../Pages/Boliger/HouseList";


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/boliger'>
                <Route index element={<HouseList />} ></Route>
                <Route path=":house_id" element={<HouseDetails />}></Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}
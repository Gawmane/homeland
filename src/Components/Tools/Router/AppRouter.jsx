import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Login } from '../../Pages/Login/Login'
import { Houses } from '../../Pages/Boliger/Houses'
import { HouseDetails } from "../../Pages/Boliger/HouseDetails";


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/boliger' element={<Houses />} >
                <Route path=":id" element={<HouseDetails />}></Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}
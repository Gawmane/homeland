import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { Home } from '../../Pages/Home/Home'
import { Login } from '../../Pages/Login/Login'
import { HouseDetails } from "../../Pages/Boliger/HouseDetails";
import { HouseList } from "../../Pages/Boliger/HouseList";
import { EditReviews } from '../../Pages/Comment/Put';


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login">
                <Route index element={<Login />}></Route>
                <Route path=":comment_id" element={<EditReviews />} />
            </Route>
            <Route path='/boliger'>
                <Route index element={<HouseList />} ></Route>
                <Route path=":house_id" element={<HouseDetails />}></Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}
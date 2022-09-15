import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { Search } from './Search';
import { useAuth } from "../Tools/Auth/Auth"
import { Login } from '../Pages/Login/Login';

export const Navigation = () => {
    //Custum hook useAuth - henter vores getter og vores login side
    const { loginData } = useAuth(Login);
    return (
        <div className={style.navWrapper}>

            <nav className={style.navigation}>
                <ul className={style.ulwrapper}>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/boliger'}>Boliger til salg</NavLink></li>
                    {/* //Hvis vi er logget ind vis "login" i nav ellers vis "logud" */}
                    <li><NavLink to={'/login'}>{loginData.access_token ? "Min side" : "Login"}</NavLink></li>
                    <li><Search /></li>

                </ul>
            </nav>
        </div>
    )
}

export function BurgerMenu() {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div className={isActive ? style.burgerMenuActive : style.burgerMenu} onClick={handleToggle}>
                <AiFillHome className={style.burgerMenuHome} />
                <AiOutlineClose className={style.burgerMenuClose} />
            </div>

            <ul className={isActive ? style.activeMenu : style.menu}>
                <li><NavLink className={style.navigationLinks} to="/" onClick={handleToggle}>Forside</NavLink></li>
                <li><NavLink className={style.navigationLinks} to="/boliger" onClick={handleToggle}>Boliger til salg</NavLink></li>

                <li><NavLink className={style.navigationLinks} to="/login" onClick={handleToggle}>Login</NavLink></li>
            </ul>
        </>
    )
}

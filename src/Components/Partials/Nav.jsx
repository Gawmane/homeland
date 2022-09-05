import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { Search } from './Search';

export const Navigation = () => {
    return (
        <div className={style.navWrapper}>

            <nav className={style.navigation}>
                <ul className={style.ulwrapper}>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/'}>Boliger til salg</NavLink></li>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
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
                <li><NavLink className={style.navigationLinks} to="/login" onClick={handleToggle}>Login</NavLink></li>
            </ul>
        </>
    )
}

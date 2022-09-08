import style from '../../assets/Style/Header.module.scss'
import { BurgerMenu, Navigation } from '../Partials/Nav'
import { Slider } from './slider'
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <header>

            <Navigation />
            <BurgerMenu />
            <Link to="./"><h2>HomeLands</h2></Link>
            {/* <Slider /> */}
        </header>

    )
}
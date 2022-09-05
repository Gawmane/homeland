import style from '../../assets/Style/Header.module.scss'
import { BurgerMenu, Navigation } from '../Partials/Nav'
import { Slider } from './slider'


export const Header = () => {
    return (
        <header>

            <Navigation />
            <BurgerMenu />
            <h2>HomeLands</h2>
            {/* <Slider /> */}
        </header>

    )
}
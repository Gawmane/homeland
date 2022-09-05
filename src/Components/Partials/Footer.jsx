import style from '../../assets/Style/Footer.module.scss'
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
export const Footer = () => {
    return (
        <footer>
            <div className={style.wrapper}>
                <h2>HomeLands</h2>
                <span>
                    <p>Øster Uttrupvej 5 </p><p>9000 Aalborg</p>
                </span>
                <span>
                    <a href="mailto:info@homelands.dk">Email: info@homelands.dk</a>
                    <a href="tel:+45 1122 3344">Telefon: +45 1122 3344</a>
                </span>
            </div>
            <span className={style.icons}>
                <AiFillTwitterSquare /> <AiFillFacebook />
            </span>
        </footer>
    )
}
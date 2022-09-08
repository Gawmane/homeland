
import style from "../../../assets/Style/Houses.module.scss"
import { AiFillCamera, AiOutlineHeart, AiOutlineBuild } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
export const HouseDetailsItem = props => {
    return (
        <section className={style.details}>
            <article className={style.detailstop}>
                <span>
                    <h3>{props.data.address}</h3>
                    <p>{props.data.zipcode} {props.data.city}</p>
                    <p>{props.data.type} | {props.data.floor_space}m2 | {props.data.num_rooms}vær</p>
                    <p>Set {props.data.num_clicks} gange</p></span>
                <span>
                    <AiFillCamera />
                    <AiOutlineBuild />
                    <FaMapMarkerAlt />
                    <AiOutlineHeart />

                </span>
                <span>
                    <h3>Kontaktpris {props.data.price}</h3>
                    <p>Udbetaling{props.data.payout}</p>
                    <p>Ejerudgift per måned {props.data.cost}</p>
                </span>
            </article>
            <article className={style.detailsmiddel}>
                <span>
                    <p>Sagsnr: {props.data.id}</p>
                    <p>Boligareal: {props.data.floor_space}</p>
                    <p>Grundareal: {props.data.ground_space}</p>
                    <p>Antal rum: {props.data.num_rooms}</p>
                    <p>Antal plan: {props.data.num_floors}</p>
                </span>
                <span>
                    <p>Kælder: {props.data.basement_space}</p>
                    <p>Byggeår: {props.data.year_construction}</p>
                    <p>Ombygget: {props.data.year_rebuilte}</p>
                    <p>Energimærke: {props.data.energy_label_name}</p>
                    <p>Liggetid: </p>
                </span>
                <span>
                    <p>Kontantpris: {props.data.price}</p>
                    <p>Udbetaling: {props.data.payout}</p>
                    <p>Brutto ex. ejerudgift: {props.data.gross}</p>
                    <p>Netto ex. ejerudgift: {props.data.net}</p>
                    <p>Ejerudgift: {props.data.cost}</p>
                </span>
            </article>
            <article className={style.detailscontent}>

                <p>{props.data.description}</p>
                <div>TOM DIV HVOR DER SKAL VÆRE PLADS TIL MÆGLER</div>
            </article>


        </section>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../Tools/Layout/Layout";
import style from "../../../assets/Style/Houses.module.scss"
import { AiFillCamera, AiOutlineHeart, AiOutlineBuild } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Modal from "../../Partials/Modal";


export const HouseDetails = () => {
    const { house_id } = useParams(0);
    //Får objekt ud {} - fordi [] arrey kommer kun ud ved lister
    const [data, setData] = useState({});

    //Usestate der har en setter og getter til at åbne modal - false da den først skal være true og vises ved klik
    const [isOpen, setIsOpen] = useState(false);

    // Hook til styring af renders
    useEffect(() => {
        const getHouseData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/homes/${house_id}`);
                if (result.data) {
                    setData(result.data.item);
                }
            } catch (error) {
                console.log(error)
            }
        }
        // Funktionskald
        getHouseData()
    },
        // Dependency array - hvis house_id  ændres renderes komponenten
        [house_id])

    return (
        // Kalder layout komponent med title og description
        <Layout description="Produkt detaljer">


            {data && data ? (
                <>
                    <header className={style.detailsheader}>
                        {/* {console.log(data.images[0])} */}
                        {data.images && data.images[0].filename && data.images[0].filename.large && (

                            <img src={data.images[0].filename.large} alt={data && data.images[0].description} className={style.detailsimage} />
                        )}
                    </header>
                    <section className={style.details}>

                        <article className={style.detailstop}>
                            <span>
                                <h3>{data.address}</h3>
                                <p>{data.zipcode} {data.city}</p>
                                <p>{data.type} | {data.floor_space}m2 | {data.num_rooms}vær</p>
                                <p>Set {data.num_clicks} gange</p></span>
                            <span>

                                <button onClick={() => setIsOpen(true)}>
                                    <AiFillCamera />
                                </button> <button onClick={() => setIsOpen(true)}>
                                    <AiOutlineBuild />
                                </button> <button onClick={() => setIsOpen(true)}>
                                    <FaMapMarkerAlt />
                                </button> <button onClick={() => setIsOpen(true)}>
                                    <AiOutlineHeart />
                                </button>
                                {/* conditional rendering viser kun modal når isOpen state er true 
            tilføjer setIsOpen med som prop*/}
                                {isOpen && <Modal setIsOpen={setIsOpen} />}
                            </span>
                            <span>
                                <h3>Kontaktpris {data.price}</h3>
                                <p>Udbetaling{data.payout}</p>
                                <p>Ejerudgift per måned {data.cost}</p>
                            </span>
                        </article>
                        <article className={style.detailsmiddel}>
                            <span>
                                <p>Sagsnr: {data.id}</p>
                                <p>Boligareal: {data.floor_space}</p>
                                <p>Grundareal: {data.ground_space}</p>
                                <p>Antal rum: {data.num_rooms}</p>
                                <p>Antal plan: {data.num_floors}</p>
                            </span>
                            <span>
                                <p>Kælder: {data.basement_space}</p>
                                <p>Byggeår: {data.year_construction}</p>
                                <p>Ombygget: {data.year_rebuilte}</p>
                                <p>Energimærke: {data.energy_label_name}</p>
                                <p>Liggetid: </p>
                            </span>
                            <span>
                                <p>Kontantpris: {data.price}</p>
                                <p>Udbetaling: {data.payout}</p>
                                <p>Brutto ex. ejerudgift: {data.gross}</p>
                                <p>Netto ex. ejerudgift: {data.net}</p>
                                <p>Ejerudgift: {data.cost}</p>
                            </span>
                        </article>
                        <article className={style.detailscontent}>

                            <p>{data.description}</p>
                            {/* <figure>
                                <figcaption>
                                    <h3>{data.staff.firstname}</h3>
                                    <p>{data.staff.position}</p>
                                    <p>{data.staff.phone}</p>
                                    <p>{data.staff.email}</p>
                                </figcaption>
                            </figure> */}
                        </article>
                    </section>
                </>

            ) : <>...loading</>}


        </Layout>
    )
}


import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../Tools/Layout/Layout";
import { HouseDetailsItem } from "./HouseDetailsItem";
import style from "../../../assets/Style/Houses.module.scss"


export const HouseDetails = () => {
    const { house_id } = useParams();
    //Får objekt ud {} - fordi [] arrey kommer kun ud ved lister
    const [data, setData] = useState({});

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
            <header className={style.detailsheader}>
                {data && data.images.map((items, i) => {
                    if (i < 1) {
                        return (

                            <img src={items.filename.large} alt="image" key={items.id} className={style.detailsimage} />
                        )
                    }
                    else {
                        return null
                    }
                })}</header>
            {data ? (
                <>

                    <HouseDetailsItem key={data.id} data={data} house_id={house_id} />



                </>

            ) : null}
            {/* <figure>
                <figcaption>
                    <h3>{data.staff.firstname}</h3>
                    <p>{data.staff.position}</p>
                    <p>{data.staff.phone}</p>
                    <p>{data.staff.email}</p>
                </figcaption>
            </figure> */}

        </Layout>
    )
}


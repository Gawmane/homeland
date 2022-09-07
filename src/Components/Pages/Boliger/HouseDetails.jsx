import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../Tools/Layout/Layout";
import { HouseDetailsItem } from "./HouseDetailsItem";


export const HouseDetails = () => {
    const { house_id } = useParams();
    //Får objekt ud {} - fordi [] arrey kommer kun ud ved lister
    const [data, setData] = useState({});

    // Hook til styring af renders
    useEffect(() => {
        const getHouseData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/homes/${home_id}`);
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
        <Layout title="Produkt detaljer">
            <h1>{data.city}</h1>
            {data ? (


                <HouseDetailsItem key={data.id} data={data} house_id={house_id} />
            ) : null}
        </Layout>
    )
}


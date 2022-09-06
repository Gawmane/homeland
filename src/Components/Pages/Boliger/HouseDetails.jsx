import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../Tools/Layout/Layout";
import { HouseDetailsItem } from "./HouseDetailsItem";
import appService from "../../Tools/Appservice/AppService"


export const HouseDetails = () => {
    const { id } = useParams();
    //Får objekt ud {} - fordi [] arrey kommer kun ud ved lister
    const [data, setData] = useState({});

    // Hook til styring af renders
    useEffect(() => {
        const getHouseData = async () => {
            try {
                const result = await appService.getDetails('homes', 'id');
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
        // Dependency array - hvis product_id  ændres renderes komponenten
        [id])

    return (
        // Kalder layout komponent med title og description
        <Layout title="Produkt detaljer">
            <span>
                <h2>{data.address}</h2>
                <p>{data.zipcode} {props.data.city}</p>
                <p>{data.type} | {props.data.floor_space}m2 | {props.data.num_rooms}vær</p>
                <p>{data.num_clicks}</p></span>
            <span></span>
            {/* // Returnerer komponent med product object som data objekt
            //Splitter html op i yndrelige component (productlistitem) data= smider product ojektet over i andet component som props så vi har adgang til data fra api kaldet
            */}
            {/* {data ? (
                <HouseDetailsItem key={data.id} data={data} product_id={house_id} />
            ) : null} */}
        </Layout>
    )
}


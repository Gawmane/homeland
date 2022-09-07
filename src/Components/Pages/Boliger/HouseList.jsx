import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import houses from "../../../assets/Style/Houses.module.scss"
// import { AiOutlineHeart } from "react-icons/ai";


export const HouseList = () => {
    const { house_id } = useParams(0);
    const [data, setData] = useState([]);


    useEffect(() => {
        const getHouses = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/homes');
                if (result.data) {
                    setData(result.data.items);
                    console.log(result.data.items)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getHouses();
    }, []);
    return (
        <section className={houses.houselist}>

            {data && data.map((houses) => {

                return (
                    <figure key={houses.id} >
                        <Link to={`${houses.id}`} >
                            {houses && houses.images.map((items, i) => {
                                if (i < 1) {
                                    return (

                                        <img src={items.filename.medium} alt="image" key={items.id} />
                                    )
                                }
                                else {
                                    return null
                                }
                            })}

                            <figcaption>
                                <article>
                                    <h4>{houses.address}</h4>
                                    <p><b>{houses.zipcode}</b> <b>{houses.city}</b></p>

                                    <p>{houses.type}</p>
                                    <span>
                                        <p>{houses.energy_label_name}</p>
                                        <p>{houses.num_rooms} værelser,</p>
                                        <p>{houses.floor_space} m2</p>

                                        <p><b>{houses.price}</b> DKK</p>
                                    </span>
                                </article>
                            </figcaption>
                        </Link>
                    </figure>

                )
            }

            )}
        </section>
    )
}
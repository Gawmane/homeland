import { useEffect, useState } from "react";
import houses from "../../../assets/Style/Houses.module.scss"
// import { AiOutlineHeart } from "react-icons/ai";
import appService from "../../Tools/Appservice/AppService"

export const HouseList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getHouses = async () => {
            try {
                const result = await appService.getList('homes');
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

            {data && data.map((houses, i) => {

                return (
                    <figure key={houses.id}>
                        {houses && houses.images.map((items, i) => {
                            if (i < 1) {
                                return (

                                    <img src={items.filename.medium} alt="image" />
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
                    </figure>
                )
            }

            )}
        </section>
    )
}
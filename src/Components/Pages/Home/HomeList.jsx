import { useEffect, useState } from "react";
import style from "../../../assets/Style/Home.module.scss"
import appService from "../../Tools/Appservice/AppService"
export const HomeList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getFavorites = async () => {
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
        getFavorites();
    }, []);
    return (
        <section className={style.favorites}>

            {data && data.map((favorites, i) => {
                if (i < 3) {
                    return (
                        <figure key={favorites.id}>
                            {favorites && favorites.images.map((items, i) => {
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
                                    <h4>{favorites.address}</h4>
                                    <p><b>{favorites.zipcode}</b> <b>{favorites.city}</b></p>

                                    <p>{favorites.type}</p>
                                    <span>
                                        <p>{favorites.energy_label_name}</p>
                                        <p>{favorites.num_rooms} værelser,</p>
                                        <p>{favorites.floor_space} m2</p>

                                        <p><b>{favorites.price}</b> DKK</p>
                                    </span>
                                </article>
                            </figcaption>
                        </figure>
                    )
                }
                else {
                    return null
                }
            })}
        </section>
    )
}
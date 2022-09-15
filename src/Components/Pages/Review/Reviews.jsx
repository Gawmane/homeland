import { useEffect, useState } from "react";
import style from "../../../assets/Style/Home.module.scss"
import appService from "../../Tools/Appservice/AppService"
import Carousel from 'react-material-ui-carousel'

export const Reviews = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            try {
                const result = await appService.getList('reviews');
                if (result.data) {
                    setData(result.data.items);
                    console.log(result.data.items)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getReviews();
    }, []);
    return (
        <section className={style.reviews}>
            <Carousel className={style.Carouse}>

                {data && data.map((reviews) => {

                    return (
                        <article key={reviews.id}>
                            <h4>{reviews.title}</h4>
                            <p>"{reviews.content}"</p>
                            <p>{reviews.user.firstname} {reviews.user.lastname}, {reviews.user.created_friendly}</p>
                        </article>
                    )


                })}
            </Carousel>
        </section>
    )
}
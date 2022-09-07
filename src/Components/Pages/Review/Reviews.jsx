import { useEffect, useState } from "react";
import style from "../../../assets/Style/Home.module.scss"
import appService from "../../Tools/Appservice/AppService"

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

            {data && data.map((reviews, i) => {
                if (i < 1) {
                    return (
                        <article key={reviews.id}>
                            <h4>{reviews.title}</h4>
                            <p>"{reviews.content}"</p>
                            <p>{reviews.user.firstname} {reviews.user.lastname}, {reviews.user.created_friendly}</p>
                        </article>
                    )
                }
                else {
                    return null
                }
            })}
        </section>
    )
}
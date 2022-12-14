import { useState } from "react";
import style from "../../../assets/Style/Home.module.scss"
import { useForm } from 'react-hook-form';
import axios from "axios";
import { authHeader } from "../../Tools/Appservice/AuthHeader";

import { Link } from "react-router-dom";

//Funktion til oprettelse af reviews
export const NewReviews = () => {
    //UseState hook - false 
    const [formStatus, setFormStatus] = useState(false);
    //Form Hook til handelsubmit
    const { register, handleSubmit, formState: { errors } } = useForm();

    //Funktion til at kalde api med form data
    const onSubmit = async (data) => {
        const formData = new FormData();
        //Tilføjer title,content,user_id,num_starts og active til objektet
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('user_id', data.user_id);
        formData.append('num_stars', data.num_stars);
        formData.append('active', 1);
        //Bruger authHeader til at tjekke om sessionStorage eksisterer
        const result = await axios.post('https://api.mediehuset.net/homelands/reviews', formData, { headers: authHeader() });
        //Fejlhåndtering i console
        if (result) {
            console.log('Din kommentar er sendt');

        } else {
            console.log(errors);
        }
        //Setter setFormStatus til true for at kunne submit vores form
        setFormStatus(true)
    }
    return (
        <section className={style.newreviw}>

            {/* Conditional ternary operator - vis input - efter tryk submit vis message */}
            {!formStatus ?

                // handleSubmit validere  inputs inden kald af "onSubmit" 
                <form onSubmit={handleSubmit(onSubmit)} className={style.reviwform}>

                    <span>
                        {/* Validering TITLE - tjekker om title er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator)*/}
                        <label>Title:</label>
                        <input type="text" id="title" {...register("title", { required: true })} />
                        {errors.title && <span>Du skal indtaste en title</span>}
                    </span>

                    <span>
                        {/* Validering MESSAGE - tjekker om message er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <label>Anmeldelse:</label>
                        <textarea id="content"{...register("content", { required: true })} ></textarea>
                        {errors.content && <span>Du skal indtaste din anmeldelse</span>}
                    </span>

                    <span>
                        {/* Validering MESSAGE - tjekker om message er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <label>Antal stjerner:</label>
                        <input type="number" id="num_stars"{...register("num_stars", { required: true })} ></input>
                        {errors.num_stars && <span>Du skal indtaste din anmeldelse</span>}
                    </span>

                    <button type="submit" >Send</button>
                    <button type='reset'>Nulstil</button>


                </form>
                :
                // Ny form med besked om at formen er sendt og link til min side
                <form className={style.formMessage}>
                    <article>
                        <h2>Tak for din anmeldelse</h2>
                        <p>Din anmedelse er nu offenlig og alle kan se den</p>
                        <p>Du kan se dine anmeldelser her: <Link to={'/login'}>din side</Link></p>


                    </article>
                </form>
            }
        </section>

    )
}

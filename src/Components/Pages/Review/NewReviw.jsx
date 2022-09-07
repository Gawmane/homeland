import { useState } from "react";
import style from "../../../assets/Style/Home.module.scss"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const NewReviews = () => {
    //UseState hook - false og useform hook til handelsubmit
    const [formStatus, setFormStatus] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();

    //Ved clik onsubmit - vis info i console og gør setformstatus true 
    const onSubmit = data => {
        console.log(data);
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
                        <input type="text" {...register("title", { required: true })} />
                        {errors.title && <span>Du skal indtaste en title</span>}
                    </span>

                    <span>
                        {/* Validering MESSAGE - tjekker om message er udfyldt (required) og sender en fejl meddelese hvis der ikke er skrevet noget i feltet (... = Spread operator) */}
                        <label>Anmeldelse:</label>
                        <textarea {...register("message", { required: true })} ></textarea>
                        {errors.message && <span>Du skal indtaste din anmeldelse</span>}
                    </span>

                    <button type="submit" >Send</button>


                </form>
                :
                // Ny form med besked om at formen er sendt
                <form className={style.formMessage}>
                    <article>
                        <h2>Tak for din anmeldelse</h2>
                        <p>Din anmedelse er nu offenlig og alle kan se den</p>
                        <p>Du kan se dine anmeldelser her: <Link to="/">din side</Link></p>
                    </article>
                </form>
            }
        </section>

    )
}

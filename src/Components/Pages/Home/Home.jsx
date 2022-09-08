import { Layout } from "../../Tools/Layout/Layout"
import { HomeList } from "./HomeList"
import style from "../../../assets/Style/Home.module.scss"
import { Reviews } from "../Review/Reviews"
import { Link } from "react-router-dom"
import { Employees } from "./Employees"
import { NewReviews } from "../Review/NewReviw"
import { useState } from "react"
export const Home = () => {
    //"Firstarticle" vises fra start men bliver ændret ved click til "secondArticle"
    const [active, setActive] = useState("FirstArticle")
    return (
        <section className={style.homesection}>
            <header className={style.slider}></header>
            <Layout description="Forside homeland">

                <HomeList />
                <h2>Det siger kunderne:</h2>
                {/* active er i identisk med navnet i " " og det comonent der er tilføjet */}
                {active === "FirstArticle" && <Reviews />}
                {active === "SecondArticle" && <NewReviews />}

                {/* onclik der sætter "secondarticle" ind oppe i vores hook istedet for "firstarticle" */}
                <button onClick={() => setActive("SecondArticle")}>Skriv en anmedelse</button>
                <h2>Mød vores ansatte</h2>
                <Employees />
            </Layout>
        </section>
    )
}
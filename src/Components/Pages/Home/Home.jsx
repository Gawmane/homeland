//Import af styling 
import { Layout } from "../../Tools/Layout/Layout"
import style from "../../../assets/Style/Home.module.scss"

//Import af componenter
import { HomeList } from "./HomeList"
import { Reviews } from "../Review/Reviews"
import { Employees } from "./Employees"
import { NewReviews } from "../Review/NewReviw"
import { useState } from "react"
import { Slider } from "../../Partials/slider"

//Component der indeholder alt indhold der høre til forsiden
export const Home = () => {

    //"Firstarticle" vises fra start men bliver ændret ved click til "secondArticle"
    const [active, setActive] = useState("FirstArticle")

    //Return vores indhold på forside og wrapper den i en section
    return (
        <section className={style.homesection}>
            <Layout description="Forside homeland">

                {/* Import af slider Component */}
                <Slider />
                {/* Import af Component der viser 3 forskellige huse */}
                <HomeList />

                {/* Section der skifter mellem andmedelser og skriv andmedelse */}
                <h2>Det siger kunderne:</h2>
                {/* active er i identisk med navnet i " " og det comonent der er tilføjet */}
                {active === "FirstArticle" && <Reviews />}
                {active === "SecondArticle" && <NewReviews />}

                {/* onclik der sætter "secondarticle" ind oppe i vores hook istedet for "firstarticle" */}
                <button onClick={() => setActive("SecondArticle")}>Skriv en anmedelse</button>

                {/* Title og Import af employees comonent */}
                <h2>Mød vores ansatte</h2>
                <Employees />
            </Layout>
        </section>
    )
}
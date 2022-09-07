import { Layout } from "../../Tools/Layout/Layout"
import { HomeList } from "./HomeList"
import style from "../../../assets/Style/Home.module.scss"
import { Reviews } from "../Review/Reviews"
import { Link } from "react-router-dom"
import { Employees } from "./Employees"
import { NewReviews } from "../Review/NewReviw"
export const Home = () => {
    return (
        <section>
            <header className={style.slider}></header>
            <Layout description="opgave">

                <HomeList />
                <h2>Det siger kunderne:</h2>
                <Reviews />
                {/* Prøve side til formen - skal sættes sammen med link og login */}
                {/* <NewReviews /> */}
                <Link to="/">Skriv en anmeldeles</Link>
                <h2>Mød vores ansatte</h2>
                <Employees />
            </Layout>
        </section>
    )
}
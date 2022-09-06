import { Layout } from "../../Tools/Layout/Layout"
import { HomeList } from "./HomeList"
import style from "../../../assets/Style/Home.module.scss"
import { Reviews } from "./Reviews"
import { Link } from "react-router-dom"
import { Employees } from "./Employees"
export const Home = () => {
    return (
        <section>
            <Layout description="opgave">

                <HomeList />
                <h2>Det siger kunderne:</h2>
                <Reviews />
                <Link to="/">Skriv en anmeldeles</Link>
                <h2>Mød vores ansatte</h2>
                <Employees />
            </Layout>
        </section>
    )
}
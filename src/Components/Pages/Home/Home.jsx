import { Layout } from "../../Tools/Layout/Layout"
import { HomeList } from "./HomeList"

export const Home = () => {
    return (
        <>
            <Layout description="opgave">

                <HomeList />
                <h2>Det siger kunderne:</h2>
            </Layout>
        </>
    )
}
import { useEffect, useState } from "react";
import style from "../../../assets/Style/Home.module.scss"
import appService from "../../Tools/Appservice/AppService"

export const Employees = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getEmployees = async () => {
            try {
                const result = await appService.getList('staff');
                if (result.data) {
                    setData(result.data.items);
                    console.log(result.data.items)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getEmployees();
    }, []);
    return (
        <section className={style.employees}>

            {data && data.map((employees, i) => {
                if (i < 4) {
                    return (
                        <figure key={employees.id} style={{ backgroundImage: `url('${employees.image}')` }}>
                            {/* <img src={} alt={employees.firstname} /> */}
                            <figcaption>
                                <h4>{employees.firstname} {employees.lastname}</h4>
                                <p>{employees.position}</p>
                                <span>
                                    <p>Email: {employees.email}</p>
                                    <p>Telefon: {employees.phone}</p></span>
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
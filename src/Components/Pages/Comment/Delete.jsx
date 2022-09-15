import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Tools/Auth/Auth";
import { authHeader } from "../../Tools/Appservice/AuthHeader";

import axios from "axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
//Liste der skal vises på vores side - liste kun med egen kommentar (admin)
export const Admin = () => {
    const { loginData } = useAuth();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getAdmin = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/reviews`);
                if (result.data) {
                    setData(result.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getAdmin();
    }, [])

    //Const til at slette comment via id
    const deleteReviw = async (id) => {
        try {
            //Bruger authHeader til at tjekke om sessionStorage eksisterer
            const result = await axios.delete(`https://api.mediehuset.net/homelands/reviews/${id}`, { headers: authHeader() });
            if (result) {
                submit()
            }
        } catch (error) {
            console.log(error);
        }
    }
    const submit = () => {
        confirmAlert({
            title: 'Bekræft dit valg',
            message: 'Er du sikker på du vil slette?',
            buttons: [
                {
                    label: 'Ja',
                    onClick: () => window.location.reload()
                },
                {
                    label: 'Nej',
                }

            ]
        });
    }
    return (
        <>
            {/*Conditional ternary operator
              bruger kommantar skal kun vises ved login*/}
            {!loginData ?
                (
                    <></>
                )
                :
                (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Anmedelse</th>
                                <th>Dato</th>
                                <th>Rediger </th>
                                <th>Slet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter(user => user.user_id == loginData.user_id).map(getUser => {
                                return (
                                    <tr key={getUser.id}>
                                        <td>{getUser.title}</td>
                                        <td>{getUser.content}</td>
                                        <td>{getUser.created_friendly}</td>
                                        <td> <Link to={getUser.id}><AiFillEdit /></Link>   </td>
                                        <td><button onClick={() => deleteReviw(getUser.id)}><AiFillDelete /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}

        </>
    )
}
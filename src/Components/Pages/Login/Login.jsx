import { useForm } from "react-hook-form";
import { useAuth } from "../../Tools/Auth/Auth";
import { Layout } from "../../Tools/Layout/Layout";
import axios from "axios";
import style from "../../../assets/Style/Login.module.scss"
import { MyTable } from "./Admid";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    //Henter data fra useAuth
    const { loginData, setLoginData } = useAuth();


    // Funktion til at kalde api med form data
    const sendLogin = async data => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        const result = await axios.post('https://api.mediehuset.net/token', formData)
        handleSessionData(result)
    }
    //Funktion til at håndtere form data
    const handleSessionData = data => {
        if (data) {
            sessionStorage.setItem("token", JSON.stringify(data));
            setLoginData(data)
        }
    }

    //Logout funktion - fjerne token og efterlader en tom string
    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
    }
    return (

        <section>
            {/* Vis hvis form er falsk */}
            {
                !loginData && !loginData.username ? (
                    <Layout title="Login" description="Login side" >
                // Sætter onSubmit event med closure function
                        //closure = sender funktion videre som tager en funktion som argument og så lukker - sendlogin lukker handelSubmit
                        <form onSubmit={handleSubmit(sendLogin)} className={style.form}>

                            {/* //Spread operator(...) - giver mulighed for at kopiere hele eller dele af et eksisterende array eller objekt til et andet array eller objekt. */}

                            <input type="text" placeholder="Brugernavn" id="username" {...register("username", { required: true })} />

                            {/*Fejlmeddelese vises hvis der er fejl */}
                            {errors.username && (
                                <span> Indtast dit brugernavn</span>
                            )}


                            <input type="password" placeholder="Adgangskode" id="password" {...register("password", { required: true })} />

                            {/* Fejlmeddelese vises hvis der er fejl */}
                            {errors.password && (
                                <span> Indtast din adgangskode</span>
                            )}
                            <button>Login</button>
                            <button type="reset">Annuller</button>
                        </form>
                    </Layout>
                ) : (
                    //Hvis man er logget ind vises side med administration
                    <Layout title="Administration" description="Administrations side ved login" >
                        <p>Du er logget ind som <i>{loginData.username}</i></p>
                        <MyTable />
                        {/* Knap der kalder vores logout funktion og logger af */}
                        <button onClick={logOut}>Logout</button>
                    </Layout>)
            }
        </section>

    );
}
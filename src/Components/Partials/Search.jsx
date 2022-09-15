import { BsArrowRightShort } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import style from '../../assets/Style/Nav.module.scss'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

//Funtion component
const Search = () => {
    const [keyword, setKeyword] = useState('')
    const { register, handleSubmit } = useForm();

    //sætter data.keyword hvis getsearchresult har data
    const getSearchResult = data => {
        setKeyword(data.keyword);
    }
    return (
        <section className={style.search}>
            {/* //closure = sender funktion videre som tager en funktion som argument og så lukker */}
            <form onSubmit={handleSubmit(getSearchResult)} className={style.searchform}>
                {/* //Spread operator(...) - giver mulighed for at kopiere hele eller dele af et eksisterende array eller objekt til et andet array eller objekt. */}
                <input id="keyword" type="text" placeholder="Søg" {...register("keyword", { required: true })} />
                <button > <BsArrowRightShort /></button>

            </form>
            {keyword && (
                <SearchResult keyword={keyword} />
            )}

        </section>)
}

//Viser hvilket søgeresulat der er kommet på ordet - result eller noResult
const SearchResult = props => {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://api.mediehuset.net/homelands/search/${props.keyword}`);
            setSearchData(result.data)
        }
        getData()
    }, [props.keyword, setSearchData]);

    //Ser efter om der er nogle num_items(antal data i søgningen) - hvis der er vis result hvis ikke noresult
    return (
        <>
            {searchData.num_items ?
                // Viser hvor mange resultater(num_items), der er på ordet (keyword) og viser data (items) - hentes fra result
                <Result num_items={searchData.num_items} items={searchData.items} keyword={props.keyword} />
                :
                //Viser fejlbesked fra noResult med ordet  i beskeden (keyword)
                <NoResult keyword={props.keyword} />}
        </>
    )
}
//Viser en liste med data hvis orden findes
const Result = (props) => {
    return (
        <article className={style.searchlist}>

            <h3>Fandt {props.num_items} resultater på ordet <i>{props.keyword}</i></h3>


            {props.items && props.items.map(item => {
                return (


                    //Linker til boligsiden med det id der er klikket ind på. ved click refresher siden så de andre resultater forsvinder.
                    <Link to={`/boliger/${item.id}`} >

                        <figure key={item.id} >

                            <img src={item.images[0].filename.medium} alt="image" key={item.id} />
                            <figcaption>
                                <h4>{item.address}</h4>
                                <p>{item.zipcode} {item.city}</p>
                                <p>{item.type}</p>
                            </figcaption>
                        </figure>
                    </Link>



                )
            })}

        </article >)
}
//Vises hvis keyword ikke findes - fejlmeddelese
const NoResult = (props) => {
    return (
        <>
            <p>Fand ingen resultater på din søgning <i>"{props.keyword}"</i></p>
            <p>Tjek om dit ord er stavet rigtigt, eller prøv igen med et mere specifikt ord</p>
        </>
    )
}

export { Search, SearchResult }



export const HouseDetailsItem = props => {
    return (
        <section >
            <header>
                <span>
                    <h2>{props.data.address}</h2>
                    <p>{props.data.zipcode} {props.data.city}</p>
                    <p>{props.data.type} | {props.data.floor_space}m2 | {props.data.num_rooms}vær</p>
                    <p>{props.data.num_clicks}</p></span>
                <span>
                    <p>icons</p>
                    <p>icons</p>
                    <p>icons</p>
                    <p>icons</p>
                </span>
                <span>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                </span>
            </header>
            <article></article>
            <article>
                <div></div>
                <div>Mægler</div>
            </article>


        </section>
    )
}
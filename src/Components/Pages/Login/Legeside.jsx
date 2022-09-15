import style from "../../../assets/Style/Checkmarks.module.scss"
import React, { useState } from "react";
import Modal from "../../Partials/Modal";

export const Legeside = () => {
    //Midlertidlig contex for at få vist noget på siden
    //Usestate der har en setter og getter til at åbne modal - false da den først skal være true og vises ved klik
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className={style.checkmarks}>
                <h2>Checkbox styling</h2>
                <label className={style.wrapper} > jeg aceptere vilkår
                    <input type="checkbox" />
                    <span className={style.checkmark}></span>
                </label>
                <label className={`${style.wrapper} ${style.blue}`} > jeg aceptere vilkår
                    <input type="checkbox" />
                    <span className={`${style.checkmark} ${style.bluecheck}`}></span>
                </label>
            </section>


            <button onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            {/* conditional rendering viser kun modal når isOpen state er true 
            tilføjer setIsOpen med som prop*/}
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    )

}




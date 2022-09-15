import React from "react";
import styles from "../../assets/Style/Modal.module.scss"
import { RiCloseLine } from "react-icons/ri";

//Modal funktion med setIsOpen som props da den skal kunne lukke modalen igen.
const Modal = ({ setIsOpen }) => {
    return (
        <>{/* Ved klik på baggrund - luk modal
        Vi tilføjer onclik event og tilføjer en boolean som eneste argument af setIsOpen fucktion - den skal være false
        */}
            <section className={styles.modalwrapper} onClick={() => setIsOpen(false)} />
            <article className={styles.centered}>
                <div className={styles.modal}>


                    <h5>Dialog</h5>

                    {/* //Close button 
                    Tilføjer onclik event og sætter setIsOpen som false 
                    så lukker modalen ved klik på knappen
                    */}

                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>

                    <p>
                        Det her er en besked
                    </p>
                    {/* Tilføj denne del hvis der skal være en fortryd knap 
                    <div className={styles.modalActions}>
                        <button
                            className={styles.cancelBtn}
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>*/}
                </div>
            </article>
        </>
    );
};

export default Modal;
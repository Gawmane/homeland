import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import style from "../../assets/Style/Slider.module.scss"
import appService from "../Tools/Appservice/AppService"
import axios from 'axios';
import { useState } from 'react';


export const Slider = () => {

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const getSlider = async () => {
            try {
                const result = await axios.get('https://api.mediehuset.net/homelands/images');
                if (result.data) {
                    setSlider(result.data.items);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getSlider();
    }, []);

    return (
        <header className={style.slider}>
            <Carousel className={style.slidercarousel}>


                {slider && slider.map((items) => {
                    return (
                        <div key={items.id}>
                            <img src={items.image[1]} alt="imgslider" width="100%"  ></img>

                        </div>
                    )
                })}
            </Carousel></header>
    )
}



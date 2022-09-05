import React from 'react';

//import SimpleImageSlider from "react-simple-image-slider";
import Slide1 from '../../assets/Images/slide1.jpg'
import Slide2 from '../../assets/Images/side2.jpg'
import Slide3 from '../../assets/Images/slide3.jpg'


export const Slider = () => {

    // laver Array med billedets url, en titel til at have over sig og så et alt tag til billedet
    const carouselItem = [
        {
            url: Slide1,
            alt: "house homelands",
        },
        {
            url: Slide2,
            alt: "house homelands",
        },

        {
            url: Slide3,

            alt: "house homelands",
        },
    ]


    return (
        // <Carousel>
        <section>
            {/* Map vores array  */}
            {
                carouselItem.map((item, index) => {
                    return (
                        <Item key={index} item={item}></Item>)
                })
            }</section>
        // </Carousel>
    )
}


function Item(props) {

    return (
        <div >

            <img alt={props.item.alt} src={props.item.url} ></img>
        </div>
    )
}
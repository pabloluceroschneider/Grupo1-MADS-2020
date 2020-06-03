import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Carrousell = (props) =>{
    const {images} = props

    const elements =[images.map(img =>{
        return <img src={img} alt="Hola mundo"/>
    })]

    return (
		<div className="image">
			 <Carousel>
                {images.map(img =>{
                    return <img key={img} src={img} alt="Hola mundo"/>
                })}
            </Carousel>
		</div>
	)

}

export default Carrousell;
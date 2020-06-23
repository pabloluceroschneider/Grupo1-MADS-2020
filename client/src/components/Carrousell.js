import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Carrousell = (props) =>{
    const {images} = props

    const elements = images ? [images.map(img =>{
        return <img src={img} alt="Hola mundo"/>
    })] : null

    return (
		<div className="image">
			 <Carousel>
                {images ? images.map(img =>{
                    return <img key={img} src={img} alt="Hola mundo"/>
                }) 
                : <img src={ require('../assets/unnamed.png') } alt="Hola mundo"/> }
            </Carousel>
		</div>
	)

}

export default Carrousell;
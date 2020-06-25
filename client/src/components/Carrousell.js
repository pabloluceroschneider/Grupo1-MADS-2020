import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import firebase, { storage } from 'firebase';

const Carrousell = (props) =>{
    const {images} = props;
    const [ photos, setPhotos ] = useState([])
    console.log("images -->", images)

    useEffect( () => {
        images.map( async img => {
            let storageRef = firebase.storage().ref();
            let spaceRef = storageRef.child('images/'+img);
            let url = await storageRef.child('images/'+img).getDownloadURL().then( url => { 
                console.log("url -->", url)
                return url 
            })
            setPhotos( [...photos, url] )
        })
        
    },[])

    useEffect( () => { console.log("photos -->", photos) }) 



    const elements = images ? [images.map(img =>{
        return <img src={img} alt="Hola mundo"/>
    })] : null

    const showImage = img => {
        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child('images/'+img);
        let url = storageRef.child('images/'+img).getDownloadURL().then( url => { 
            console.log("url -->", url)
            return url 
        } )
        return url;
    }

    return (
		<div className="image">
			 <Carousel>
                {photos ? photos.map(img =>{
                    return <img key={img} src={img} alt="Hola mundo"/>
                }) 
                : <img src={ require('../assets/unnamed.png') } alt="Hola mundo"/> }
            </Carousel>
		</div>
	)

}

export default Carrousell;
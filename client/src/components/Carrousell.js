import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import firebase, { storage } from "firebase";

const imagenes = [
    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/59/55/84/1200x1200/1716688221.jpg",
    "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/97/17/01/1200x1200/1704286302.jpg",
    "https://imgar.zonapropcdn.com/avisos/resize/1/00/44/90/38/04/1200x1200/1700036482.jpg",
    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/83/95/69/1200x1200/1719623196.jpg",
    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/82/90/81/1200x1200/1719325461.jpg",
    "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/61/77/65/1200x1200/1714820015.jpg",
  ];

const Carrousell = (props) => {
  const { images } = props;
  const [photos, setPhotos] = useState([]);
  console.log("images -->", images);

  useEffect(() => {
    if (images) {
      images.map(async (img) => {
        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child("images/" + img);
        let url = await storageRef
          .child("images/" + img)
          .getDownloadURL()
          .then((url) => {
            console.log("url -->", typeof url );
            return url;
          });
        setPhotos(photos => [...photos, url]);
      });
    }
  }, []);

  useEffect(() => {
    console.log("photos -->", photos);
  });

  console.log('photos:', photos);

  return (
    <div className="image">
      <Carousel>
        {photos.length > 0 ? (
          photos.map((img) => {
            return <img key={img} src={img} alt="Hola mundo" />;
          })
        ) : (
          <img src={require("../assets/unnamed.png")} alt="Hola mundo" />
        )}
      </Carousel>
    </div>
  );
};

export default Carrousell;

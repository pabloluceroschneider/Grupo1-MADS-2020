import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import firebase from "firebase";

const Carrousell = (props) => {
  const { images } = props;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (images) {
      images.map(async (img) => {
        let storageRef = firebase.storage().ref();
        let url = await storageRef
          .child("images/" + img)
          .getDownloadURL()
          .then((url) => {
            return url;
          });
        setPhotos(photos => [...photos, url]);
      });
    }
  }, [images]);


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

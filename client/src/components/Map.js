import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

// -> recordar: npm install --save google-map-react

const Marcador = () => (
  <div>
    <Icon size="huge" color="red" name="map marker alternate" />
  </div>
);

class Map extends Component {
  static defaultProps = {
    zoom: 17,
  };

  render() {
    const { lat, long } = this.props;
    let latInt = parseFloat(lat);
    let longInt = parseFloat(long);
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={{'lat':latInt, 'lng':longInt }}
          defaultZoom={this.props.zoom}
        >
          <Marcador lat={latInt} lng={longInt} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

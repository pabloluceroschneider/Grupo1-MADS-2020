import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

// -> recordar: npm install --save google-map-react

const Marcador = () => (
  <div>
    <Icon size="huge" color="red" name="map marker" />
  </div>
);

class Map extends Component {
  static defaultProps = {
    zoom: 17,
  };

  render() {
    const { latitud, longitud } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={{'lat':latitud, 'lng':longitud }}
          defaultZoom={this.props.zoom}
        >
          <Marcador lat={latitud} lng={longitud} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

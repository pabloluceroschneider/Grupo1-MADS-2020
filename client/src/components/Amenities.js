import React, { Component } from "react";

export class Amenities extends Component {
  render() {
    const { amenities } = this.props;
    
    return (
      <div className="container-amenitie">
        {amenities.map((amenitie) => {
          if (amenitie["valor"] === 'true') {
            return (
              <div key={amenitie.descripcion}>. {amenitie["descripcion"]}</div>
            );
          }
          return null
        })}
      </div>
    );
  }
}

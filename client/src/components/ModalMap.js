import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Map from "./Map";

const ModalMapa = (props) => {
  const { titulo, latitud, longitud} = props;

  return (
    <Modal trigger={<Button>Ver Mapa</Button>}>
      <Modal.Header>{titulo}</Modal.Header>
      <Modal.Content>
        <Map latitud={latitud} longitud={longitud}></Map>
      </Modal.Content>
    </Modal>
  );
};

const Mapa = (props) => {
  return (
    <ModalMapa
      titulo={props.title}
      latitud={props.lat}
      longitud={props.lon}
    ></ModalMapa>
  );
};

export default Mapa;

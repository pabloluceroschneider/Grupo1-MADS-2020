import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Map from "./Map";

const ModalMapa = (props) => {
  const { titulo, lat, long} = props;

  return (
    <Modal trigger={<Button>Ver Mapa</Button>}>
      <Modal.Header>{titulo}</Modal.Header>
      <Modal.Content>
        <Map lat={lat} long={long}></Map>
      </Modal.Content>
    </Modal>
  );
};

const Mapa = (props) => {
  return (
    <ModalMapa
      titulo={props.title}
      lat={props.lat}
      long={props.long}
    ></ModalMapa>
  );
};

export default Mapa;

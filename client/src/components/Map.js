import React, { Component, useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const ModalMapa = (props) => {
  const { titulo, latitud, longitud} = props;

  return (
    <Modal trigger={<Button>Ver Mapa</Button>}>
      <Modal.Header>{titulo}</Modal.Header>
      <Modal.Content> 
            Aca va el Mapa
      </Modal.Content>
    </Modal>
  );
};

const Map = (props) => {
    return (<ModalMapa titulo={props.title}></ModalMapa>);
};

export default Map
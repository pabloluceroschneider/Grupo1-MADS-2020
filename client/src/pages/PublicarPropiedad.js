import React, { Component } from 'react'
import { BarraMenu } from '../components/home/BarraMenu'
import { Title } from '../components/home/Title'
import { PresentationList } from '../components/home/PresentationList'
import { TabInformativo } from '../components/home/TabInformativo'
import { Footer } from '../components/home/Footer'
import Formulario from '../components/FormCreateProperty'

export class PublicarPropiedad extends Component {
    render(){
        return (
            <div className="PublicarPropiedad">
               <BarraMenu></BarraMenu>
               <Title>Co-Alquilando</Title>
               <PresentationList handlerPage={this.props.handlerPage}></PresentationList>
               <h1>
                   PUBLICAR PROPIEDAD
               </h1>
               <Formulario />
               <h1 style={{marginTop: 0}}>¿Cómo Funciona?</h1>
               <TabInformativo></TabInformativo>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <Footer></Footer>
            </div>
        )
    }
}
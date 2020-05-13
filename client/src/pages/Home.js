import React, { Component } from 'react'
import { BarraMenu } from '../components/home/BarraMenu'
import { Title } from '../components/home/Title'
import { PresentationList } from '../components/home/PresentationList'
import { TabInformativo } from '../components/home/TabInformativo'
import { Footer } from '../components/home/Footer'
import { ListOwnership } from '../components/ListOwnership'

export class Home extends Component {
    render(){
        return (
            <div className="Home">
               <BarraMenu></BarraMenu>
               <Title>Co-Alquilando</Title>
               <PresentationList handlerPage={this.props.handlerPage}></PresentationList>
               <ListOwnership />
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
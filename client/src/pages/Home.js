import React, { Component } from 'react'
import {BarraMenu} from '../components/BarraMenu'
import {Title} from '../components/Title'
import { PresentationList } from '../components/PresentationList'
import { TabInformativo } from '../components/TabInformativo'
import { Footer } from '../components/Footer'


export class Home extends Component {
    render(){
        return (
            <div>
               <BarraMenu></BarraMenu>
               <Title>Co-Alquilando</Title>
               <PresentationList></PresentationList>
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
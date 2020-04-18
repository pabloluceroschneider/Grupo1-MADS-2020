import React, { Component } from 'react'
import {BarraMenu} from '../components/BarraMenu'
import {Title} from '../components/Title'
import { PresentationList } from '../components/PresentationList'


export class Home extends Component {
    render(){
        return (
            <div>
               <BarraMenu></BarraMenu>
               <Title>Co-Alquilando</Title>
               <PresentationList></PresentationList>
            </div>
        )
    }
}
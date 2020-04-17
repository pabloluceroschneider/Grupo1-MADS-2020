import React, { Component } from 'react'
import {BarraMenu} from '../components/BarraMenu'
import {Title} from '../components/Title'

export class Home extends Component {
    render(){
        return (
            <div>
               <BarraMenu></BarraMenu>
               <Title>Co-Alquilando</Title>
            </div>
        )
    }
}
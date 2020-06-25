import React, { Component } from 'react'
import { CardPresentacion } from './CardPresentacion'


export class PresentationList extends Component {
    render() {
        return (
            <ul className='PresentationalList'>
                <li className="li" style={{opacity: 0.5}}>
                <CardPresentacion handlerPage={this.props.handlerPage} pagina='' title='Buscar Compañero' description='Encuentra al compañero perfecto para compartir propiedad' imagen='https://www.cheatsheet.com/wp-content/uploads/2019/05/Joey-and-Chandler.jpg'></CardPresentacion>
                </li>
                <li className="li">
                <CardPresentacion handlerPage={this.props.handlerPage} pagina='PublicarPropiedad' title='Publicar Propiedad' description='Publica tu propiedad' imagen='https://www.hogares.cl/wp-content/uploads/2018/06/SLA_3734.jpg'></CardPresentacion>
                </li>
                <li className="li" style={{opacity: 0.5}}>
                <CardPresentacion handlerPage={this.props.handlerPage} pagina='' title='Buscar Compañero y Propiedad' description='Busca compañeros y propiedades para compartir' imagen='https://blog.nexoinmobiliario.pe/wp-content/uploads/2019/05/Roommates.jpg'></CardPresentacion>
                </li>
                <li className="li">
                <CardPresentacion handlerPage={this.props.handlerPage} pagina='ListaPropiedades' title='Buscar Propiedad' description='Busca la propiedad que mejor se adapte a ti' imagen='https://imgar.zonapropcdn.com/avisos/1/00/45/59/55/84/720x532/1716688221.jpg'></CardPresentacion>
                </li>
            </ul>
        )
    }
}
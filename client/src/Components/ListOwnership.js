import React, {Component} from 'react'
import {Ownership} from './Ownership'


export class ListOwnership extends Component{
 state={ownship: []}

   //Hago la llamada al servidor para solicitar las propiedades
   //Extraigo el objeto data de la respuesta y se lo asigno al objeto ownship del state
   componentDidMount(){
    fetch('/publicaciones')
        .then(res => res.json())
        .then(respuesta => {
            const {data} = respuesta
            console.log(data)
            this.setState({ownship:data})
       })
   }

   //Extraigo el Objeto ownship del state
    render(){
        const {ownship} = this.state
        return (
            <div>
                <h1 style={{textAlign:"left" ,padding:"15px"}}>Listado de Propiedades</h1>
                {ownship.map(prop =>{
                    return(
                        <div className="tarjetaProp" key={prop.id}>
                            <Ownership  dtp = {prop.datePublished}
                                        id = {prop.id}
                                        loc = {prop.location}
                                        own = {prop.owner}
                                        price = {prop.price}
                                        roomAp = {prop.roomApartment} />                        
                        </div>
                    )
                })}
            </div>
        )
    }
}
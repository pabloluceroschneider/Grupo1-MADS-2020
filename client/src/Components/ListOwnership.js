import React, {Component} from 'react'
import properties from '../Data/Ownerships.json'

export class ListOwnership extends Component{
    // state={ownship: []}


  //  componentDidMount(){
  //  fetch('./Data/Ownerships.json').
  //  then(res => res.json).
  //      then(data => {
  //          console.log(data)
  //      })
  //  }


    render(){
        return (
            <div>
                Listado de Propiedades
                {console.log(properties)}

                {properties.map(
                    prop =>{
                        return(
                            <h1 key={prop.id}>{prop.id}</h1>)
                        }
                        )}
            </div>
        )
    }
}
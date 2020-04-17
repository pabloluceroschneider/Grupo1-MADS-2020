import React, {Component} from 'react'


export class ListOwnership extends Component{
 state={ownship: []}


   componentDidMount(){
    fetch('/publicaciones')
        .then(res => res.json())
            .then(data => {
           console.log(data)
       })
   }


    render(){
        return (
            <div>
                Listado de Propiedades
            </div>
        )
    }
}
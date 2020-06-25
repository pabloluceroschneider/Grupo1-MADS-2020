import React, { Component } from 'react'


export class Precio extends Component{

   
    render(){
        const {precios} = this.props;

        function tomarPrecio(precios) {
            let total = 0;
            let incluye = 0;
            precios.forEach(pre => {
                if(pre['monto']>0){
                    total += pre['monto'];
                    incluye += pre['idPrecio']
                }
            })
            if (incluye === 3){
                return (
                    <div className="container-precio">
                        <div>
                            <h3>Precio:$ <span>{total}</span></h3>
                        </div>
                <div className="spaner">c/ {precios[0]['descripcion']}.{precios[1]['descripcion']}</div>
                    </div>)}
            else if (incluye === 6){
                return (
                    <div className="container-precio">
                        <div>
                            <h3>Precio:$ <span>{total}</span></h3>
                        </div>
                <div className="spaner">c/ {precios[0]['descripcion']}.{precios[1]['descripcion']}.{precios[2]['descripcion']}</div>
                    </div>)
            }

            else{
                return (
                    <div className="container-precio">
                        <div>
                            <h3>Precio:$ <span>{total}</span></h3>
                        </div>
                    </div>)
            }
        }; 
    
        return(
               tomarPrecio(precios)
        );
    };
}
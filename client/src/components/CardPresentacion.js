import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CardPresentacion extends Component{
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        imagen: PropTypes.string,
    }

    render(){
        const { title, description, imagen } = this.props

        return (
            <div className="ui card">
                <a className="image">
                    <img src={imagen} alt={title}></img>
                </a>
                <div className="content">
                    <p className="header" >{title}</p>
                    <div className="meta">
                    <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
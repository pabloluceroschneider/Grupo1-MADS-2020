import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <h4 className="ui inverted header">About</h4>
                  <div className="ui inverted link list">
                    <div  className="item">Sitemap</div>
                    <div  className="item">Contact Us</div>
                    <div  className="item">Religious Ceremonies</div>
                    <div className="item">Gazebo Plans</div>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>
                  <div className="ui inverted link list">
                    <div className="item">Banana Pre-Order</div>
                    <div className="item">DNA FAQ</div>
                    <div className="item">How To Access</div>
                    <div className="item">Favorite X-Men</div>
                  </div>
                </div>
                <div className="seven wide column">
                  <h3 className="ui inverted header">MADS - 2020</h3>
                  <h4>Conti - Lucero - Peralta</h4>
                </div>
              </div>
            </div>
          </div>
        
        )
    }
}
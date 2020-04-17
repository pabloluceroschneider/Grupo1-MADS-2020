import React, { Component } from 'react'


class BarraMenu extends Component {
    render() {
        return (
        <div class="ui container">
            <div class="ui inverted secondary pointing menu">
                <a class="active item">
                Home
                </a>
                <a class="item">
                Messages
                </a>
                <a class="item">
                Friends
                </a>
                <div class="right menu">
            <div class="ui dropdown item">
                Language <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="item">English</a>
                    <a class="item">Russian</a>
                    <a class="item">Spanish</a>
                </div>
            </div>
            <div class="item">
                <button class="ui primary button">Sign Up</button>
            </div>
        </div>
    </div>
</div>
        )
    }

}

export default BarraMenu;
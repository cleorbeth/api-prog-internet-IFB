import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div>
                            <a href='http://localhost:3000' className='navbar-brand'>
                                <img src='https://flaticons.net/images/icons/mobile-application/thumbs/home-l.png'></img>
                                <br />
                                &nbsp;&nbsp;&nbsp;Home
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
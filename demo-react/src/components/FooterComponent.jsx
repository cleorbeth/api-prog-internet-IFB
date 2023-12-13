import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className="text-muted">
                        <a href='https://www.ifb.edu.br' target='_blank' className='Link-footer'>
                            Instituto Federal de Brasília®
                        </a>
                    </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
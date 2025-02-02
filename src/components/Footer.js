import React, { Component } from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='privacy-statement'>
                    <NavLink to='/'><p>All rights reserved; Privacy Statement</p></NavLink>
                </div>
                <div className='privacy-statement'>
                    <a href='' target="_blank" rel="noopener noreferrer" className='made-by'>
                    <p className='made-by'> APP NAME</p></a>
                </div>
                <div> 
                    <button>
                        Github<a href='https://github.com/Issa-web' target="_blank" rel="noopener noreferrer"></a>
                    </button>
                </div>
            </div>
        )
    }
}

import React from 'react'
import Logo from '../assets/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router,  Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="l-header">
            <nav className="l-container u-container-flex">
                <Router>
                <section className="l-header-section u-justify-content-between">
                    <Link to="/" className="c-header-brand" href="/">
                        <figure>
                            <img src={Logo} alt="logotipo Sambay" width="100%"/>
                        </figure>
                    </Link>
                    <div className="c-header-search">
                        <span></span>
                        <input className="c-search-input" type="text" placeholder="Busque aqui seu produto"/>
                    </div>
                </section>
                </Router>
                <section className="l-header-section u-align-flex-end">
                    <button className="c-icon-button">
                        <FontAwesomeIcon
                            icon={faBell}
                            size="2x"
                            className="u-color-white"
                        />
                    </button> 
                    <button className="c-icon-button">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            size="2x"
                            className="u-color-white"
                        />
                    </button>
                    <div className="c-avatar">
                        {/* avatar styled with css */}
                    </div>
                </section>
            </nav>
        </header>
    )
}
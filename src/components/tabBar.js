import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function TabBar(){
    return (
        <nav className="c-mobile-nav">
            <ul className="c-mobile-nav-list">
                <li className="c-mobile-nav-list-item">
                    <FontAwesomeIcon
                        icon={faUser}
                        size="2x"
                        className="u-color-white"
                    />
                </li>
                <li className="c-mobile-nav-list-item">
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="2x"
                        className="u-color-white"
                    />
                </li>
                <li className="c-mobile-nav-list-item">
                    <FontAwesomeIcon
                        icon={faBell}
                        size="2x"
                        className="u-color-white"
                    />
                </li>
            </ul>
        </nav>
    )
}
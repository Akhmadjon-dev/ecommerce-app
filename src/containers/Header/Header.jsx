import { Search } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            {/* logo  */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo ecommerce"/>
            </Link>
            {/* search box */}
            <input type="text" className="header__input"/>
            <Search className="header__search-icon"/>
            {/* links */}
        </div>
    )
}

export default Header

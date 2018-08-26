import React from 'react';
import logo from '../../logo.svg'
const Header = () => {
    return (
        <header>
            <div className="header__logo"><img src={logo} width="60px"/></div> 
            <div className="header__title">Images</div>
        </header>
    );
};

export default Header;
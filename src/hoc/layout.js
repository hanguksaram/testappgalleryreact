import React from 'react';
import Header from '../components/header'
const Layout = (props) => (
    <div className="app">
        <Header/>
        <main>{props.children}</main>
    </div>
)        
    


export default Layout
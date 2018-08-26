import React from 'react';

const Layout = (props) => (
    <div className="app">
        <header></header>
        <main>{props.children}</main>
    </div>
)        
    


export default Layout
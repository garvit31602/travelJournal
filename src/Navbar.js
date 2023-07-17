import React from 'react';
import ReactDOM from 'react-dom/client';
import world from './images/Fill 213.svg'

function Navbar(){
    return(
        <div id="nav">
            <img id="world" src={world} height={12}></img>
            my travel journal.
        </div>
    )
}

export default Navbar;

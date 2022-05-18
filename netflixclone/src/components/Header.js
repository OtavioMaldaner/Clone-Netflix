import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        //  Ver erro "ERROR in src\components\Header.js
        //Line 6:28:  'black' is not defined  no-undef
        //Search for the keywords to learn more about each error."
        <header className={black ? 'black' : ''} >
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/c3/3b/32/c33b322b61b8f30f0df1d0b3de690734.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}
import React, { useState } from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <header className="header">
            <div className="room__title-container">
                <h1 className="room__title">{props.chatroomName}</h1>
            </div>
        </header>
    );
}

export default Header;
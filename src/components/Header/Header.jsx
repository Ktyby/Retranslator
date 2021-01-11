import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  chatroomName: PropTypes.string
}

Header.defaultProps = {
  chatroomName: ''
}

export default Header;
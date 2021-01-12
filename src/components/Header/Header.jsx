import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">{props.chatroomName}</h1>
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
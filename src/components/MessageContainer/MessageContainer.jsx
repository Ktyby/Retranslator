import React from 'react';
import PropTypes from 'prop-types';
import './MessageContainer.css';
import Message from '../Message/Message';

const MessageContainer = (props) => {
	const messageList = props.messages.map(message => 
	  <Message 
		  key={message.uuid}
		  sender={props.members.find((member) => member.uuid === message.sender_id)} 
		  message={message} />
	  );

  return (
	  <ul className="message__list">
		  {messageList}
	  </ul>
  );
}

MessageContainer.propTypes = {
	messages: PropTypes.func,
	members: PropTypes.func
}

MessageContainer.propTypes = {
	messages: () => {},
	members: () => {}
}

export default MessageContainer;
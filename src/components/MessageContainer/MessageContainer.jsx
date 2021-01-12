import React from 'react';
import PropTypes from 'prop-types';
import './MessageContainer.css';
import icon from './unnamed.jpg';

const MessageContainer = (props) => {
	const getSenderName = (message) => {
		const sender = props.members.find((member) => member.uuid === message.sender_id);

		if (sender) {
			return sender.name ? sender.name : sender.uuid.substr(-10);
		}

		return 'Unknown sender';
	};

	const messageList = props.messages.map((message, index) => {
		return (
			<li className="message__item" key={index}>
				<img className="message__icon" src={ icon } alt="visitor icon"/>
				<div className="message__bubble">
					<div className="message__name">{getSenderName(message)}</div>
					<div className="message__content">{message.content}</div>
				</div>
			</li>
		);
	});

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
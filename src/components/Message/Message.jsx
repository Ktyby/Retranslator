import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import icon from './unnamed.jpg';

const Message = (props) => {
	const getSenderName = () => {
		if (props.sender) {
			return props.sender.name ? props.sender.name : props.sender.uuid.substr(-10);
		}

		return 'Unknown sender';
	};

	return(
		<li className="message__item">
			<img className="message__icon" src={ icon } alt="visitor icon"/>
			<div className="message__bubble">
				<div className="message__name">{getSenderName()}</div>
				<div className="message__content">{props.message.content}</div>
			</div>
		</li>
	);
}

Message.propTypes = {
	sender: PropTypes.object,
	message: PropTypes.object
}

Message.defaultProps = {
	sender: {},
	message: {}
}

export default Message;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SendMessageForm.css';

const SendMessageForm = (props) => {
	const [message, setMessage] = useState('');

	const currentMessageChanged = (evt) => {
		setMessage(evt.target.value);
	}

	const sendMessageClicked = async (evt) => {
		evt.preventDefault();

		if (message.length > 0) {
			await props.onSendNewMessage(message);

			setMessage('');
		}
	}

	return (
		<section className="send-form__section">
			<form className="form">
				<input 
					className="form__input"
					type="text" 
					value={message} 
					onChange={currentMessageChanged} 
					placeholder="Type message to send"/>
				<button 
					className="form__button"
					type="submit" 
					onClick={sendMessageClicked}
				>Send</button>
			</form>
		</section>
	);
}

SendMessageForm.propTypes = {
	onSendNewMessage: PropTypes.func
}

SendMessageForm.propTypes = {
	onSendNewMessage: () => {},
}

export default SendMessageForm;
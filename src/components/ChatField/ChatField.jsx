import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatField.css';
import MessageContainer from '../MessageContainer/MessageContainer';
import SendMessageForm from '../SendMessageForm/SendMessageForm';

const ChatField = (props) => {
  const [messages, setMessages] = useState(props.messages);

  const onSendNewMessage = (message) => {
    const  myMessage = {
      content: message,
      sender_id: '98s7dfh9a8s7dhf',
    };

    setMessages(messages.concat(myMessage));
  }

  return(
    <div className="chat__field">
      <MessageContainer messages={messages} members={props.members}/>
      <SendMessageForm me={props.me} onSendNewMessage={onSendNewMessage}/>
    </div>
  );
}

ChatField.propTypes = {
  messages: PropTypes.array,
  members: PropTypes.array,
  me: PropTypes.object,
  onSendNewMessage: PropTypes.func
}

ChatField.defaultProps = {
  messages: [],
  members: [],
  me: {},
  onSendNewMessage: () => {}
}

export default ChatField;
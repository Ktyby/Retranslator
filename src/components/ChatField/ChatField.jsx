import React from 'react';
import './ChatField.css';
import MessageContainer from '../MessageContainer/MessageContainer';
import SendMessageForm from '../SendMessageForm/SendMessageForm';

const ChatField = (props) => {
  return(
    <div className="chat__field">
      <MessageContainer messages={props.messages} members={props.members}/>
      <SendMessageForm onSendNewMessage={props.onSendNewMessage} me={props.me}/>
    </div>
  );
}

export default ChatField;
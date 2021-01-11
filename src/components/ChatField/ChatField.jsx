import React from 'react';
import PropTypes from 'prop-types';
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
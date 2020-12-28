import React from 'react';
import './MessageContainer.css';
import Message from '../Message/Message';

function MessageContainer(props) {
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

export default MessageContainer;
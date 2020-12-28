import React from 'react';
import './Message.css';
import icon from './user-circle-solid.svg';

function Message(props) {
    const getSenderName = () => {
        if (props.sender) {
            return props.sender.name ? props.sender.name : props.sender.uuid.substr(-10);
        }
        return "Unknown sender";
    };

    return(
        <li className="message__item">
            <div className="message__icon">
                <img src={icon} alt="visitor icon"/>
            </div>
            <div className="message__bubble">
                <div className="message__name">{getSenderName()}</div>
                <div className="message__content">{props.message.content}</div>
            </div>
        </li>
    );
}

export default Message;
import React from 'react';
import './Main.css';
import MemberList from '../MemberList/MemberList';
import ChatField from '../ChatField';

const Main = (props) => {
  return(
    <section className="main__section">
      <MemberList members={props.members} me={props.me} />
      <ChatField
        members={props.members}
        messages={props.messages}
        onSendNewMessage={props.onSendNewMessage} 
        me={props.me}
      />
    </section>
  );
}


export default Main;
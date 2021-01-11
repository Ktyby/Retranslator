import React from 'react';
import PropTypes from 'prop-types';
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

Main.propTypes = {
  messages: PropTypes.array,
  members: PropTypes.array,
  me: PropTypes.object,
  onSendNewMessage: PropTypes.func
}

Main.defaultProps = {
  messages: [],
  members: [],
  me: {},
  onSendNewMessage: () => {}
}

export default Main;
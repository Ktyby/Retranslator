import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Video from '../Video';

const localMessages = [
  {
    content: "Сообщение 1",
    sender_id: "mnzxcv97zx6chvo",
    uuid: "dg897sdfg"
  },
  {
    content: "Сообщение 2",
    sender_id: "98s7dfh9a8s7dhf",
    uuid: "8723hernm"
  },
  {
    content: "Еще одно сообщение",
    sender_id: "mnzxcv97zx6chvo",
    uuid: "435nbcv98234"
  }
];

const localMembers = [
  {
    is_online: true,
    name: "Алексей",
    uuid: "98s7dfh9a8s7dhf"
  },
  {
    is_online: true,
    name: "Дмитрий",
    uuid: "mnzxcv97zx6chvo"
  },
  {
    is_online: false,
    name: "Андрей",
    uuid: "kjuhv987ashdfoua"
  },
  {
    is_online: false,
    name: "Владимир",
    uuid: "jdhnf978WEHJSNDL"
  },
];

const myData = {
  is_online: true,
  name: "Zёbra",
  uuid: "98s7dfh9a8s7dhf"
}

const App = () => {
  const [messages] = useState(localMessages);
  const [chatroomName] = useState('Чат-комната');
  const [members] = useState(localMembers);
  const [me] = useState(myData);

  const onSendNewMessage = async (message) => {
    console.log(message);
  }

  return (
    <div className="app">
      <Header 
        chatroomName={chatroomName} 
        me={me}    
      />
      <Video />
      <Main
        members={members}
        messages={messages}
        onSendNewMessage={onSendNewMessage}
        me={me}
      />
    </div>
  );
}

export default App;

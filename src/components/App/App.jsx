import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Video from '../Video';

class App extends React.Component {
  onSendNewMessage = async (message) => {
    console.log(message);
  }

  constructor(props) {
    super(props);
    this.state = {
      chatroomName: 'Чат-комната',
      messages: [
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
      ],
      members: [
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
      ],
      me: {
        is_online: true,
        name: "Zёbra",
        uuid: "98s7dfh9a8s7dhf"
      }
    };
  }

  render() {
    return (
      <div className="app">
        <Header 
            chatroomName={this.state.chatroomName} 
            me={this.state.me}    
        />
        <Video />
        <Main
          members={this.state.members}
          messages={this.state.messages}
          onSendNewMessage={this.onSendNewMessage}
          me={this.state.me}
        />
      </div>
    );
  };
}

export default App;

import React, { useState } from 'react';
import { Jutsu } from 'react-jutsu';
import './Video.css';

const Video = () => {
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState('');

  const handleClick = (evt) => {
		evt.preventDefault();
		
    if (room && name) setCall(true);
  }

  return call ? (
		<div className="video">
			<Jutsu
				roomName={room}
				displayName={name}
				password={password}
				onMeetingEnd={() => console.log('Meeting has ended')}
				loadingComponent={<p>loading ...</p>}
				errorComponent={<p>Oops, something went wrong</p>} />
		</div>
  ) : (
		<div className="video__form">
			<form>
				<input id='room' type='text' placeholder='Room' value={room} onChange={(evt) => setRoom(evt.target.value)} />
				<input id='name' type='text' placeholder='Name' value={name} onChange={(evt) => setName(evt.target.value)} />
				<input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(evt) => setPassword(evt.target.value)} />
				<button onClick={handleClick} type='submit'>Start / Join</button>
			</form>
		</div>
  )
}

export default Video;
import React from 'react';
import './MemberList.css';
import MemberItem from '../MemberItem/MemberItem';

function MemberList(props) {
    const members = props.members.map((member) => 
        <MemberItem key={member.uuid} member={member} me={props.me}/>
    );

    return (
        <ul className="member-list">
            {members}
        </ul>
    );
}

export default MemberList;
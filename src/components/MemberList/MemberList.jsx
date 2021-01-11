import React from 'react';
import PropTypes from 'prop-types';
import './MemberList.css';
import MemberItem from '../MemberItem/MemberItem';

const MemberList = (props) => {
	const members = props.members.map((member) => <MemberItem key={member.uuid} member={member} me={props.me}/>);

	return (
		<ul className="member-list">
			{members}
		</ul>
	);
}

MemberList.propTypes = {
	member: PropTypes.object,
  me: PropTypes.object
}

MemberList.defaultProps = {
	member: {},
  me: {}
}

export default MemberList;
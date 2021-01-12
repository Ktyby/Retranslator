import React from 'react';
import PropTypes from 'prop-types';
import './MemberList.css';
import icon from './unnamed.jpg';

const MemberList = (props) => {
	const getName = (member) => {
		let name = '';
    if (member.uuid === props.me.uuid) {
			return name = props.me.name ? props.me.name : props.me.uuid.substring(props.me.uuid.length-10, props.me.uuid.length);
		} else {
			return name = member.name ? member.name : member.uuid.substring(member.uuid.length-10, member.uuid.length);
    }
  }

	const members = props.members.map((member) => {
		return ( 
			<li key={member.uuid} className="member__item">
				<img className="member__icon" src={icon} alt={member.name}/>
				<p className="member__name">
					{getName(member)}
					{ member.uuid === props.me.uuid && " (Вы) "}
				</p>
				{member.is_online && <p className="member__online">•</p>}
			</li>
	)});

	return (
		<ul className="member__list">
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
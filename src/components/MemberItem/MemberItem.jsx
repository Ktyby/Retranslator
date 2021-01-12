import React from 'react';
import PropTypes from 'prop-types';
import './MemberItem.css';
import icon from './unnamed.jpg';

const MemberItem = (props) => {
  const getName = () => {
		let name = '';
    if (props.member.uuid === props.me.uuid) {
			return name = props.me.name ? props.me.name : props.me.uuid.substring(props.me.uuid.length-10, props.me.uuid.length);
		} else {
			return name = props.member.name ? props.member.name : props.member.uuid.substring(props.member.uuid.length-10, props.member.uuid.length);
    }
  }

  

  return(
  	<li className="member__item">
      <img className="member__icon" src={icon} alt={props.member.name}/>
      <p className="member__name">
        {getName()}
        { props.member.uuid === props.me.uuid && " (Вы) "}
      </p>
			{props.member.is_online && <p className="member__online">•</p>}
    </li>
  );
}

MemberItem.propTypes = {
  member: PropTypes.object,
  me: PropTypes.object
}

MemberItem.defaultProps = {
  member: {},
  me: {}
}

export default MemberItem;
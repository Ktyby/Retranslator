import React from 'react';
import './MemberItem.css';
import icon from './unnamed.jpg';

function MemberItem(props) {
    function getName(){
        let name = ''
        if (props.member.uuid === props.me.uuid) {
            if(props.me.name) {
                name = props.me.name
            }
            else {
                name = props.me.uuid.substring(props.me.uuid.length-10, props.me.uuid.length);
            }
        }
        else {
            if(props.member.name){
                name = props.member.name
            }
            else {
                name = props.member.uuid.substring(props.member.uuid.length-10, props.member.uuid.length);
            }
        }
        return name;
    }

    return(
        <li className="member__item">
            <img className="member__icon" src={ icon } alt={ props.member.name }/>
            <p className="member__name">
                { getName() }
                {
                    props.member.uuid === props.me.uuid && " (Вы) "
                }
            </p>
            {
                props.member.is_online && <p className="member__online">•</p>
            }
        </li>
    );
}

export default MemberItem;
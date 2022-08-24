/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { joinOrLeaveMissions } from '../redux/missions';
import './mission.css';

export default function Mission({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.mission);
  const text = reserved ? 'Active Member' : 'NOT A MEMBER';
  const btnText = reserved ? 'Leave Mission' : 'Join Mission';
  const isMember = () => {
    return ({
      backgroundColor: reserved ? '#00a388' : '#535353',
      color: 'white',
      padding: '5px',
      borderRadius: '5px',
    }
    );
  };
  const isJoin = () => {
    return ({
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: reserved ? '#f00' : '#535353',
      color: reserved ? '#f00' : '#535353',
      padding: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
    }
    );
  };
  function joinLeave(id) {
    currentState.forEach((element) => {
      if (element.mission_id === id) {
        element.reserved = !element.reserved;
      }
    });
    dispatch(joinOrLeaveMissions(currentState));
  }
  return (
    <tr>
      <td className="top-left">{name}</td>
      <td>{description}</td>
      <td className="center">
        <span style={isMember(reserved)}>{text}</span>
      </td>
      <td className="center">
        <button type="button" style={isJoin(reserved)} onClick={() => joinLeave(id)}>{btnText}</button>
      </td>
    </tr>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRockets, deleteBook } from '../redux/rockets';
import '../css/rocket.css';

export default function Rocket(props) {
  const {
    name, img, description, id, reserved,
  } = props;
  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(bookRockets(id));
  };

  const unsubscribe = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="rocket">
      <div>
        <img className="photo" src={img} alt="rocket" />
      </div>
      <div className="rocket-describe">
        <h4 className="name">{name}</h4>
        <p>
          <span className={reserved ? 'badge' : null}>
            {reserved === true ? 'Reserved' : '' }
          </span>
          {description}
        </p>
        {!reserved
          ? <button className="reserve" type="button" onClick={reserve}>Reserve Rocket</button>
          : <button className="cancel" type="button" onClick={unsubscribe}>Cancel Reservation</button>}

      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

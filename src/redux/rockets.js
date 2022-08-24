import fetchRockets from '../api/api_rockets';

// Actions
const SHOW_ROCKETS = 'rockets/SHOW_ROCKETS';
const BOOK_ROCKET = 'rockets/BOOK_ROCKET';
const DELETE_BOOK = 'rockets/DELETE_BOOK';

// Action Creators
const getRockets = async (dispatch, getState) => {
  const { rockets: currentRockets } = getState();
  if (currentRockets.length === 0) {
    const rockets = await fetchRockets();
    dispatch({ type: SHOW_ROCKETS, payload: rockets });
  }
};

const bookRockets = (id) => ({
  type: BOOK_ROCKET,
  payload: id,
});

const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

// Reducer
const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case DELETE_BOOK:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
}

export { getRockets, bookRockets, deleteBook };

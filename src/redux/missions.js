const FETCH_MISSION = 'spacetravelhub/missions/fetch';
const JOIN_OR_LEAVE_MISSION = 'spacetravelhub/missions/joinOrLeave';

export default function mission(state = [], action) {
  switch (action.type) {
    case FETCH_MISSION: return [...action.payload];
    case JOIN_OR_LEAVE_MISSION: return [...action.payload];
    default: return state;
  }
}

export const fetchMissions = (missions) => ({
  type: FETCH_MISSION,
  payload: missions,
});

export const joinOrLeaveMissions = (missionList) => ({
  type: JOIN_OR_LEAVE_MISSION,
  payload: missionList,
});

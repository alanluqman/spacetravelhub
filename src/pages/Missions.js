/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchMissions } from '../redux/missions';
import Mission from '../component/mission';
import '../css/Missions.css';

export default function Missions() {
  const missionList = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  const api = 'https://api.spacexdata.com/v3/missions';
  useEffect(() => async () => {
    const data = await axios.get(api).then((response) => response.data);
    // eslint-disable-next-line prefer-const
    let newList = [];
    data.forEach((element) => {
      newList.push({
        mission_id: element.mission_id,
        mission_name: element.mission_name,
        description: element.description,
        reserved: false,
      });
    });
    dispatch(fetchMissions(newList));
  }, []);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Mission</th>
            <th style={{ width: '50%' }}>Description</th>
            <th style={{ width: '15%' }}>Status</th>
            <th style={{ width: '15%' }}> </th>
          </tr>
        </thead>
        <tbody>
          {missionList.map((mission) => <Mission key={mission.mission_id} id={mission.mission_id} name={mission.mission_name} description={mission.description} reserved={mission.reserved} />)}
        </tbody>
      </table>
    </div>
  );
}

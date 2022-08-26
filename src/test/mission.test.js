import {
  render, screen, act, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../pages/Missions';

describe('Missions page component', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'spacetravelhub/missions/fetch',
      payload: [],
    }));
  });
  // check for missions table
  it('Check if table of missions available', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.getByText('Description')).toMatchSnapshot();
  });
  // check for join mission buttons
  it('Should join mission button available', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const button = await screen.findAllByText(/Join Mission/i);
    expect(button).toMatchSnapshot();
  });
  // check for NOT A MEMBER badge
  it('Should NOT A MEMBER badge available', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const notMemberBadge = await screen.findAllByText(/NOT A MEMBER/i);
    expect(notMemberBadge).toMatchSnapshot();
  });
  // check for Leave Mission button if i clicked Join Mission
  it('Should Leave Mission button available', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const button = await screen.findAllByText('Join Mission');
    fireEvent.click(button[0]);
    const leaveMissionBtn = await screen.findAllByText(/Leave Mission/i);
    expect(leaveMissionBtn).toMatchSnapshot();
  });
  // check for Active Member badge when i clicked Join Mission button
  it('Should Active Member badge available', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const button = await screen.findAllByText('Join Mission');
    fireEvent.click(button[0]);
    const activeMemberBadge = await screen.findAllByText(/Active Member/i);
    expect(activeMemberBadge).toMatchSnapshot();
  });
});

import {
  render, screen, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Display from '../pages/MyProfile';

describe('My Profile component', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'spacetravelhub/missions/fetch',
      payload: [],
    }));
  });
  // check for My Missions and My Rockets availability
  it('Check My Missions and My Rockets are available', async () => {
    render(
      <Provider store={store}>
        <Display />
      </Provider>,
    );
    expect(screen.getByText('My Missions')).toMatchSnapshot();
    expect(screen.getByText('My Rockets')).toMatchSnapshot();
  });
});

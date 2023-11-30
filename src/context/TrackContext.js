import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.payload }
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTracks },
  []
);

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.payload }
    default:
      return state;
  }
};

const createTrack = dispatch => () => {
  dispatch({ type: 'create_track', payload: '' });
};

const fetchTracks = dispatch => () => {
  dispatch({ type: 'fetch_tracks', payload: name });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { createTrack, fetchTracks },
  []
);

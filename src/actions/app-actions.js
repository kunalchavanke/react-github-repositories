import * as type from '../constants/action-types';

export const setTitleAction = (payload) => ({
  type: type.SET_TITLE,
  payload
});

export const setNavUrlAction = (payload) => ({
  type: type.SET_NAV_URL,
  payload
});
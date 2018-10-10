import * as type from '../constants/action-types';

export const getReposAction = (payload) => ({
  type: type.GET_REPOS,
  payload
});

export const getReposSuccessAction = (payload) => ({
  type: type.GET_REPOS_SUCCESS,
  payload
});

export const getReposFailureAction = (errorMessage) => ({
  type: type.GET_REPOS_FAILURE,
  errorMessage
});

export const filterReposAction = (searchString) => ({
  type: type.FILTER_REPOS,
  payload: searchString
});
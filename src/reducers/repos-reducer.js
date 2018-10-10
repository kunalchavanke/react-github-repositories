import * as type from '../constants/action-types';

const initialState = {
    // holds all the repositories
    repos: [],
    // holds filtered repositories
    filteredRepos: [],
    // holds search string
    searchString: '',
    // holds message to be shown if no filter result is found 
    filterResultMessage: '',
    // holds column headers
    headers: ['Id', 'Repo name', 'Languages', 'Subscribers', 'Contributers', 'Repo url', 'Owner']
}

// handles repos actions
export default (state = initialState, action) => {
    switch (action.type) {

        case type.GET_REPOS:
            return state;
            break;

        case type.GET_REPOS_SUCCESS:
            return { ...state, repos: action.payload, filteredRepos: action.payload };
            break;

        case type.GET_REPOS_FAILURE:
            return { ...state, filterResultMessage: action.payload };
            break;

        case type.FILTER_REPOS:
            // filters reposiitories containing search string
            let searchString = action.payload;
            if (searchString === '') {
                return { ...state, filteredRepos: state.repos, searchString };
            } else {
                let filteredRepos = state.repos.filter((repo) =>
                    (repo.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
                );
                let filterResultMessage = (!filteredRepos || filteredRepos.length === 0) ? 'No such repository found!' : '';
                return { ...state, filteredRepos, filterResultMessage, searchString };
            }
            break;

        default:
            return state;
    }
}
import axios from 'axios';
import { GET_REPOS } from '../constants/api-constants'

// get call for github repos
export const getRepos = () => axios.get(GET_REPOS);
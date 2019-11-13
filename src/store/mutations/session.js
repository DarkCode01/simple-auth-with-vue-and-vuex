import state  from '../state';
import { MUTATION_TYPES_SESSION } from './index';

export const mutations_session = {
    [MUTATION_TYPES_SESSION.MUTATION_INSERT_TOKEN] (state, token) {
        state.token = token;
        state.isAuthenticated = true;
        state.isLoading = false;

        // set local storage
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('token', token)
    },
    [MUTATION_TYPES_SESSION.MUTATION_DELETE_TOKEN] (_) {
        // state = { ...old };

        localStorage.setItem('isAuthenticated', false);
        localStorage.setItem('token', "");
    }
}
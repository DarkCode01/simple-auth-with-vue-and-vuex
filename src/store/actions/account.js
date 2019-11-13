import { createAccount } from '../../utils/api';
import { ACTION_TYPES_ACCOUNT } from '../actions/index';
import { MUTATION_TYPES_GENERAL, MUTATION_TYPES_SESSION } from '../mutations';

export const actions_account = {
    [ACTION_TYPES_ACCOUNT.ACTION_CREATE_NEW_ACCOUNT] ({ commit }, { nickname, email, password }) {
        commit(MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING, { isLoading: true });
        createAccount({ nickname, email, password })
            .then(res => {
                commit(MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING, { isLoading: false });
                commit(MUTATION_TYPES_SESSION.MUTATION_INSERT_TOKEN, res.data.access);
            })
            .catch(err => {
                commit(MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING, { isLoading: false });
                commit(MUTATION_TYPES_GENERAL.MUTATION_INSERT_NOTIFICATION, {
                    type: 'red',
                    message: err.response.data.message
                });
            });
    }
}
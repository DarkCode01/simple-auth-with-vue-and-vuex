import { getToken } from '../../utils/api';
import { ACTION_TYPES_SESSION } from './index';
import { MUTATION_TYPES_SESSION, MUTATION_TYPES_GENERAL } from '../mutations/index';

export const actions_session = {
    [ACTION_TYPES_SESSION.ACTION_GET_TOKEN] ({ commit }, { email, password }) {
        commit(MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING, { isLoading: true });
        getToken({ email, password })
            .then(res => {
                commit(MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING, { isLoading: false });
                commit(MUTATION_TYPES_SESSION.MUTATION_INSERT_TOKEN, res.data.access);
            })
            .catch(err => {
                commit(MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING, { isLoading: false });
                commit(MUTATION_TYPES_GENERAL.MUTATION_INSERT_NOTIFICATION, {
                    type: 'red',
                    message: 'EL nickname | email o contraseña son incorrectos, intentelo de nuevo.'
                });
            });
    },
    [ACTION_TYPES_SESSION.ACTION_LOG_OUT] ({ commit }) {
        commit(MUTATION_TYPES_SESSION.MUTATION_DELETE_TOKEN);
    }
}
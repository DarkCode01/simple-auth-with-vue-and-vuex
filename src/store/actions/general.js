import { ACTION_TYPES_GENERAL } from './index';
import { MUTATION_TYPES_GENERAL } from '../mutations/index';

export const actions_general = {
    [ACTION_TYPES_GENERAL.ACTION_IS_LOADING] ({ commit }, { isLoading }) {
        commit(MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING, { isLoading });
    },
    [ACTION_TYPES_GENERAL.ACTION_IS_NOTIFICATION] ({ commit }, { type, message }) {
        commit(MUTATION_TYPES_GENERAL.MUTATION_INSERT_NOTIFICATION, { type, message });
    }
}
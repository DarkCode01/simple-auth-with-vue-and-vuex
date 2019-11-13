import { MUTATION_TYPES_GENERAL } from './index';

export const mutations_general = {
    [MUTATION_TYPES_GENERAL.MUTATION_IS_LOADING] (state, { isLoading }) {
        state.isLoading = isLoading;
    },
    [MUTATION_TYPES_GENERAL.MUTATION_INSERT_NOTIFICATION] (state, { type, message }) {
        state.isNotification = true;
        state.notification.type = type;
        state.notification.message = message;
    }
}
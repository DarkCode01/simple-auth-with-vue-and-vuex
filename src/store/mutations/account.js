import { MUTATION_TYPES_ACCOUNT } from '../mutations/index';


export const mutations_account = {
    [MUTATION_TYPES_ACCOUNT.MUTATION_INSERT_ACCOUNT_INFO] (state, { id, nickname, email, gravatar }) {
        state.account.id = id;
        state.account.gravatar = gravatar;
        state.account.nickname = nickname;
        state.account.email = email;
    },
    [MUTATION_TYPES_ACCOUNT.MUTATION_LOGUT_ACCOUNT] (state) {
        state = {}

        localStorage.setItem('isAuthenticated', false);
        localStorage.setItem('token', null);
    }
}
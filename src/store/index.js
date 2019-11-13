import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';

// general actions and mutations
import { actions_general } from './actions/general';
import { mutations_general } from './mutations/general';

// Session ACTIONS, MUTATIONS
import { actions_session } from './actions/session';
import { mutations_session } from './mutations/session';

// Account actions, mutations
import { actions_account } from './actions/account';
import { mutations_account } from './mutations/account';

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations: {
    ...mutations_general,
    ...mutations_session,
    ...mutations_account
  },
  actions: {
    ...actions_general,
    ...actions_session,
    ...actions_account
  },
  getters: {
    isAuth: function () {
      return localStorage.getItem('isAuthenticated');
    }
  }
});

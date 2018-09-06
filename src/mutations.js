import * as types from './mutation-types';

export default {
  [types.AUTHENTICATE](state, payload) {
    state.user = payload;
  },
  [types.RESTORE_SESSION](state, payload) {
    state.user = payload;
  },
  [types.SIGNOUT](state) {
    state.user = null;
  },
  [types.ATTRIBUTES](state, payload) {
    const tempUser = state.user;
    tempUser.attributes = payload;
    state.user = tempUser;
  },
};

// import Vue from "vue";
import * as types from './mutation-types'

export default {
  [types.CHECK] (state, data) {
    state.authenticated = data
  },

  [types.LOGIN] (state) {

  },

  [types.LOGOUT] (state) {

  }
}

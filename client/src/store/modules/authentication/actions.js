import Vue from 'vue'
import store from '@/store'
import * as types from './mutation-types'

export const check = ({ commit }) => {
  if (localStorage.getItem('authenticated')) {
    commit(types.CHECK, localStorage.getItem('authenticated'))
  }
  store.dispatch('borrower/list')
  store.dispatch('creditObject/list')
  store.dispatch('document/list')
  store.dispatch('evaluator/list')
  store.dispatch('provider/list')
  store.dispatch('socialPayment/list')
  store.dispatch('user/list')
}

export const login = ({ commit }, data) => {
  Vue.$http.post('/api/users/auth', data)
    .then(res => {
      commit(types.LOGIN, res.data)
    })
    .catch(error => {
      commit(types.LOGIN, error)
    })
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT)
}

export default {
  check,
  login,
  logout
}

import * as types from './mutation-types'

export default {
  [types.LIST] (state, payload) {
    state.list = payload
  },

  [types.CREATE] (state, payload) {
    state.list.push(payload)
  },

  [types.UPDATE] (state, payload) {
    let index = state.list.findIndex(item => item._id === payload[1])
    state.list[index] = payload[0]
  },

  [types.REMOVE] (state, payload) {
    state.list = state.list.filter(item => item._id !== payload)
  }
}

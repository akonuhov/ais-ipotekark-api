import Vue from 'vue'
import router from '@/router'
import * as types from './mutation-types'
import Transformer from '@/transformers/BorrowerTransformer'

export const list = ({ commit }) => {
  Vue.$http.get('/api/borrowers')
    .then(res => {
      commit(types.LIST, Transformer.fetch(res.data))
    })
    .catch(error => {
      commit(types.LIST, error)
    })
}

export const create = ({ commit }, payload) => {
  Vue.$http.post('/api/borrowers', payload)
    .then(res => {
      commit(types.CREATE, Transformer.send(res.data))
      router.push('/borrower')
    })
    .catch(error => {
      commit(types.CREATE, error)
    })
}

export const update = ({ commit }, payload) => {
  Vue.$http.put('/api/borrowers/' + payload[1], payload[0])
    .then(res => {
      commit(types.UPDATE, payload)
      router.push('/borrower')
    })
    .catch(error => {
      commit(types.UPDATE, error)
    })
}

export const remove = ({ commit }, payload) => {
  Vue.$http.delete('/api/borrowers/' + payload)
    .then(res => {
      commit(types.REMOVE, payload)
    })
    .catch(error => {
      commit(types.REMOVE, error)
    })
}

export default {
  list,
  create,
  update,
  remove
}

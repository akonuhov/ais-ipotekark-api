import Vue from 'vue'
import router from '@/router'
import * as types from './mutation-types'
import Transformer from '@/transformers/CreditObjectTransformer'

export const list = ({ commit }) => {
  Vue.$http.get('/api/credit-object')
    .then(res => {
      commit(types.LIST, Transformer.fetch(res.data))
    })
    .catch(error => {
      commit(types.LIST, error)
    })
}

export const show = ({ commit }) => {

}

export const create = ({ commit }, payload) => {
  Vue.$http.post('/api/credit-object', payload)
    .then(res => {
      commit(types.CREATE, Transformer.send(res.data))
      router.push('/credit-object')
    })
    .catch(error => {
      commit(types.CREATE, error)
    })
}

export const update = ({ commit }, payload) => {
  Vue.$http.put('/api/credit-object/' + payload[1], payload[0])
    .then(res => {
      commit(types.UPDATE, payload)
      router.push('/credit-object')
    })
    .catch(error => {
      commit(types.UPDATE, error)
    })
}

export const remove = ({ commit }, payload) => {
  Vue.$http.delete('/api/credit-object/' + payload)
    .then(res => {
      commit(types.REMOVE, payload)
    })
    .catch(error => {
      commit(types.REMOVE, error)
    })
}

export default {
  list,
  show,
  create,
  update,
  remove
}

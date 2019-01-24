import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import auth from './modules/authentication'
import borrower from './modules/borrower'
import creditObject from './modules/credit-object'
import document from './modules/document'
import evaluator from './modules/evaluator'
import provider from './modules/provider'
import socialPayment from './modules/social-payment'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    borrower,
    creditObject,
    document,
    evaluator,
    provider,
    socialPayment,
    user
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

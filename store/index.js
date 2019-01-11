import axios from '~/plugins/axios'
import * as types from './mutation-types'

export const state = () => ({
  records: null
})

export const mutations = {
  [types.SET_RECORDS](state, payload) {
    state.records = payload
  }
}

export const actions = {
  async fetchRecords({ commit }) {
    const records = await axios.get('/')
    console.log('fetch')
    commit(types.SET_RECORDS, records)
  }
}

export const getters = {
  getRecodes(state) {
    return state.records
  }
}

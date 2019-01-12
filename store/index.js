import axios from 'axios'
import * as types from './mutation-types'

export const state = () => ({
  records: null,
  user_qr: '',
  available_qr: ''
})

export const mutations = {
  [types.FETCH_RECORDS](state, payload) {
    state.records = payload
  },
  [types.RESET_QR](state) {
    state.user_qr = state.available_qr = ''
  },
  [types.SET_AVAILABLE_QR](state, payload) {
    state.available_qr = payload
  },
  [types.SET_USER_QR](state, payload) {
    state.user_qr = payload
  }
}

export const actions = {
  async fetchRecords({ commit, state }) {
    if (state.records != null) return
    const records = await axios.get(process.env.API_URL)
    commit(types.FETCH_RECORDS, records.data)
  },
  resetQr({ commit }) {
    commit(types.RESET_QR)
  },
  setAvailableQr({ commit }, available_qr) {
    commit(types.SET_AVAILABLE_QR, available_qr)
  },
  setUserQr({ commit }, user_qr) {
    commit(types.SET_USER_QR, user_qr)
  }
}

export const getters = {
  getRecodes: state => state.records,
  getUserQr: state => state.user_qr,
  isUserQr: state => state.user_qr.length > 0,
  searchUserQr: state => {
    if (state.records == null) return false
    const check = state.records.findIndex(
      record => record['user_qr'] === state.user_qr
    )
    return check !== -1
  }
}

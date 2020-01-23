import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teamTurn: 'o',
    playerTurn: 'jojo',
    objGameState: {
      1: 'x',
      2: 'o',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: ''
    }
  },
  mutations: {
    CHANGE_STATE(state, payload) {
      state.objGameState[payload.location] = payload.team
    }
  },
  actions: {
    
  },
  modules: {
  }
})

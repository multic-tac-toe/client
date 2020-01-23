import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'

Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< 5a7b95338d813b6949e2ab6fd1e3e71a32eafefc
    state: {
        roomID: ''
    },
    mutations: {
        CREATE_ROOM(state, payload) {
            state.roomID = payload
        },
    },
    actions: {
        CREATE_ROOM({commit}, payload) {
            db.collection('rooms')
                .add({
                    'member': {
                        'username': ''
                    }
                })
                .then(result => {
                    commit('CREATE_ROOM', result.id)
                    console.log(result)
                })
        }
    },
    modules: {}
=======
  state: {
      allPlayerList : ['aaa', 'bbb','ccc','ddd','eee'],
      teamX : [],
      teamO : [],
      teamTurn : 'X',
      playerTurn : '',
      gameStat: {}


  },
  mutations: {
      SET_TEAM_X(state, payload){
          state.teamX = payload
      },
      SET_TEAM_O(state, payload){
          state.teamO = payload
      },
      SET_TEAM_TURN(state, payload){
          state.teamTurn = payload
      },
      SET_GAME_STAT(state, payload){
          const key = Object.keys(payload)
          state.gameStat[key] = payload[key]
      }

  },
  actions: {
      

  },
  modules: {
  },
  getters: {
      allPlayerList: state =>{
          return state.allPlayerList
      },
      teamX: state =>{
          return state.teamX
      },
      teamO: state =>{
          return state.teamO
      },
      teamTurn: state =>{
          return state.teamTurn
      },
      playerTurn: state =>{
          return state.playerTurn
      },
      gameStat: state=>{
          return state.gameStat
      }
  }
>>>>>>> jap
})

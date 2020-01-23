import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        roomName: '',
        roomList: '',
        allPlayerList : ['aaa', 'bbb','ccc','ddd','eee'],
        teamX : [],
        teamO : [],
        teamTurn : 'X',
        playerTurn : '',
        gameStat: {}
    },
    mutations: {
        CREATE_ROOM(state, payload) {
            state.roomName = payload
        },
        GET_ROOM_LIST(state, payload) {
            state.roomList = payload
        },
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
        CREATE_ROOM({commit}, payload) {
            let room = db.collection('rooms').doc(payload);
            room.get()
                .then(doc => {
                    if (!doc.exists) {
                        room.set({
                            'member': [],
                            'team-x': [],
                            'team-y': [],
                            'team-turn': '',
                            'player-turn': '',
                            'game-stat': {},
                            'game-ready': ''
                        }).then(result => {
                            commit('CREATE_ROOM', payload);
                            console.log('room successfully created');
                        })
                    } else {
                        console.log('room already exist')
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });
        },
        GET_ROOM_LIST({commit}, payload) {
            db.collection('rooms')
                .onSnapshot((querySnapshot) => {
                    commit('GET_ROOM_LIST', querySnapshot.docs)
                })
        }
    },
    modules: {},
    getters: {
        ROOM_LIST: state => {
            return state.roomList
        },
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
})

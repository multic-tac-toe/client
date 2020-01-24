import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'
import checkWinner from '../config/checkWinner'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        roomName: '',
        roomList: '',
        teamList: [],
        allPlayerList: [],
        teamX: [],
        teamO: [],
        teamTurn: 'X',
        playerTurn: '',
        gameStat: {}
    },
    mutations: {
        CREATE_ROOM(state, payload) {
            state.roomName = payload
        },
        GET_ROOM_LIST(state, payload) {
            state.roomList = payload
        },
        GET_TEAM_LIST(state, payload) {
            state.allPlayerList = payload
        },
        SET_TEAM_X(state, payload) {
            state.teamX = payload
        },
        SET_TEAM_O(state, payload) {
            state.teamO = payload
        },
        SET_TEAM_TURN(state, payload) {
            state.teamTurn = payload
        },
        SET_PLAYER_TURN(state, payload) {
            state.playerTurn = payload
        },
        SET_GAME_STAT(state, payload) {
            const key = Object.keys(payload)
            state.gameStat[key] = payload[key]
            console.log(checkWinner(state.gameStat), '((')
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
        },
        GET_TEAM_LIST({commit}, payload) {
            db.collection('rooms')
                .doc(payload)
                .onSnapshot((querySnapshot) => {
                    commit('GET_TEAM_LIST', querySnapshot.data().member)
                })
        },
        JOIN_ROOM({commit}, payload) {
            let room = db.collection('rooms').doc(payload.roomName);
            room.get()
                .then(doc => {
                    if (doc) {
                        room.update({
                            'member': payload.teamList
                        })
                    } else {
                        console.log("room not found")
                    }
                })
        },
        UPDATE_GAME({commit}, payload) {
            db.collection('rooms')
                .doc(this.state.roomName)
                .update({
                    gameStat: this.state.gameStat, 
                    teamTurn: this.state.teamTurn, 
                    playerTurn: this.state.playerTurn
                })
                .then(_ => {
                    console.log('Success')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    modules: {},
    getters: {
        ROOM_LIST: state => {
            return state.roomList
        },
        allPlayerList: state => {
            return state.allPlayerList
        },
        teamX: state => {
            return state.teamX
        },
        teamO: state => {
            return state.teamO
        },
        teamTurn: state => {
            return state.teamTurn
        },
        playerTurn: state => {
            return state.playerTurn
        },
        gameStat: state => {
            return state.gameStat
        }
    }
})

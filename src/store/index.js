import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'
import checkWinner from '../config/checkWinner'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        roomName: '',
        roomList: '',
        allPlayerList: [],
        teamX: [],
        teamO: [],
        teamTurn: '',
        playerTurn: '',
        // allPlayerList: ['aaa','bbb','ccc','ddd','eee','fff'],
        // teamX: ['aaa','bbb','ccc'],
        // teamO: ['ddd','eee','fff'],
        // teamTurn: 'X',
        // playerTurn: 'aaa',
        gameStat: {},
        gameReady: false,
        // timeOut: new Date().setSeconds( new Date().getSeconds() + 20),
        timeOut: new Date('January 24, 2020 15:07:00'),
        timeOutInterval: 10,
        winner: ''
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
        },
        SET_LAST_ENTERED_TIME(state, payload) {
            state.lastEnteredTime = payload
        },
        SET_TIMEOUT(state, payload) {
            state.timeOut = payload
        },
        GET_GAME_DATA(state, payload){
            console.log(payload)
            state.teamX = payload.teamX;
            state.teamO = payload.teamO;
            state.teamTurn = payload.teamTurn;
            state.playerTurn = payload.playerTurn;
            state.timeOut = payload.timedOut;
            state.gameReady = payload.gameReady;
        },
        setWinner(state, payload){
            state.winner = payload
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
                            'teamX': [],
                            'teamO': [],
                            'teamTurn': '',
                            'playerTurn': '',
                            'gameStat': {},
                            'gameReady': false,
                            'timeOut': ''
                        }).then(result => {
                            commit('CREATE_ROOM', payload);
                            console.log('room successfully created');
                        });
                        localStorage.setItem('admin', payload)
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
                        });
                        localStorage.setItem('currentRoom', payload.roomName)
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
                    playerTurn: this.state.playerTurn,
                    timeOut: new Date().setSeconds(new Date().getSeconds() + 10)
                })
                .then(_ => {
                    console.log('Success')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        UPDATE_GAME_SPEC({commit}, payload) {
            db.collection('rooms')
                .doc(localStorage.getItem('currentRoom'))
                .update({
                    'teamX': this.state.teamX,
                    'teamO': this.state.teamO,
                    'teamTurn': this.state.teamTurn,
                    'playerTurn': this.state.playerTurn,
                    'gameStat': {},
                    'gameReady': true,
                    'timeOut': new Date().setSeconds( new Date().getSeconds() + 10)
                })
                .then(_ => {
                    console.log('Success')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        GET_GAME_DATA({commit}, payload){
            db.collection('rooms')
                .doc(localStorage.getItem('currentRoom'))
                .onSnapshot((querySnapshot) => {
                    commit('GET_GAME_DATA', querySnapshot.data())
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
        },
        lastEnteredTime: state => {
            return state.lastEnteredTime
        },
        timeOut: state => {
            return state.timeOut
        },
        timeOutInterval: state => {
            return state.timeOutInterval
        },
        gameReady: state => {
            return state.gameReady
        },
        winner: state => {
            return state.winner
        }
    }
})

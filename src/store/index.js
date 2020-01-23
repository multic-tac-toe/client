import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        roomName: '',
        roomList: ''
    },
    mutations: {
        CREATE_ROOM(state, payload) {
            state.roomName = payload
        },
        GET_ROOM_LIST(state, payload) {
            state.roomList = payload
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
        }
    }
})

import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'

Vue.use(Vuex);

export default new Vuex.Store({
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
})

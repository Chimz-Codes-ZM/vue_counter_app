import { createStore } from "vuex";


const store=createStore({
    state: {
        count: 0
    },

    getters: {
        counter(state){
            return state.count
        }
    },

    actions: {
        increment({commit}){
            commit('increment')
        },

        decrement({commit}){
            commit('decrement')
        },

        reset({commit}){
            commit('reset')
        },

        setValue({ commit }, payload){
            commit("setValue", payload)
        }
    },

    mutations: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        reset(state){
            state.count = 0
        },
        setValue(state, payload) {
            state.count = payload;
        }
    }
})

export default store
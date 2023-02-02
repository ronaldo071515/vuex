import { createStore } from 'vuex'
import getRandomInt from '@/helpers/getRandomInt';

export default createStore({

    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {/* las mutations siempre son sicronas */
        increment( state ) {
            state.count ++
            state.lastMutation = 'increment'
        },
        incrementBy( state, val ) {
            state.count +=val
            state.lastMutation = 'incrementBy'
            state.lastRandomInt = val
        },
        setLoading( state, loading) {
            state.isLoading = loading
            state.lastMutation = 'set loading'
        }
    },
    actions: {/* las actions pueden ser asincronas */
        async incrementRandomInt({ commit }) {
            commit('setLoading', true)

            const randomInt = await getRandomInt()

            commit('incrementBy', randomInt)
            commit('setLoading', false)
        }
    },
    getters: {
        squareCount( state ) {
            return state.count * state.count
        }
    }

})
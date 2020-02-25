import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, title: 'Go to the mall', description: 'Buy food and decore preparing for new year', deadline: '2020/02/11', status: 1 },
            { id: 2, title: 'Go to the gym', description: 'Training for 6 packs', deadline: '2020/06/24', status: 2 },
            { id: 3, title: 'Finding some girls', description: 'Have someone to go to the movie theater', deadline: '2020/01/02', status: 3 }
        ]
    },

    getters,

    actions,

    mutations: {
        createTask: (state, todo) => state.todos.push(todo),

        updateTask: (state, { index, item }) => state.todos[index] = item,

        deleteTask: (state, index) => state.todos.splice(index, 1)
    }
})
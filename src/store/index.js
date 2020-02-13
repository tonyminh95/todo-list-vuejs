import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { formattedDate } from '@/utils/index'
import { TODO_STATUS } from './instants'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, title: 'Go to the mall', description: 'Buy food and decore preparing for new year', deadline: '2020/02/11', status: '1' },
            { id: 2, title: 'Go to the gym', description: 'Training for 6 packs', deadline: '2020/06/24', status: '2' },
            { id: 3, title: 'Finding some girls', description: 'Have someone to go to the movie theater', deadline: '2020/01/02', status: '3' }
        ]
    },

    getters,

    actions: {
        createTask: ({state, commit}, title) => {
            const id = Math.max.apply(Math, state.todos.map(todo => todo.id)) + 1
            const deadline = formattedDate(new Date())

            commit('createTask', { id, title, description: null, deadline, status: TODO_STATUS.STATUS_OPEN })
        },

        deleteTask: ({state, commit}, taskId) => {
            const index = state.todos.findIndex(todo => todo.id === taskId);

            commit('deleteTask', index)
        }
    },

    mutations: {
        createTask: (state, todo) => state.todos.push(todo),

        deleteTask: (state, index) => state.todos.splice(index, 1)
    }
})
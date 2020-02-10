import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, title: 'Go to the mall', description: 'Buy food and decore preparing for new year', deadline: '12/02/2020', status: '1' },
            { id: 2, title: 'Go to the gym', description: 'Training for 6 packs', deadline: '12/02/2020', status: '2' },
            { id: 3, title: 'Finding some girls', description: 'Have someone to go to the movie theater', deadline: '12/02/2020', status: '3' }
        ]
    },

    getters,

    actions: {
        createNewTodo (context, { title, description, deadline }) {
            const id = Math.max.apply(Math, context.state.todos.map(todo => todo.id)) + 1

            context.commit('addTodo', { id: id, title, description, deadline, status: '1' })
        }
    },

    mutations: {
        addTodo (state, todo) {
            state.todos.push(todo)
        },

        // appendPostToThread (state, {postId, threadId}) {
        //     const thread = state.threads[threadId]

        //     Vue.set(thread.posts, postId, postId)
        // },

        // appendPostToUser (state, {postId, userId}) {
        //     const user = state.users[userId]

        //     Vue.set(user.posts, postId, postId)
        // }
    }
})
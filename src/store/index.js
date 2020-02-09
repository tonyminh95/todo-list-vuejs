import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, title: 'running', description: 'run for healthy', deadline: '12/02/2020', status: '1' },
            { id: 2, title: 'eat', description: 'eat for life', deadline: '12/02/2020', status: '1' },
            { id: 3, title: 'drink', description: 'drink for life', deadline: '12/02/2020', status: '3' }
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
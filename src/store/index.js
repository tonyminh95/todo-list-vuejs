import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, title: 'running', description: 'run for healthy', deadline: '12/02/2020', status: '1' },
            { id: 2, title: 'eat', description: 'eat for life', deadline: '12/02/2020', status: '2' },
            { id: 3, title: 'drink', description: 'drink for life', deadline: '12/02/2020', status: '3' }
        ]
    },

    getters: {
        // getLastTodoId (state) {
            // return state.todos.pop().id
        // }
    },

    actions: {
        createNewTodo (context, { title, description, deadline }) {
            const id = context.state.todos[context.state.todos.length - 1].id + 1

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
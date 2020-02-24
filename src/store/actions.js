import { formattedDate } from "@/utils";

export default {
    createTask: ({state, commit}, title) => {
        const id = Math.max.apply(Math, state.todos.map(todo => todo.id)) + 1
        const deadline = formattedDate(new Date())

        commit('createTask', { id, title, description: null, deadline, status: 1 })
    },

    deleteTask: ({state, commit}, taskId) => {
        const index = state.todos.findIndex(todo => todo.id == taskId);

        commit('deleteTask', index)
    }
}
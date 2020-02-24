import { formattedDate } from "@/utils";

export default {
    createTask: ({state, commit}, title) => {
        const id = Math.max.apply(Math, state.todos.map(todo => todo.id)) + 1
        const deadline = formattedDate(new Date())

        commit('createTask', { id, title, description: null, deadline, status: 1 })
    },

    editTask ({state, commit}, item) {
        const index = state.todos.findIndex(todo => todo.id == item.id);

        alert(moment("05/22/2012", 'MM/DD/YYYY',true).isValid());

        console.log(item.deadline)
        item.deadline = formattedDate(item.deadline)

        console.log(item.deadline)

        commit('updateTask', { index, item })
    },

    deleteTask: ({state, commit}, taskId) => {
        const index = state.todos.findIndex(todo => todo.id == taskId);

        commit('deleteTask', index)
    }
}
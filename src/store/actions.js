import { formattedDate } from "@/utils";
import moment from "moment"

export default {
    createTask: ({state, commit}, title) => {
        const id = Math.max.apply(Math, state.todos.map(todo => todo.id)) + 1
        const deadline = formattedDate(new Date())

        commit('createTask', { id, title, description: null, deadline, status: 1 })
    },

    editTask ({state, commit}, item) {
        const index = state.todos.findIndex(todo => todo.id == item.id);

        if (moment(item.deadline, 'yyyy/MM/dd', true).isValid()) {
            item.deadline = formattedDate(item.deadline)
        }

        commit('updateTask', { index, item })
    },

    deleteTask: ({state, commit}, taskId) => {
        const index = state.todos.findIndex(todo => todo.id == taskId);

        commit('deleteTask', index)
    },







    fetchTasks: ({state, commit}) => commit('setTasks', state.todos),

    filterTasksAll: ({state, commit}) => commit('setTasks', state.todos),

    filterTasksToday: ({state, commit}) => {
        const tasks = state.todos.filter(todo => todo.deadline == formattedDate(new Date))

        commit('setTasks', tasks)
    },

    filterTasksByStatus: ({state, commit}, status) => {
        const tasks = status == 0 ? state.todos : state.todos.filter(todo => todo.status === status)

        commit('setTasks', tasks)
    },

    sortTasksByDeadline: () => {
        const tasks = state.todos.map
    }
}
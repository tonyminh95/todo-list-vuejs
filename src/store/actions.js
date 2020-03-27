import { formattedDate } from "@/utils";
import moment from "moment"

export default {
    createTask: ({state, commit}, {title, description, deadline, status}) => {
        return new Promise((resolve) => {
            const id = Math.max.apply(Math, state.tasks.map(task => task.id)) + 1
            const formatedDeadline = formattedDate(deadline)

            commit('createTask', { id, title, description, deadline: formatedDeadline, status })

            resolve()
        })
    },

    updateTask ({state, commit}) {
        const item = state.updateTask
        const index = state.todos.findIndex(todo => todo.id == item.id);

        if (moment(item.deadline, 'yyyy/MM/dd', true).isValid()) {
            item.deadline = formattedDate(item.deadline)
        }

        commit('updateTask', { index, item })
    },

    deleteTask: ({state, commit}, targetObjectId) => {
        const index = state.tasks.findIndex(task => task.id == targetObjectId);

        commit('deleteTask', index)
    }
}
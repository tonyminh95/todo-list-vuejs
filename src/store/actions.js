import { formattedDate } from "@/utils";
// import moment from "moment"

export default {
    createTask: ({state, commit}, {title, description, deadline, status}) => {
        return new Promise((resolve) => {
            const id = Math.max.apply(Math, state.tasks.map(task => task.id)) + 1
            const formatedDeadline = formattedDate(deadline)

            commit('createTask', { id, title, description, formatedDeadline, status })

            resolve()
        })
    },

    // updateTask ({state, commit}) {
    //     const item = state.updateTask
    //     const index = state.todos.findIndex(todo => todo.id == item.id);

    //     if (moment(item.deadline, 'yyyy/MM/dd', true).isValid()) {
    //         item.deadline = formattedDate(item.deadline)
    //     }

    //     commit('updateTask', { index, item })
    // },

    deleteTask: ({state, commit}, targetObjectId) => {
        const index = state.tasks.findIndex(task => task.id == targetObjectId);

        commit('deleteTask', index)
    },

    // fetchTasks: ({state, commit}) => commit('setTasks', state.todos),

    // filterTasksAll: ({state, commit}) => commit('setTasks', state.todos),

    // filterTasksToday: ({state, commit}) => {
    //     const tasks = [...state.todos].filter(todo => todo.deadline === formattedDate(new Date))

    //     commit('setTasks', tasks)
    // },

    // filterTasksByStatus: ({state, commit}, status) => {
    //     const tasks = [...state.todos].filter(todo => todo.status === status + 1)

    //     commit('setTasks', tasks)
    // },

    // sortTasksByDeadline: ({state, commit}, sortType) => {
    //     const tasks = [...state.todos].sort((pre, next) =>
    //     (sortType == 'asc')
    //         ?
    //         new Date(next.deadline) - new Date(pre.deadline)
    //         :
    //         new Date(pre.deadline) - new Date(next.deadline)

    //     )

    //     commit('setTasks', tasks)
    // }
}
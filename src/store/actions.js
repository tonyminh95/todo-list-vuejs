export default {
    createTask: ({state, commit}, task) => {
        return new Promise((resolve) => {
            const id = Math.max.apply(Math, state.tasks.map(task => task.id)) + 1

            commit('createTask', { id, ...task })

            resolve()
        })
    },

    editTask ({state, commit}, targetTask) {
        return new Promise((resolve) => {
            const index = state.tasks.findIndex(task => task.id == targetTask.id)

            commit('editTask', { index, targetTask })

            resolve()
        })
    },

    deleteTask: ({state, commit}, targetId) => {
        return new Promise((resolve) => {
            const index = state.tasks.findIndex(task => task.id == targetId);

            commit('deleteTask', index)

            resolve()
        })
    }
}
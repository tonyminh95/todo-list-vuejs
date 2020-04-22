export default {
    createTask: (state, task) => state.tasks.push(task),

    editTask: (state, { index, targetTask }) => state.tasks[index] = targetTask,

    deleteTask: (state, index) => state.tasks.splice(index, 1)
}
export default {
    createTask: (state, task) => state.tasks.push(task),

    // updateTask: (state, { index, item }) => state.todos[index] = item,

    deleteTask: (state, index) => state.tasks.splice(index, 1),

    // setTasks: (state, todos) => state.tasks = todos
}
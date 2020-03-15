export default {
    // createTask: (state, todo) => state.todos.push(todo),

    // updateTask: (state, { index, item }) => state.todos[index] = item,

    deleteTask: (state, index) => state.tasks.splice(index, 1),

    // setTasks: (state, todos) => state.tasks = todos
}
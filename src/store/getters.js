import { formattedDate } from "../utils";

// import { countObjectProperties } from '@/utils'

// const countQuantitiesByStatus = status => state  => countObjectProperties(state.todos.filter(todo => todo.status == status))

// const status = {
//     OPEN: 0,
//     IN_PROGRESS: 1,
//     CLOSED: 2
// }

export default {
    // getOpenStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_OPEN),

    // getInProgressStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_INPROGRESS),

    // getClosedStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_CLOSED),

    // getTodosFilterByStatus: (state, status) => state.todos.filter(todo => todo.status == status)

    // getTodayTask: state => state.todos.filter(todo => todo.deadline == formattedDate(new Date())),

    // getTaskByStatus: status => state => ,

    // getTaskSortByDeadline: state => sortType => state.todos.sort((pre, next) => (sortType === 'asc') ? new Date(next.deadline) - new Date(pre.deadline) : Date(next.deadline) - new Date(pre.deadline)),







    // countTodayTask: state => state.todos.filter(todo => todo.deadline == formattedDate(new Date())).length,

    fetchTasks: state => state.tasks,

    fetchTodayTasks: state => state.tasks.filter(task => task.deadline == formattedDate(new Date())),

    getTodayTasks: state => state.tasks.filter(task => task.deadline == formattedDate(new Date())).length,







    // getAllTasks: state => state.tasks,

    // getTodayTasks: state => state.tasks.filter(task => task.deadline == formattedDate(new Date())),

    // getOpenTasks: state => state.tasks.filter(task => task.status == status.OPEN),

    // getInprogressTasks: state => state.tasks.filter(task => task.status == status.IN_PROGRESS),

    // getClosedTasks: state => state.tasks.filter(task => task.status == status.CLOSED)





    getTaskById: state => id => ({...state.tasks.find(task => task.id == id)})
}
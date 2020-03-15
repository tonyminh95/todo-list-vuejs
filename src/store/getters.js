import { formattedDate } from "../utils";

// import { countObjectProperties } from '@/utils'

// const countQuantitiesByStatus = status => state  => countObjectProperties(state.todos.filter(todo => todo.status == status))

export default {
    // getOpenStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_OPEN),

    // getInProgressStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_INPROGRESS),

    // getClosedStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_CLOSED),

    // getTodosFilterByStatus: (state, status) => state.todos.filter(todo => todo.status == status)

    getTodayTask: state => state.todos.filter(todo => todo.deadline == formattedDate(new Date())),

    // getTaskByStatus: status => state => ,

    getTaskSortByDeadline: state => sortType => state.todos.sort((pre, next) => (sortType === 'asc') ? new Date(next.deadline) - new Date(pre.deadline) : Date(next.deadline) - new Date(pre.deadline)),







    countTodayTask: state => state.todos.filter(todo => todo.deadline == formattedDate(new Date())).length,

    getStatusLabel () {
        return (status) => {
            return (status == 1) ? 'open' : (status == 2) ? 'is progress' : (status == 3) ? 'closed' : null
        }
    },

    getStatusClass () {
        return (status) => {
            return 'status ' + ((status == 1) ? 'status-open' : (status == 2) ? 'status-isprogress' : (status == 3) ? 'status-closed' : null)
        }
    },




    getAllTask: state => state.todos.filter(todo => todo),





    fetchTask: state => state.tasks
}
import { formattedDate } from "../utils";

// import { countObjectProperties } from '@/utils'
import { TODO_STATUS } from './instants'

// const countQuantitiesByStatus = status => state  => countObjectProperties(state.todos.filter(todo => todo.status == status))

export default {
    // getOpenStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_OPEN),

    // getInProgressStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_INPROGRESS),

    // getClosedStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_CLOSED),

    // getTodosFilterByStatus: (state, status) => state.todos.filter(todo => todo.status == status)

    getTodayTask: state => state.todos.filter(todo => todo.deadline == formattedDate(new Date())),

    getCountTaskToday: state => state.todos.filter(todo => todo.deadline == formattedDate(new Date())).length,

    getOpenTask: state => state.todos.filter(todo => todo.status == TODO_STATUS.STATUS_OPEN),

    // getTaskByStatus: status => state => ,

    getTaskSortByDeadline: state => sortType => state.todos.sort((pre, next) => (sortType === 'asc') ? new Date(next.deadline) - new Date(pre.deadline) : Date(next.deadline) - new Date(pre.deadline))
}
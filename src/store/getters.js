import { countObjectProperties } from '@/utils'
import { TODO_STATUS } from './instants'

const countQuantitiesByStatus = status => state  => countObjectProperties(state.todos.filter(todo => todo.status == status))

export default {
    getOpenStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_OPEN),

    getInProgressStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_INPROGRESS),

    getClosedStatus: countQuantitiesByStatus(TODO_STATUS.STATUS_CLOSED),

    getTodosFilterByStatus: (state, status) => state.todos.filter(todo => todo.status == status)
}
import Vue from 'vue'
import Router from 'vue-router'
import TaskPage from '@/pages/TaskPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/tasks',
            name: 'task',
            component: TaskPage
        }
    ]
})
import Vue from 'vue';
import Router from 'vue-router';
import TaskList from '@/components/TaskList';
import DatatableTest from '@/pages/DatatableTest';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'task',
            component: TaskList
        },
        {
            path: '/datatable',
            name: 'datatable',
            component: DatatableTest
        }
    ]
})
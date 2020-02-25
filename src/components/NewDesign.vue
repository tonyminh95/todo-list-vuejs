<template>
    <div class="container">
        <input @keyup.enter="createTask" class="title" placeholder="What do you want to do?" autofocus v-model="title">

        <div class="mt-5"><u>Today task</u> <span class="today-task">{{ countTodayTask }}</span></div>

        <filter-dropdown></filter-dropdown>

        <ul class="mt-5">
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>

        <table class="table table-bordered mt-3" width="100%">
            <thead>
                <tr>
                    <td width="20%">Title</td>
                    <td width="40%">Description</td>
                    <td width="15%">Deadline</td>
                    <td width="15%">Status</td>
                    <td width="10%" colspan="2"></td>
                </tr>
            </thead>
            <tbody>
                <task-row
                    v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"
                    @editRow="editTodo = todo, showTaskEditModal = true"
                    @deleteRow="deleteTodoId = todo.id, showTaskDeleteModal = true"
                ></task-row>
            </tbody>
        </table>

        <task-edit
            v-if="showTaskEditModal"
            :todo="editTodo"
            @cancelEdit="showTaskEditModal = false"
            @edit="editTask($event), showTaskEditModal = false"
        ></task-edit>

        <task-delete
            v-if="showTaskDeleteModal"
            @cancelDelete="showTaskDeleteModal = false"
            @delete="deleteTask(deleteTodoId), showTaskDeleteModal = false"
        ></task-delete>
    </div>
</template>

<script>
    import TaskRow from './TaskRow.vue'
    import TaskDelete from './modals/TaskDelete'
    import TaskEdit from './modals/TaskEdit'
    import FilterDropdown from './dropdowns/FilterDropdown'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'NewDesign',

        components: {
            TaskRow,
            TaskEdit,
            TaskDelete,
            FilterDropdown
        },

        data () {
            return {
                title: null,
                showTaskEditModal: null,
                editTodo: null,
                showTaskDeleteModal: null,
                deleteTodoId: null
            }
        },

        computed: {
            ...mapGetters({
                countTodayTask: 'countTodayTask'
            }),

            todos () {
                return this.$store.state.todos
            }
        },

        methods: {
            ...mapActions({
                editTask: 'editTask',
                deleteTask: 'deleteTask'
            }),

            createTask () {
                if (this.title) {
                    this.$store.dispatch('createTask', this.title)
                    this.title = null
                }
            }
        }
    }
</script>

<style>
    table thead {
        color: gray;
    }

    table tbody td:first-child {
        word-break: break-all;
    }

    .title {
        outline: none;
        border: none;
        font-weight: 100;
        width: 100%;
        font-size: 25px;
        background-color: transparent;
    }

    ::placeholder {
        color: rgb(180, 180, 180);
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgb(180, 180, 180);
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: rgb(180, 180, 180);
    }

    a:hover {
        cursor: pointer;
    }

    .today-task {
        color: white;
        background-color: #ff2b40;
        border-radius: 100px;
        width: 25px;
        height: 25px;
        display: inline-block;
        text-align: center;
        margin-left: 5px;
    }
</style>
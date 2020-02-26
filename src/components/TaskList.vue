<template>
    <div class="container">
        <input @keyup.enter="createTask" class="title" placeholder="What do you want to do?" autofocus v-model="title">

        <task-all></task-all>
        <task-today class="ml-5"></task-today>
        <filter-dropdown class="d-inline-block ml-5 mt-5"></filter-dropdown>
        <sort-dropdown class="d-inline-block ml-5"></sort-dropdown>

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
                    v-for="task in tasks"
                    :key="task.id"
                    :todo="task"
                    @editRow="$store.state.updateTask = {...task}, showTaskEditModal = true"
                    @deleteRow="$store.state.deleteTask = task, showTaskDeleteModal = true"
                ></task-row>
            </tbody>
        </table>

        <task-edit
            v-if="showTaskEditModal"
            @cancelEdit="showTaskEditModal = false"
            @edit="updateTask(), showTaskEditModal = false"
        ></task-edit>

        <task-delete
            v-if="showTaskDeleteModal"
            @cancelDelete="showTaskDeleteModal = false"
            @delete="deleteTask(), showTaskDeleteModal = false"
        ></task-delete>
    </div>
</template>

<script>
    import TaskRow from './TaskRow'
    import TaskAll from './TaskAll'
    import TaskToday from './TaskToday'
    import FilterDropdown from './dropdowns/FilterDropdown'
    import SortDropdown from './dropdowns/SortDropdown'
    import TaskEdit from './modals/TaskEdit'
    import TaskDelete from './modals/TaskDelete'
    import { mapActions } from 'vuex'

    export default {
        name: 'NewDesign',

        components: {
            TaskRow,
            TaskAll,
            TaskToday,
            FilterDropdown,
            SortDropdown,
            TaskEdit,
            TaskDelete
        },

        data () {
            return {
                title: null,
                showTaskEditModal: null,
                showTaskDeleteModal: null,
            }
        },

        computed: {
            tasks () {
                return this.$store.state.tasks
            }
        },

        methods: {
            ...mapActions(['updateTask', 'deleteTask']),

            createTask () {
                if (this.title) {
                    this.$store.dispatch('createTask', this.title)
                    this.title = null
                }
            }
        },

        created () {
            this.$store.dispatch('fetchTasks')
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
<template>
    <div class="container">
        <input @keyup.enter="createTask" class="title text-center" placeholder="What do you want to do?" autofocus v-model="title">

        <!-- <div class="row mt-3">
            <table class="col-6 offset-3">
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td>
                            <div>
                                <div class="d-inline-block rounded-circle status" :class="todo.status | status"></div>
                                {{ todo.title }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> -->


<!-- <div class="mt-5 row text-left">
            <div class="col-2 offset-3">
                <a @click.prevent="todayTask()"><u>Today task</u><div class="today-task">{{ countTodayTask() }}</div></a>
            </div>
            <div class="col-2">
                <a v-b-modal.filter-modal><u>Filter by status</u></a>
            </div>
            <div class="col-2">
                <a v-b-modal.sort-modal><u>Sort by date</u></a>
            </div>
        </div> -->

        <!-- <div class="row mt-3">
            <table class="col-8 offset-2">
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td width="30%">{{ todo.title }}</td>
                        <td width="50%">{{ todo.description }}</td>
                        <td width="5%">{{ todo.deadline | moment("DD/MM/YYYY") }}</td>
                        <td width="5%">
                            <div class="status" :class="statusColor(todo.status)">{{ statusLabel(todo.status) }}</div>
                        </td>
                        <td width="5%"><a v-b-modal.edit-modal @click.prevent="openEditModal(todo)"><fa-icon :icon="['far', 'edit']"></fa-icon></a></td>
                        <td width="5%"><a @click.prevent="deleteTask(todo.id)">x</a></td>
                    </tr>
                </tbody>
            </table>
        </div> -->

        <!-- modal -->
        <b-modal id="edit-modal" hide-footer hide-header>
            <div class="row">
                <div class="col-10 offset-2">
                    <input class="title" placeholder="What do you want to do?" autofocus v-model="updateItem.title">
                </div>
            </div>
            <div class="row mt-3 text-center">
                <div class="col-2"><fa-icon :icon="['far', 'file']"></fa-icon></div>
                <div class="col-10 offset-2">
                    <textarea class="description" placeholder="description" v-model="updateItem.description"></textarea>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-2"><fa-icon :icon="['far', 'clock']"></fa-icon></div>
                <div class="col-10 offset-2">
                    <vue-datepicker class="date-picker" placeholder="deadline" style="border: none !important" v-model="updateItem.deadline"></vue-datepicker>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-2"><fa-icon :icon="['fas', 'circle-notch']"></fa-icon></div>
                <div class="col-10"></div>
            </div>
        </b-modal>

        <!-- <b-modal id="filter-modal" hide-footer hide-header>
            <div class="row">
                <div class="col-3">
                    <div class="none text-center rounded" @click.prevent="getTaskByStatus()">none</div>
                </div>
                <div class="col-3">
                    <div class="open text-center rounded" @click.prevent="getOpenTask">open</div>
                </div>
                <div class="col-3">
                    <div class="inprogress text-center rounded" @click.prevent="getTaskByStatus(2)">in progress</div>
                </div>
                <div class="col-3">
                    <div class="closed text-center rounded" @click.prevent="getTaskByStatus(3)">closed</div>
                </div>
            </div>
        </b-modal>

        <b-modal id="sort-modal" hide-footer hide-header>
            <div class="row">
                <div class="col-6">
                    <div class="none text-center rounded" @click.prevent="sortByDeadline('asc')">asc</div>
                </div>
                <div class="col-6">
                    <div class="open text-center rounded" @click.prevent="sortByDeadline('desc')">desc</div>
                </div>
            </div>
        </b-modal> -->
    </div>
</template>

<script>
    import { TODO_STATUS } from '@/store/instants'

    export default {
        name: 'TodosPage',

        data: () => {
            return {
                todos: [],
                updateItem: {
                    title: null,
                    description: null,
                    deadline: null,
                    status: null
                },
                title: null
            }
        },

        methods: {
            // crud
            createTask () {
                this.$store.dispatch('createTask', this.title)
            },

            openEditModal (todo) {
                this.updateItem = todo
            },

            deleteTask (taskId) {
                this.$store.dispatch('deleteTask', taskId)
            },










            // today task
            todayTask () {
                return this.$store.getters.getTodayTask
            },

            countTodayTask () {
                return this.$store.getters.getCountTaskToday
            },

            // filter
            getOpenTask () {
                return this.$store.getters.getOpenTask
            },

            getTaskByStatus (status) {
                this.$bvModal.hide('filter-modal')
                return this.$store.getters.getTaskByStatus(status)
            },

            getTaskSortByDeadline (sortType) {
                this.$bvModal.hide('sort-modal')
                return this.$store.getters.getTaskSortByDeadline(sortType)
            },

            statusColor: (status) => status == TODO_STATUS.STATUS_OPEN ? 'open' : (status == TODO_STATUS.STATUS_INPROGRESS ? 'inprogress' : (status == TODO_STATUS.STATUS_CLOSED ? 'closed' : '')),

            statusLabel: (status) => status == TODO_STATUS.STATUS_OPEN ? 'open' : (status == TODO_STATUS.STATUS_INPROGRESS ? 'in progress' : (status == TODO_STATUS.STATUS_CLOSED ? 'closed' : '')),
        },

        created () {
            this.todos = this.$store.state.todos
        }
    }
</script>

<style>
    .title {
        outline: none;
        border: none;
        font-family: 'open sans',arial,sans-serif;
        font-weight: 100;
        width: 100%;
        font-size: 25px;
        background-color: transparent;
    }

    .description {
        outline: none;
        border: none;
        font-family: 'open sans',arial,sans-serif;
        font-weight: 100;
        width: 100%;
        font-size: 18px;
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

    .status {
        width: 10px;
        height: 10px;
        margin-right: 10px;
    }

    .none {
        background-color: #a6d4fc;
    }

    .open {
        background-color: #a2e0d3;
    }

    .inprogress {
        background-color: #ffe1aa;
    }

    .closed {
        background-color: #faa7af;
    }

    table {
        border-collapse:separate;
        border-spacing: 0 10px;
        font-family: 'open sans', arial, sans-serif;
        width: 100%;
    }

    tbody tr td {
        padding: 16px;
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





    /* button */
    /* .button {
        font-family: 'open sans',arial,sans-serif;
        padding: 10px 15px;
        border-radius: 5px;
        background-position: center;
        transition: background 0.8s;
    }

    .btn-create {
        background-color: #c4e9fe;
        color: #2c2834;
    }

    .btn-create:hover {
        background: #a4deff radial-gradient(circle, transparent 1%, #a4deff 1%) center/15000%;
    }

    .btn-create:active {
        background-color: #c4e9fe;
        background-size: 100%;
        transition: background 0s;
    }

    .btn-edit {
        background-color: #feefd8;
        color: #2c2834;
    }

    .btn-edit:hover {
        background: #ffddab radial-gradient(circle, transparent 1%, #ffddab 1%) center/15000%;
    }

    .btn-edit:active {
        background-color: #feefd8;
        background-size: 100%;
        transition: background 0s;
    }

    .btn-delete {
        background-color: #ffddd9;
        color: #2c2834;
    }

    .btn-delete:hover {
        background: #f8b8b1 radial-gradient(circle, transparent 1%, #f8b8b1 1%) center/15000%;
    }

    .btn-delete:active {
        background-color: #ffddd9;
        background-size: 100%;
        transition: background 0s;
    } */

    /* .open {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #6de4da;
        display: inline-block;
        margin-right: 10px;
    } */

    /* .inprogress {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #ffd28e;
        display: inline-block;
        margin-right: 10px;
    }

    .closed {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #ffa89f;
        display: inline-block;
        margin-right: 10px;
    } */

    /* .ic-form {
        width: 22px !important;
        height: 22px !important;
        color: rgb(180, 180, 180);
    } */
</style>
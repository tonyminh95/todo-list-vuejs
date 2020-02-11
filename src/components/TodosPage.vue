<template>
    <div class="container">
        <input class="title text-center" placeholder="What do you want to do?" autofocus>

        <div class="mt-5 row text-left">
            <div class="col-2 offset-2">
                <a @click.prevent="todayTask()"><u>Today task</u><div class="today-task">{{ countTodayTask() }}</div></a>
            </div>
            <div class="col-2">
                <a v-b-modal.filter-modal><u>Filter by status</u></a>
            </div>
            <div class="col-2">
                <a v-b-modal.sort-modal><u>Sort by date</u></a>
            </div>
        </div>

        <div class="row mt-3">
            <table class="col-8 offset-2">
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td width="75%">{{ todo.title }}</td>
                        <td width="5%">{{ todo.deadline | moment("DD/MM/YYYY") }}</td>
                        <td width="5%">
                            <div class="status" :class="statusColor(todo.status)">{{ statusLabel(todo.status) }}</div>
                        </td>
                        <td width="5%"><a @click.prevent="deleteTask(todo.id)">x</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <b-modal id="filter-modal" hide-footer hide-header>
            <div class="row">
                <div class="col-3">
                    <div class="none text-center rounded" @click.prevent="filterByStatus(0)">none</div>
                </div>
                <div class="col-3">
                    <div class="open text-center rounded" @click.prevent="filterByStatus(1)">open</div>
                </div>
                <div class="col-3">
                    <div class="inprogress text-center rounded" @click.prevent="filterByStatus(2)">in progress</div>
                </div>
                <div class="col-3">
                    <div class="closed text-center rounded" @click.prevent="filterByStatus(3)">closed</div>
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
        </b-modal>
    </div>
</template>

<script>
    import store from '@/store/index'
    import { TODO_STATUS } from '@/store/instants'

    export default {
        name: 'TodosPage',

        data: () => {
            return {
                todos: []
                // todo: {
                //     title: null,
                //     description: null,
                //     deadline: null
                // }
            }
        },

        // computed: {
        //     // todos: () => store.state.todos,

        //     openStatus: () => store.getters.getOpenStatus,

        //     inProgressStatus: () => store.getters.getInProgressStatus,

        //     closedStatus: () => store.getters.getClosedStatus
        // },

        methods: {
            // onSubmit () {
            //     store.dispatch('createNewTodo', this.todo)
            // },

            filterByStatus (filter) {
                this.todos = (filter == 0) ? store.state.todos : store.state.todos.filter(element => element.status == filter)
                this.$bvModal.hide('filter-modal')
            },

            sortByDeadline (sort) {
                if (sort === 'asc') {
                    this.todos = store.state.todos.sort((pre, next) => new Date(next.deadline) - new Date(pre.deadline))
                } else if (sort === 'desc') {
                    this.todos = store.state.todos.sort((pre, next) => new Date(pre.deadline) - new Date(next.deadline))
                }
                this.$bvModal.hide('sort-modal')
            },

            statusColor: (status) => status == TODO_STATUS.STATUS_OPEN ? 'open' : (status == TODO_STATUS.STATUS_INPROGRESS ? 'inprogress' : (status == TODO_STATUS.STATUS_CLOSED ? 'closed' : '')),

            statusLabel: (status) => status == TODO_STATUS.STATUS_OPEN ? 'open' : (status == TODO_STATUS.STATUS_INPROGRESS ? 'in progress' : (status == TODO_STATUS.STATUS_CLOSED ? 'closed' : '')),

            countTodayTask() {
                const todayTask = store.state.todos.filter(todo => {
                    const today = new Date()

                    return todo.deadline == today.getFullYear() + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0')
                })

                return todayTask.length
            },

            todayTask() {
                this.todos = store.state.todos.filter(todo => {
                    const today = new Date()

                    return todo.deadline == today.getFullYear() + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0')
                })
            },

            deleteTask(id) {
                const index = this.todos.findIndex(todo => todo.id === id);

                this.todos = store.state.todos.slice(0, index)

                console.log(index, this.todos, store.state.todos)
            }
        },

        created () {
            this.todos = store.state.todos
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

    .title:focus {
        border-color: black;
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
        width: 120px;
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
    }

    .none {
        background-color: #d0e5f8;
    }

    .open {
        background-color: #d0e7e2;
    }

    .inprogress {
        background-color: #faedd4;
    }

    .closed {
        background-color: #fecfd4;
    }

    table {
        border-collapse:separate;
        border-spacing: 0 10px;
        font-family: 'open sans',arial,sans-serif;
    }

    thead tr th{
        padding: 16px;
        text-align: left;
        border-bottom: 1px solid lightgrey;
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
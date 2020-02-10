<template>
    <div class="container">
        <input class="title text-center" placeholder="What do you want to do?" autofocus>

        <!-- <div class="mt-5">
            <a class="button btn-create d-inline" v-b-modal.create-modal><fa-icon :icon="['fas', 'plus']"></fa-icon></a>
            <a class="d-inline ml-5" v-on:click.prevent="filterByStatus(1)"><span class="open"></span>{{ openStatus }} open</a>
            <a class="d-inline ml-5" v-on:click.prevent="filterByStatus(2)"><span class="inprogress"></span>{{ inProgressStatus }} in progress</a>
            <a class="d-inline ml-5" v-on:click.prevent="filterByStatus(3)"><span class="closed"></span>{{ closedStatus }} closed</a>
        </div> -->

        <div class="mt-5 row text-left">
            <div class="col-1 offset-1">
                <a><u>Filter</u></a>
            </div>
            <div class="col-1"><a><u>Sort</u></a></div>
        </div>

        <div class="row mt-3">
            <table class="col-10 offset-1">
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td width="75%">{{ todo.title }}</td>
                        <td width="5%">{{ todo.deadline | moment("DD/MM/YYYY") }}</td>
                        <td width="5%">
                            <div class="text-center status" :class="statusColor(todo.status)">{{ statusLabel(todo.status) }}</div>
                        </td>
                        <td width="5%">x</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Dropdown button</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                    Dropdown item
                </a>
                <a class="dropdown-item">
                    Other dropdown item
                </a>
                <a href="#" class="dropdown-item is-active">
                    Active dropdown item
                </a>
                <a href="#" class="dropdown-item">
                    Other dropdown item
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                    With a divider
                </a>
                </div>
            </div>
        </div>
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
                this.todos = store.state.todos.filter(element => element.status == filter)
            },

            statusColor: (status) => status == TODO_STATUS.STATUS_OPEN ? 'open' : (status == TODO_STATUS.STATUS_INPROGRESS ? 'inprogress' : (status == TODO_STATUS.STATUS_CLOSED ? 'closed' : '')),

            statusLabel: (status) => status == TODO_STATUS.STATUS_OPEN ? 'open' : (status == TODO_STATUS.STATUS_INPROGRESS ? 'in progress' : (status == TODO_STATUS.STATUS_CLOSED ? 'closed' : '')),
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
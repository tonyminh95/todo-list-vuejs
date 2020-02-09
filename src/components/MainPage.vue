<template>
    <b-container>
        <!-- <b-modal id="create-modal" hide-footer hide-header>
            <table width="100%" class="ml-3 mr-3">
                <tbody>
                    <tr>
                        <td width="5%"></td>
                        <td width="95%">
                            <input type="text" class="title" placeholder="What do you want to do today?" autofocus v-model="todo.title">
                        </td>
                    </tr>
                    <tr>
                        <td width="5%">
                            <fa-icon :icon="['far', 'bookmark']" class="ic-form"></fa-icon>
                        </td>
                        <td width="95%">
                            <input type="text" class="description" placeholder="Description" v-model="todo.description">
                        </td>
                    </tr>
                    <tr>
                        <td width="5%">
                            <fa-icon :icon="['far', 'clock']" class="ic-form"></fa-icon>
                        </td>
                        <td width="95%">
                            <vue-datepicker placeholder="Deadline" class="date-picker" v-model="todo.deadline"></vue-datepicker>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="text-right m-3">
                <a class="button btn-create" v-on:click="onSubmit">Create</a>
            </div>
        </b-modal> -->

        <div class="mt-5">
            <a class="button btn-create d-inline" v-b-modal.create-modal><fa-icon :icon="['fas', 'plus']"></fa-icon></a>
            <a class="d-inline ml-5" v-on:click.prevent="filterByStatus(1)"><span class="open"></span>{{ openStatus }} open</a>
            <a class="d-inline ml-5" v-on:click.prevent="filterByStatus(2)"><span class="inprogress"></span>{{ inProgressStatus }} in progress</a>
            <a class="d-inline ml-5" v-on:click.prevent="filterByStatus(3)"><span class="closed"></span>{{ closedStatus }} closed</a>
        </div>

        <table class="mt-5">
            <thead>
                <tr>
                    <th width="25%">Title</th>
                    <th width="35%">Description</th>
                    <th width="15%">Deadline</th>
                    <th width="15%">Status</th>
                    <th colspan="2" width="10%"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.description }}</td>
                    <td>{{ todo.deadline | moment("DD/MM/YYYY") }}</td>
                    <td>
                        <div><span :class="statusColor(todo.status)"></span>{{ statusLabel(todo.status) }}</div>
                    </td>
                    <td><a class="button btn-edit"><fa-icon :icon="['fas', 'pencil-alt']"></fa-icon></a></td>
                    <td><a class="button btn-delete"><fa-icon :icon="['far', 'trash-alt']"></fa-icon></a></td>
                </tr>
            </tbody>
        </table>
    </b-container>
</template>

<script>
    import store from '@/store/index'
    import { TODO_STATUS } from '@/store/instants'

    export default {
        name: 'MainPage',

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

        computed: {
            // todos: () => store.state.todos,

            openStatus: () => store.getters.getOpenStatus,

            inProgressStatus: () => store.getters.getInProgressStatus,

            closedStatus: () => store.getters.getClosedStatus
        },

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
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans'), local('OpenSans'), url('http://themes.googleusercontent.com/static/fonts/opensans/v5/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff') format('woff');
    }

    input[type=text] {
        outline: none;
        border: none;
        font-family: 'open sans',arial,sans-serif;
        font-weight: 100;
        width: 100%;
    }

    input[type=text]:focus {
        border-color: black;
    }

    .title {
        font-size: 20px;
    }

    .description {
        font-size: 16px;
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

    table {
        border-collapse:separate;
        border-spacing:0 5px;
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

    /* button */
    .button {
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
    }

    .open {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #6de4da;
        display: inline-block;
        margin-right: 10px;
    }

    .inprogress {
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
    }

    .ic-form {
        width: 22px !important;
        height: 22px !important;
        color: rgb(180, 180, 180);
    }
</style>
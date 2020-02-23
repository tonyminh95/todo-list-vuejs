<template>
    <div class="container">
        <input @keyup.enter="createTask" class="title" placeholder="What do you want to do?" autofocus v-model="title">

        <table class="table table-bordered mt-5" width="100%">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Deadline</td>
                    <td>Status</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(todo, index) in todos" :key="todo.id">
                    <!-- <td @click="test(index, id)"> -->
                    <td v-switch="element">
                        <div v-case="'label'">{{ todo.title }}</div>
                        <input v-case="'input'" v-model="todo.title">
                    </td>
                    <td>{{ todo.description }}</td>
                    <td>{{ todo.deadline }}</td>
                    <td>{{ todo.status }}</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>

        <div v-switch="size">
            <h1 v-case="'large'">Large</h1>
            <h2 v-case="'medium'">Medium</h2>
            <h3 v-case="'small'">Small</h3>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VSwitch from 'v-switch-case'

    Vue.use(VSwitch)

    export default {
        name: 'NewDesign',

        data () {
            return {
                title: null,
                click: false,
                element: 'input',
                size: 'large'
            }
        },

        computed: {
            todos () {
                return this.$store.state.todos
            }
        },

        methods: {
            createTask () {
                if (this.title) {
                    this.$store.dispatch('createTask', this.title)
                    this.title = null
                }
            },

            test (index, id) {
            }
        }
    }
</script>

<style>
    table thead {
        color: gray;
    }

    .title {
        outline: none;
        border: none;
        font-weight: 100;
        width: 100%;
        font-size: 25px;
        background-color: transparent;
    }








    .custom-select {
        outline: none;
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

    /* table {
        border-collapse:separate;
        border-spacing: 0 10px;
        font-family: 'open sans', arial, sans-serif;
        width: 100%;
    }

    tbody tr td {
        padding: 16px;
    } */

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
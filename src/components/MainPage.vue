<template>
    <b-container>
        <b-row>
            <b-col><input type="text" placeholder="Title" autofocus id="title"></b-col>
            <b-col><input type="text" placeholder="Description" id="desciption"></b-col>
            <b-col><vue-datepicker placeholder="Deadline" class="date-picker"></vue-datepicker></b-col>
            <b-col><a class="button btn-create"><fa-icon :icon="['fas', 'plus']"></fa-icon></a></b-col>
        </b-row>

        <div style="margin-top: 50px">
            <span class="open"></span> 150 open<span class="inprogress"></span> 200 in progress<span class="closed"></span> 150 closed
        </div>

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th colspan="3">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td width="25%">{{ todo.title }}</td>
                    <td width="35%">{{ todo.description }}</td>
                    <td width="15%">{{ todo.deadline }}</td>
                    <td width="15%">
                        <div v-if="todo.status == 1"><span class="open"></span>open</div>
                        <div v-if="todo.status == 2"><span class="inprogress"></span>in progress</div>
                        <div v-if="todo.status == 3"><span class="closed"></span>closed</div>
                    </td>
                    <td width="5%"><a class="button btn-edit"><fa-icon :icon="['fas', 'pencil-alt']"></fa-icon></a></td>
                    <td width="5%"><a class="button btn-delete"><fa-icon :icon="['far', 'trash-alt']"></fa-icon></a></td>
                </tr>
            </tbody>
        </table>
    </b-container>
</template>

<script>
    export default {
        name: 'MainPage',

        data: () => {
            return {
                todos: [
                    { id: 1, title: 'running', description: 'run for healthy', deadline: '12/02/2020', status: '1' },
                    { id: 2, title: 'eat', description: 'eat for life', deadline: '12/02/2020', status: '2' },
                    { id: 3, title: 'drink', description: 'drink for life', deadline: '12/02/2020', status: '3' }
                ]
            }
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
        border-width: 0 0 1px;
        border-color: lightgray;
        font-size: 20px;
        font-family: 'open sans',arial,sans-serif;
        font-weight: 100;
        padding: 10px 0;
    }

    input[type=text]:focus {
        border-color: black;
    }

    ::placeholder {
        color: lightgray;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: lightgray;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: lightgray;
    }

    table {
        margin-top: 50px;
        width: 100%;
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
        width: 50px;
        text-align: center;
        position: relative;
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
        margin-left: 40px;
    }

    .closed {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #ffa89f;
        display: inline-block;
        margin-right: 10px;
        margin-left: 40px;
    }
</style>
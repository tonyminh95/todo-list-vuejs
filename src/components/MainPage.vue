<template>
    <div>
        <input type="text" placeholder="What do you want to do today?" autofocus>

        <p class="header">Todo today</p>

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.description }}</td>
                    <td>{{ todo.deadline }}</td>
                    <td>{{ todo.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'MainPage',

        data: () => {
            return {
                todos: [
                    { id: 1, title: 'running', description: 'run for healthy', deadline: '12/02/2020', status: 'in progress' },
                    { id: 2, title: 'eat', description: 'eat for life', deadline: '12/02/2020', status: 'in progress' },
                    { id: 3, title: 'drink', description: 'drink for life', deadline: '12/02/2020', status: 'in progress' }
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
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        outline: none;
        width: 50%;
        border: 1px solid lightgray;
        border-radius: 100px;
        font-size: 20px;
        font-family: 'open sans',arial,sans-serif;
        padding: 20px 50px;
        font-weight: 100;
    }

    input[type=text]:focus {
        box-shadow: 0 0 5px lightskyblue;
        border: 1px solid lightskyblue;
        border-radius: 100px;
        padding: 20px 50px;
    }

    .header {
        font-family: 'open sans',arial,sans-serif;
        font-size: 40px;
        margin-top: 50px;
    }

    table {
        margin: 0 auto;
        width: 50%;
    }
</style>
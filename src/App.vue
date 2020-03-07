<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Task List</router-link>
            <router-link to="/datatable">Data table</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="sass">
    @import "@/styles/main.scss";

    @font-face
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans'), local('OpenSans'), url('http://themes.googleusercontent.com/static/fonts/opensans/v5/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff') format('woff');

    #app
        font-family: 'open sans',arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 100px auto;
        text-align: center;

    #nav a:not(:last-child)
        margin-right: 10px;
</style>

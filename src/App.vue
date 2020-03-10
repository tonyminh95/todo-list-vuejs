<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Task List</router-link>
            <router-link to="/datatable">Data table</router-link>
            <router-link to="/tasks">Task page</router-link>
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

    #app
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 100px auto;

    #nav a:not(:last-child)
        margin-right: 10px;
</style>

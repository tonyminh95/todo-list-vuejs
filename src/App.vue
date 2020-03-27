<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Task List</router-link>
            <router-link to="/datatable">Data table</router-link>
            <router-link to="/tasks">Task page</router-link>
        </div>
        <router-view/> -->
        <task/>
    </div>
</template>

<script>
import Task from '@/pages/TaskPage'
    export default {
        name: 'App',
        components: {
            Task
        }
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

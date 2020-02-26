<template>
    <span>
        <u class="clickable" @click="filterTasksToday">Today task</u> <span class="today-task">{{ countTodayTask }}</span>
    </span>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'TaskToday',

        computed: {
            ...mapGetters({
                countTodayTask: 'countTodayTask',
            })
        },

        methods: {
            ...mapActions(['filterTasksToday'])
        }
    }
</script>


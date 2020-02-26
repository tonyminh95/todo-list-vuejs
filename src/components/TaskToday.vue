<template>
    <span>
        <u class="clickable">Today task</u> <span class="today-task">{{ countTodayTask }}</span>
    </span>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'TaskToday',

        computed: {
            ...mapGetters({
                countTodayTask: 'countTodayTask'
            })
        }
    }
</script>


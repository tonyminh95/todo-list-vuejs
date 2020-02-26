<template>
    <u class="clickable" @click="filterTasksAll">All task</u>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'TaskAll',

        methods: {
            ...mapActions(['filterTasksAll'])
        }
    }
</script>


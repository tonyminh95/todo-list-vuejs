<template>
    <div>
        <div @click="check = !check"><u>Filter by status</u></div>

        <base-dropdown :items="['All', 'Open', 'In progress', 'Closed']" v-if="check"></base-dropdown>
    </div>
</template>

<script>
    import BaseDropdown from '../bases/BaseDropdown'

    export default {
        name: 'FilterDropdown',

        components: {
            BaseDropdown
        },

        data () {
            return {
                check: null
            }
        }
    }
</script>

<style lang="sass" scoped>
    div
        cursor: pointer;
        margin-bottom: 10px;
</style>
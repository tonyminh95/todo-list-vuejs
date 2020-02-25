<template>
    <div>
        <div @click="check = !check"><u>Sort by deadline</u></div>

        <base-dropdown :items="['asc', 'desc']" v-if="check"></base-dropdown>
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
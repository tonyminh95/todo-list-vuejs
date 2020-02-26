<template>
    <div>
        <div class="clickable mb-2" @click="check = !check"><u>Sort by deadline</u></div>

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
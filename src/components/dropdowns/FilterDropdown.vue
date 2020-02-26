<template>
    <div>
        <div class="clickable mb-2" v-click-outside="test" @click="check = !check"><u>Filter by status</u></div>

        <ul class="base-dropdown" v-if="check">
            <li v-for="(filter, index) in filters" :key="index">
                {{ filter }}
            </li>
        </ul>
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        name: 'FilterDropdown',

        data () {
            return {
                filters: ['All', 'Open', 'In progress', 'Closed'],
                check: null
            }
        },

        directives: {
            ClickOutside
        },

        methods: {
            test () {
                this.check = false
            }
        }
    }
</script>
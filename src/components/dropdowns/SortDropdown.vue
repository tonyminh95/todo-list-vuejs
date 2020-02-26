<template>
    <div>
        <div class="clickable mb-2" v-click-outside="test" @click="check = !check"><u>Sort by deadline</u></div>

        <ul class="base-dropdown" v-if="check">
            <li v-for="(sort, index) in sorts" :key="index">
                {{ sort }}
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
                sorts: ['asc', 'desc'],
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
<template>
    <div>
        <div class="clickable" v-click-outside="hideDropdown" @click="isShow = !isShow"><u>Filter by status</u></div>

        <ul class="base-dropdown mt-2" v-if="isShow">
            <li v-for="(filter, index) in filters" :key="index" @click="filterTasksByStatus(index)">
                {{ filter }}
            </li>
        </ul>
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'
    import { mapActions } from 'vuex'

    export default {
        name: 'FilterDropdown',

        data () {
            return {
                filters: ['Open', 'In progress', 'Closed'],
                isShow: false
            }
        },

        directives: {
            ClickOutside
        },

        methods: {
            ...mapActions(['filterTasksByStatus']),

            showDropdown () {
                this.isShow = !this.isShow
            },

            hideDropdown () {
                this.isShow = false
            }
        }
    }
</script>
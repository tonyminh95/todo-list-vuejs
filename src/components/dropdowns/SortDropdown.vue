<template>
    <div>
        <div class="clickable" v-click-outside="hideDropdown" @click="isShow = !isShow"><u>Sort by deadline</u></div>

        <ul class="base-dropdown mt-2" v-if="isShow">
            <li v-for="(sort, index) in sorts" :key="index" @click="sortTasksByDeadline(index)">
                {{ sort }}
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
                sorts: ['asc', 'desc'],
                isShow: false
            }
        },

        directives: {
            ClickOutside
        },

        methods: {
            ...mapActions(['sortTasksByDeadline']),

            showDropdown () {
                this.isShow = !this.isShow
            },

            hideDropdown () {
                this.isShow = false
            }
        }
    }
</script>
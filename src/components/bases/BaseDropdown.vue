<template>
    <div>
        <div v-click-outside="hideDropdown" @click="showDropdown = !showDropdown">
            <slot name="dropdownButton"></slot>
        </div>


        <ul class="u-margin-top-xsmall dropdown" v-if="showDropdown">
            <li v-for="(item, index) in items" :key="index" @click="$emit('chosen-item', index)">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        name: 'BaseDropdown',

        directives: {
            ClickOutside
        },

        props: {
            items: {
                required: true,
                type: Array
            }
        },

        data () {
            return {
                showDropdown: false,
            }
        },

        methods: {
            hideDropdown () {
                this.showDropdown = false
            }
        }


    }
</script>
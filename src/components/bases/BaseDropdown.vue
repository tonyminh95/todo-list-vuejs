<template>
    <div>
        <div v-click-outside="hideDropdown" @click="showDropdown = !showDropdown" class="u-cursor-pointer">
            <slot name="dropdownButton"></slot>
        </div>

        <ul class="u-margin-top dropdown" :class="'dropdown-' + position"  v-if="showDropdown">
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
            },

            position: {
                type: String
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
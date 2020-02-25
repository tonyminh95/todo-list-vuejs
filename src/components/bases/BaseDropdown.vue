<template>
    <transition name="dropdown">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
            </li>
        </ul>
    </transition>
</template>

<script>
    export default {
        name: 'BaseDropdown',

        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        -webkit-box-shadow: 0px 0px 5px 2px rgba(158,158,158,0.57);
        -moz-box-shadow: 0px 0px 5px 2px rgba(158,158,158,0.57);
        box-shadow: 0px 0px 5px 2px rgba(158,158,158,0.57);
        display: inline-block;
    }
</style>
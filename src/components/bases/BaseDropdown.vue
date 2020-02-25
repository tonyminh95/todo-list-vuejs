<template>
    <transition name="dropdown">
        <ul class="base-dropdown">
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
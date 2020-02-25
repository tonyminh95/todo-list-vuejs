<template>
    <div>
        <a>Filter</a>

        <base-dropdown :items="['All', 'Open', 'In progress', 'Closed']"></base-dropdown>
    </div>
</template>

<script>
    import BaseDropdown from '../bases/BaseDropdown'

    export default {
        name: 'FilterDropdown',

        components: {
            BaseDropdown
        }
    }
</script>
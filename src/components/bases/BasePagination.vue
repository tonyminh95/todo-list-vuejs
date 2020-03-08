<template>
    <ul class="pagination">
        <li>Prev</li>
        <li v-for="n in 5" :key="n">{{ n }}</li>
        <li>Next</li>
    </ul>
</template>

<script>
    export default {
        name: 'BasePagination'
    }
</script>
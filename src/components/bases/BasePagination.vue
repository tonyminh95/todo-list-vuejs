<template>
    <div class="pagination">
        <div class="pagination__prev">Prev</div>
        <div class="pagination__number" v-for="n in 5" :key="n">
            {{ n }}
        </div>
        <div class="pagination__next">Next</div>
    </div>
</template>

<script>
    export default {
        name: 'BasePagination'
    }
</script>
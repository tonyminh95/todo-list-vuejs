<template>
    <!-- <ul class="pagination">
        <li class="pagination__prev">Prev</li>
        <li class="pagination__number" v-for="n in 5" :key="n">
            {{ n }}
        </li>
        <li class="pagination__next">Next</li>
    </ul> -->

    <ul class="pagination" style="list-style: none; padding: 0">
        <li class="d-inline-block">Bui Dang Minh</li>
        <li class="d-inline-block">Bui Hai Dang</li>
    </ul>
</template>

<script>
    export default {
        name: 'BasePagination'
    }
</script>
<template>
    <div>
        <ul class="pagination">
            <li
                :class="{ 'pagination__disable' : pageNumber === 1 }"
                @click="prev"
            >
                Prev
            </li>
            <li
                v-for="number in numberOfPages" :key="number"
                :class="{ 'pagination__active' : number === pageNumber}"
                @click="pageNumber = number, $emit('page-number', pageNumber)"
            >
                {{ number }}
            </li>
            <li
                :class="{ 'pagination__disable' : pageNumber === numberOfPages }"
                @click="next"
            >
                Next
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'BasePagination',

        props: {
            page_size: {
                required: true,
                type: Number
            },

            list_size: {
                required: true,
                type: Number
            }
        },

        data() {
            return {
                pageNumber: 1,
            }
        },

        computed: {
            numberOfPages () {
                return Math.ceil(this.list_size / this.page_size)
            }
        },

        methods: {
            prev () {
                if (this.pageNumber > 1) {
                    this.pageNumber--
                    this.$emit('page-number', this.pageNumber)
                }
            },

            next () {
                if (this.pageNumber < this.numberOfPages) {
                    this.pageNumber++
                    this.$emit('page-number', this.pageNumber)
                }
            }
        }
    }
</script>
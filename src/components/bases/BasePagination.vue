<template>
    <ul class="pagination">
        <li
            class="pagination__item"
            :class="{ 'pagination__item--disable' : pageNumber === 1 }"
            @click="prev"
        >
            <fa-icon :icon="['fas', 'chevron-left']"></fa-icon>
        </li>
        <li
            v-for="(page, index) in pages"
            :key="index"
            class="pagination__item"
            :class="{ 'pagination__item--active': pageNumber === page, 'pagination__item--dots' : page === '...' }"
            @click="setPageNumber(page)"
        >
            {{ page }}
        </li>
        <li
            class="pagination__item"
            :class="{ 'pagination__item--disable' : pageNumber === numberOfPages }"
            @click="next"
        >
            <fa-icon :icon="['fas', 'chevron-right']"></fa-icon>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'BasePagination',

        props: {
            page_size: {
                required: true,
                type: Number,
                default: 5
            },

            list_size: {
                required: true,
                type: Number
            }
        },

        data() {
            return {
                pageNumber: 1
            }
        },

        computed: {
            numberOfPages () {
                return Math.ceil(this.list_size / this.page_size)
            },

            pages () {
                if (this.numberOfPages <= 7) {
                    return [...Array(this.numberOfPages)].map((_, index) => index + 1)
                } else if (this.pageNumber < 4) {
                    return [1, 2, 3, 4, '...', this.numberOfPages - 1, this.numberOfPages]
                } else if (this.pageNumber > this.numberOfPages - 3) {
                    return [1, 2, '...', this.numberOfPages - 3, this.numberOfPages - 2, this.numberOfPages - 1, this.numberOfPages]
                } else {
                    return [1, '...', this.pageNumber - 1, this.pageNumber, this.pageNumber + 1, '...', this.numberOfPages]
                }
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
            },

            setPageNumber (page) {
                if (page != '...') {
                    this.pageNumber = page
                    this.$emit('page-number', this.pageNumber)
                }
            }
        }
    }
</script>
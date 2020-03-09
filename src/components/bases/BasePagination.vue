<template>
    <div>
        <ul class="pagination">
            <li
                class="pagination__button"
                :class="{ 'pagination__disable' : page_number === 1 }"
                @click="prev"
            >
                Prev
            </li>
            <li
                v-for="number in numberOfPages" :key="number"
                class="pagination__button"
                :class="{ 'pagination__active' : number === page_number}"
                @click="page_number = number"
            >
                {{ number }}
            </li>
            <li
                class="pagination__button"
                :class="{ 'pagination__disable' : page_number === todos.length }"
                @click="next"
            >
                Next
            </li>
        </ul>

        <!-- <div @click="test">test</div> -->
    </div>
</template>

<script>
    export default {
        name: 'BasePagination',

        data () {
            return {
                page_number: 3,
                page_size: 5,

                todos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
            }
        },

        computed: {
            numberOfPages () {
                return Math.trunc(this.todos.length / this.page_size) + 1
            }
        },

        methods: {
            prev () {
                if (this.page_number > 1) {
                    this.page_number--
                }
            },

            next () {
                if (this.page_number < this.numberOfPages) {
                    this.page_number++
                }
            }
        }
    }
</script>
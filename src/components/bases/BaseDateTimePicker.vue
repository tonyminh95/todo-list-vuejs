<template>
    <div class="datetime">
        <div class="datetime__content">
            <div class="datetime__content--controller">
                <button class="btn-icon" @click="previous">&#10094;</button>
                <span>{{ month }}</span>
                <button class="btn-icon" @click="next">&#10095;</button>
            </div>

            <div class="datetime__content--calendar">
                Bui Dang Minh
            </div>
            <!-- {{ currentDate.getMonth() }} -->
        </div>
    </div>
</template>

<script>
import { transformMonthToWord } from '@/utils/datetime-picker'

export default {
    name: 'BaseDateTimePicker',

    computed: {
        month () {
            return transformMonthToWord(this.currentDate.getMonth())
        }
    },

    data() {
        return {
            currentDate: new Date()
        }
    },

    methods: {
        previous () {
            // this.currentDate =
        },

        next () {

        }
    }
}
</script>
<template>
    <div class="datetime">
        <div class="datetime__content">
            <div class="datetime__content__controller">
                <button class="btn-icon" @click="monthState--">&#10094;</button>
                <span>{{ transformCurrentMonthToWord }}</span>
                <button class="btn-icon" @click="monthState++">&#10095;</button>
            </div>

            <div class="datetime__content__calendar">
                <!-- <div v-for="(day, index) in daysOfWeek" :key="index" class="datetime__content__calendar--item datetime__content__calendar--item--label">
                    {{ day }}
                </div> -->

                <div
                    v-for="index in numberOfDaysToRender"
                    :key="index"
                    class="datetime__content__calendar--item"
                    :class="{
                        'datetime__content__calendar--item--primary-date': indexOfFirstDateOfCurrentMonth < index && index <= indexOfLastDateOfCurrentMonth,
                        'datetime__content__calendar--item--active-date': index == indexOfCurrentDate && currentMonth == currentDate.getMonth(),
                        'datetime__content__calendar--item--date': index != indexOfCurrentDate
                    }"
                    @click="changeCurrentDate(index - 1)"
                >
                    {{ renderDate(index - 1) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { transformMonthToWord } from '@/utils/datetime-picker'

export default {
    name: 'BaseDateTimePicker',

    computed: {
        transformCurrentMonthToWord () {
            const remainderOfMonth = this.currentMonth % 12
            const indexOfMonth = remainderOfMonth + (this.currentMonth < 0 && this.currentMonth % 12 != 0 ? 12 : 0)

            return transformMonthToWord(indexOfMonth)

        },

        currentYear () {
            return this.currentDate.getFullYear()
        },

        currentMonth () {
            return this.currentDate.getMonth() + this.monthState
        },

        indexOfFirstDateOfCurrentMonth () {
            const firstDateOfCurrentMonth = new Date(this.currentYear, this.currentMonth, 1)

            return firstDateOfCurrentMonth.getDay()
        },

        indexOfLastDateOfCurrentMonth () {
            const lastDateOfCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0)

            return lastDateOfCurrentMonth.getDate() + this.indexOfFirstDateOfCurrentMonth
        },

        numberOfDaysToRender () {
            return Math.ceil(this.indexOfLastDateOfCurrentMonth / 7) * 7
        },

        renderDate () {
            return index => this.renderDateItem(index).getDate()
        },

        indexOfCurrentDate () {
            return this.currentDate.getDate() + this.indexOfFirstDateOfCurrentMonth
        }
    },

    data() {
        return {
            currentDate: new Date(),
            monthState: 0,
            daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    },

    methods: {
        renderDateItem (index) {
            const startDate = new Date(this.currentYear, this.currentMonth, (this.indexOfFirstDateOfCurrentMonth - 1) * (-1))
            const date = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000)

            return date
        },

        changeCurrentDate (index) {
            this.currentDate = this.renderDateItem(index)
            this.monthState = 0
        }
    }
}
</script>
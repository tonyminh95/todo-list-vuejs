<template>
    <div class="datetime">
        <div class="datetime__content">
            <div class="datetime__content__controller">
                <button class="btn-icon" @click="previous">&#10094;</button>
                <span>{{ month }}</span>
                <button class="btn-icon" @click="next">&#10095;</button>
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
                        'datetime__content__calendar--item--active-date': index == indexOfCurrentDate,
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
        month () {
            return transformMonthToWord(Math.abs(this.currentMonth % 12))
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

        renderDateItem () {
            return index => {
                const startDate = new Date(this.currentYear, this.currentMonth, (this.indexOfFirstDateOfCurrentMonth - 1) * (-1))
                const date = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000)

                return date
            }
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
        changeCurrentDate (index) {
            this.currentDate = this.renderDateItem(index)
        },

        previous () {
            this.monthState--

            console.log(this.currentMonth, Math.abs(this.currentMonth % 12))
        },

        next () {
            this.monthState++

            console.log(this.currentMonth, Math.abs(this.currentMonth % 12))
        }
    }
}
</script>
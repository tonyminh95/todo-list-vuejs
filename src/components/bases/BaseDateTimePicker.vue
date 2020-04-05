<template>
    <div class="datetime">
        <div class="datetime__input" @click="popupState = true">
            {{ formattedDate }}
        </div>

        <div v-if="popupState" class="datetime__content">
            <div class="datetime__content__controller">
                <button class="btn-icon" @click="previous">&#10094;</button>
                <span
                    :class="{ 'datetime__content__controller--title': pickerType != 2 }"
                    @click="changePickerType"
                >
                    {{ pickerTitle }}
                </span>
                <button class="btn-icon" @click="next">&#10095;</button>
            </div>

            <div v-if="pickerType == 0" class="datetime__content__calendar">
                <div v-for="day in daysOfWeek" :key="day" class="datetime__content__calendar--item datetime__content__calendar--item--label" >
                    {{ day }}
                </div>

                <div
                    v-for="index in numberOfDaysToRender"
                    :key="index"
                    class="datetime__content__calendar--item"
                    :class="{
                        'datetime__content__calendar--item--primary-date': indexOfFirstDateOfCurrentMonth < index && index <= indexOfLastDateOfCurrentMonth,
                        'datetime__content__calendar--item--active-date': index == indexOfCurrentDate && currentMonth == currentDate.getMonth() && currentYear == currentDate.getFullYear(),
                        'datetime__content__calendar--item--date': index != indexOfCurrentDate
                    }"
                    @click="changeCurrentDate(index - 1)"
                >
                    {{ renderDate(index - 1) }}
                </div>
            </div>

            <div v-if="pickerType == 1" class="datetime__content__month">
                <div
                    v-for="(month, index) in monthsOfYear"
                    :key="index"
                    class="datetime__content__month--item"
                    @click="changeCurrentMonth(index)"
                >
                    {{ month }}
                </div>
            </div>

            <div v-if="pickerType == 2" class="datetime__content__year">
                <div
                    v-for="index in 10"
                    :key="index"
                    class="datetime__content__year--item"
                    @click="changeCurrentYear(index - 1)"
                >
                    {{ startYear + index - 1 }}
                </div>
            </div>

            <div class="datetime__content__actions">
                <button class="btn-outline-cancel u-margin-right-2" @click="popupStatus = false">cancel</button>
                <button class="btn-select">select</button>
            </div>
        </div>
    </div>
</template>

<script>
import { transformMonthToWord, formattedDate } from '@/utils'

export default {
    name: 'BaseDateTimePicker',

    computed: {
        // year picker
        currentYear () {
            return this.currentDate.getFullYear() + this.yearState
        },

        startYear () {
            return this.currentYear % 10 == 0 ? this.currentYear - 9 : Math.floor(this.currentYear / 10) * 10 + 1
        },

        endYear () {
            return Math.ceil(this.currentYear / 10) * 10
        },

        yearTitle () {
            return `${this.startYear} - ${this.endYear}`
        },

        // month picker
        currentMonth () {
            return this.currentDate.getMonth() + this.monthState
        },

        transformCurrentMonthToWord () {
            const remainderOfMonth = this.currentMonth % 12
            const indexOfMonth = remainderOfMonth + (this.currentMonth < 0 && this.currentMonth % 12 != 0 ? 12 : 0)

            return `${this.currentYear} - ${transformMonthToWord(indexOfMonth)}`
        },

        // date picker
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
        },

        formattedDate () {
            return formattedDate(this.chosenDate)
        },

        // controller
        pickerTitle () {
            return this[this.pickerActions[this.pickerType]]
        }
    },

    data() {
        return {
            currentDate: new Date(),

            // year picker
            yearState: 0,

            // month picker
            monthsOfYear: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            monthState: 0,

            // date picker
            daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            chosenDate: new Date(),

            // controller
            pickerType: 0,
            pickerActions: {
                0: 'transformCurrentMonthToWord',
                1: 'currentYear',
                2: 'yearTitle'
            },

            popupState: false
        }
    },

    methods: {
        // year picker
        changeCurrentYear (index) {
            this.yearState = this.yearState + (index - (this.currentYear - this.startYear))
            this.pickerType = 1
        },

        // month picker
        changeCurrentMonth (index) {
            this.monthState = this.monthState + (index - this.currentMonth)
            this.pickerType = 0
        },

        // date picker
        renderDateItem (index) {
            const startDate = new Date(this.currentYear, this.currentMonth, (this.indexOfFirstDateOfCurrentMonth - 1) * (-1))
            const date = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000)

            return date
        },

        changeCurrentDate (index) {
            this.currentDate = this.renderDateItem(index)
            this.monthState = 0
            this.yearState = 0
        },

        // select () {
        //     this.currentDate = this.chosenDate
        //     this.monthState = 0
        //     this.yearState = 0
        // },

        // controller
        changePickerType () {
            if (this.pickerType < 2) {
                this.pickerType++
            }
        },

        previous () {
            if (this.pickerType == 0) {
                this.monthState--

                if (this.currentMonth < 0) {
                    this.monthState = 11 - this.currentDate.getMonth()
                    this.yearState--
                }
            } else {
                this.yearState = this.yearState - 10
            }
        },

        next () {
            if (this.pickerType == 0) {
                this.monthState++

                if (this.currentMonth > 11) {
                    this.monthState = 0 - this.currentDate.getMonth()
                    this.yearState++
                }
            } else {
                this.yearState = this.yearState + 10
            }
        }
    }
}
</script>
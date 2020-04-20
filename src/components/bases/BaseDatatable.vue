<template>
    <table class="table">
       <thead>
            <tr>
                <th :colspan="numberOfColumns">
                    <div class="table__header">
                        <h2>{{ table_name }}</h2>

                        <input type="text" class="table__header--search" placeholder="Search" v-model="search">
                    </div>
                </th>
            </tr>
            <tr>
                <th :colspan="numberOfColumns">
                    <div class="table__header">
                        <button class="btn-create" @click="$emit('create')">create new +</button>

                        <ul class="table__header--pagination">
                            <li>Row per pages</li>
                            <li>
                                <dropdown :items="entries" @chosen-item="page_size = entries[$event]">
                                    <div slot="dropdownButton">
                                        <span class="u-border-bottom">{{ page_size }}</span> <fa-icon :icon="['fas', 'sort-down']"></fa-icon>
                                    </div>
                                </dropdown>
                            </li>
                            <li>
                                <pagination
                                    :page_size="page_size"
                                    :list_size="bodies.length"
                                    @page-number="page_number = $event"
                                />
                            </li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th
                    v-for="(item, index) in headerItems"
                    :key="index"
                    :width="item.width"
                >
                    <div>
                        {{ item.title }}

                        <span
                            v-if="!!item.sort"
                            @click="sort(item)"
                        >
                            <fa-icon :icon="['fas', 'sort-amount-down-alt']" v-if="item.sort === 'asc'"></fa-icon>
                            <fa-icon :icon="['fas', 'sort-amount-up-alt']" v-if="item.sort === 'desc'"></fa-icon>
                        </span>
                    </div>

                    <div v-if="!!item.type" class="table__header--filter">
                        <input type="text" v-if="item.type === 'text'">

                        <datetime-picker v-if="item.type === 'date'" />

                        <dropdown v-if="item.type === 'status'" :items="item.status" @chosen-item="page_size = item.status[$event]">
                            <div slot="dropdownButton">
                                <span class="u-border-bottom">{{ page_size }}</span> <fa-icon :icon="['fas', 'sort-down']"></fa-icon>
                            </div>
                        </dropdown>
                    </div>
                </th>
                <th v-if="headers.buttonActions" colspan="2"></th>
            </tr>
        </thead>

        <tbody>
            <tr v-if="items.length == 0">
                <td :colspan="numberOfColumns">
                    <h3>No data!!!</h3>
                </td>
            </tr>
            <tr v-else v-for="item in items" :key="item.id">
                <td v-for="(headerItem, index) in headerItems" :key="index">
                    <div
                        v-if="headerItem.type === 'status'"
                    >
                        <!-- <span :class="statusClass(header.statusType[item[header.title]])"></span> -->
                        <!-- <span>{{ header.statusType[item[header.title]] }}</span> -->
                    </div>
                    <div
                        v-else-if="headerItem.type === 'text' || headerItem.type === 'date'"
                        v-html="$options.filters.highlightText(item[headerItem.title], search)">
                    </div>
                    <div v-else>
                        {{ item[headerItem.title] }}
                    </div>
                </td>
                <td v-if="headers.buttonActions">
                    <button class="btn-icon-edit" @click="editObject(item.id)"><fa-icon :icon="['far', 'edit']"></fa-icon></button>
                </td>
                <td v-if="headers.buttonActions">
                    <button class="btn-icon-delete" @click="deleteObject(item.id)"><fa-icon :icon="['far', 'trash-alt']"></fa-icon></button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Pagination from '@/components/bases/BasePagination'
import Dropdown from '@/components/bases/BaseDropdown'
import moment from "moment"
import DatetimePicker from '@/components/bases/BaseDateTimePicker'

export default {
    name: 'BaseDatatable',

    components: {
        Dropdown,
        Pagination,
        DatetimePicker
    },

    props: {
        // table name
        table_name: {
            type: String,
            default: 'table name here'
        },

        // table content
        headers: {
            required: true,
            type: Object
        },

        bodies: {
            required: true,
            type: Array
        }
    },

    computed: {
        // table content
        numberOfColumns () {
            return this.headers.items.length + ('buttonActions' in this.headers ? 2 : 0)
        },

        headerItems () {
            return this.headers.items
        },

        items () {
            return this.bodies
                  .filter(body => {
                        const filter = {...body}
                        delete filter.id

                        this.headerItems.forEach(element => {
                            if (element.type !== 'text') {
                                delete filter[element.title]
                            }
                        });

                        return Object.values(filter).toString().toLowerCase().includes(this.search.toLowerCase())
                    })
                    .sort((prev, next) => {
                        const action = this.sortActions[this.sortObjectType]

                        return action.call(this, prev[this.sortObject], next[this.sortObject])
                    })
                    .slice(this.page_size * (this.page_number - 1), this.page_size * (this.page_number - 1) + this.page_size)
        }
    },

    data() {
        return {
            // search
            search: '',

            // sort
            sortObject: 'id',
            sortObjectType: 'number',
            sortType: 1,
            sortActions: {
                number: this.sortedByNumber,
                status: this.sortedByNumber,
                text: this.sortedByString,
                date: this.sortedByDate
            },

            // pagination
            page_size: 5,
            page_number: 1,
            entries: [5, 10, 25, 50, 75, 100]
        }
    },

    filters: {
        highlightText (value, search) {
            return search
                ?
                    value.toString().replace(new RegExp(search, 'gi'), (matched) => `<span class="text-highlight">${matched}</span>`)
                :
                    value
            }
    },

    methods: {
        // sort
        sort(item) {
            if (item.sort == 'asc') {
                item.sort = 'desc'
            } else if (item.sort == 'desc') {
                item.sort = 'asc'
            }
        },

        sortCondition (headerTitle, headerType) {
            this.sortObject = headerTitle
            this.sortType *= -1
            this.sortObjectType = headerType
        },

        sortedByNumber (prev, next) {
            return (prev - next) * this.sortType
        },

        sortedByString (prev, next) {
            if (prev.toLowerCase() < next.toLowerCase()) return this.sortType
            if (prev.toLowerCase() > next.toLowerCase()) return this.sortType * -1
            return 0
        },

        sortedByDate (prev, next) {
            if (moment(prev, 'DD/MM/YYYY') < moment(next, 'DD/MM/YYYY')) return this.sortType
            if (moment(prev, 'DD/MM/YYYY') > moment(next, 'DD/MM/YYYY')) return this.sortType * -1
            return 0
        },

        // status
        statusClass (status) {
            return `status status-${status.replace(' ', '-')}`
        },

        // button
        editObject (id) {
            this.$emit('edit', id)
        },

        deleteObject (id) {
            this.$emit('delete', id)
        }
    }
}
</script>
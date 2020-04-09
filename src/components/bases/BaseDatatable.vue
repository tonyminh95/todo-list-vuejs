<template>
    <table class="table">
       <thead>
            <tr>
                <th :colspan="numberOfColumns">
                    <div class="table__header">
                        <h2>{{ table_name }}</h2>

                        <input type="text" class="table__header--search" placeholder="Search">
                    </div>
                </th>
            </tr>
            <tr>
                <th :colspan="numberOfColumns">
                    <div class="table__header">
                        <button class="btn-create" @click="$emit('create')">create new +</button>

                        <!-- <ul class="table__header__pagination">
                            <li class="u-display-inline-block u-margin-right-small">
                                <dropdown :items="entries" @chosen-item="page_size = entries[$event]" :position="'right'">
                                    <div slot="dropdownButton">
                                        Row per pages <span class="u-border-bottom">{{ page_size }}</span> <fa-icon :icon="['fas', 'sort-down']"></fa-icon>
                                    </div>
                                </dropdown>
                            </li>
                            <li class="u-display-inline-block">
                                <pagination
                                    :page_size="page_size"
                                    :list_size="bodies.length"
                                    @page-number="page_number = $event"
                                />
                            </li>
                        </ul> -->
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

                        <span>
                            <fa-icon :icon="['fas', 'sort-amount-down-alt']"></fa-icon>
                            <fa-icon :icon="['fas', 'sort-amount-up-alt']"></fa-icon>
                        </span>
                    </div>

                    <div>

                    </div>
                </th>
                <th v-if="headers.buttonActions" width="20%"></th>
                <!--  <th v-for="(header, index) in headers" :key="index" :width="header.width">
                    <div>
                        {{ header.title }}
                        <span
                            v-if="typeof header.sort !== 'undefined'"
                            @click="sortCondition(header.title, header.type), header.sort = !header.sort"
                            class="u-cursor-pointer"
                        >
                            <fa-icon :icon="['fas', 'sort-amount-down-alt']" v-if="header.sort"></fa-icon>
                            <fa-icon :icon="['fas', 'sort-amount-up-alt']" v-else></fa-icon>
                        </span>
                    </div>

                    <div>
                        <input type="text" v-if="header.type === 'text' || header.type === 'date'">

                        <select v-if="header.type === 'status'">
                            <option v-for="(type, key) in header.statusType" :key="key" :value="type">
                                {{ type }}
                            </option>
                        </select>
                    </div>
                </th> -->
            </tr>
        </thead>

        <tbody>
            <!-- <tr v-if="items.length == 0">
                <td :colspan="items.length">
                    No data!!!
                </td>
            </tr>
            <tr v-else v-for="item in items" :key="item.id"> -->
                <!-- <td v-for="(header, index) in headers" :key="index">
                    <div
                        v-if="header.type === 'status'"
                    >
                        <span :class="statusClass(header.statusType[item[header.title]])"></span>
                        <span class="u-margin-left-xsmall">{{ header.statusType[item[header.title]] }}</span>
                    </div>
                    <div
                        v-else-if="header.type === 'text' || header.type === 'date'"
                        v-html="$options.filters.highlightText(item[header.title], search)">
                    </div>
                    <div v-else-if="header.type === 'button'">
                        <span
                            v-for="(action, index) in header.buttons"
                            :key="index"
                            :class="[`btn-${action.type}`]"
                            @click="buttonActions[action.type].call(this, item.id)"
                        >
                            <fa-icon :icon="action.icon"></fa-icon>
                        </span>
                    </div>
                    <div v-else>
                        {{ item[header.title] }}
                    </div>
                </td> -->
            <!-- </tr> -->
        </tbody>
    </table>
</template>

<script>
// import Pagination from '@/components/bases/BasePagination'
// import Dropdown from '@/components/bases/BaseDropdown'
// import moment from "moment"

export default {
    name: 'BaseDatatable',

    // components: {
    //     Pagination,
    //     Dropdown
    // },

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

        // bodies: {
        //     required: true,
        //     type: Array
        // }
    },

    computed: {
        // table content
        numberOfColumns () {
            return this.headers.items.length + (this.headers.buttonActions ? 1 : 0)
        },

        headerItems () {
            return this.headers.items
        }

        // items() {
        //     return this.bodies
        // }
        // items () {
        //     return this.bodies
        //             .filter(body => {
        //                 const filter = {...body}
        //                 delete filter.id

        //                 this.headers.forEach(element => {
        //                     if (element.type !== 'text') {
        //                         delete filter[element.title]
        //                     }
        //                 });

        //                 return Object.values(filter).toString().toLowerCase().includes(this.search.toLowerCase())
        //             })
        //             .sort((prev, next) => {
        //                 const action = this.sortActions[this.sortObjectType]

        //                 return action.call(this, prev[this.sortObject], next[this.sortObject])
        //             })
        //             .slice(this.page_size * (this.page_number - 1), this.page_size * (this.page_number - 1) + this.page_size)
        // }
    // },

    // data() {
    //     return {
    //         // search
    //         search: '',

    //         // sort
    //         sortObject: 'id',
    //         sortObjectType: 'number',
    //         sortType: 1,
    //         sortActions: {
    //             number: this.sortedByNumber,
    //             status: this.sortedByNumber,
    //             text: this.sortedByString,
    //             date: this.sortedByDate
    //         },

    //         // pagination
    //         page_size: 10,
    //         page_number: 1,
    //         entries: [10, 25, 50, 75, 100],

    //         // button
    //         buttonActions: {
    //             edit: this.editObject,
    //             delete: this.deleteObject
    //         }
    //     }
    // },

    // filters: {
    //     highlightText (value, search) {
    //         return search
    //             ?
    //                 value.toString().replace(new RegExp(search, 'gi'), (matched) => `<span class="text-highlight">${matched}</span>`)
    //             :
    //                 value
    //         }
    // },

    // methods: {
    //     // sort
    //     sortCondition (headerTitle, headerType) {
    //         this.sortObject = headerTitle
    //         this.sortType *= -1
    //         this.sortObjectType = headerType
    //     },

    //     sortedByNumber (prev, next) {
    //         return (prev - next) * this.sortType
    //     },

    //     sortedByString (prev, next) {
    //         if (prev.toLowerCase() < next.toLowerCase()) return this.sortType
    //         if (prev.toLowerCase() > next.toLowerCase()) return this.sortType * -1
    //         return 0
    //     },

    //     sortedByDate (prev, next) {
    //         if (moment(prev, 'DD/MM/YYYY') < moment(next, 'DD/MM/YYYY')) return this.sortType
    //         if (moment(prev, 'DD/MM/YYYY') > moment(next, 'DD/MM/YYYY')) return this.sortType * -1
    //         return 0
    //     },

    //     // status
    //     statusClass (status) {
    //         return `status status-${status.replace(' ', '-')}`
    //     },

    //     // button
    //     editObject (id) {
    //         this.$emit('edit', id)
    //     },

    //     deleteObject (id) {
    //         this.$emit('delete', id)
    //     }
    }
}
</script>
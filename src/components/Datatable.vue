<template>
    <table class="table">
        <thead>
            <tr>
                <th :colspan="headers.length">
                    <div class="table__header">
                        <span class="heading-primary">{{ tableName }}</span>
                        <input type="text" placeholder="Search" class="table__header__search-input" v-model="search">
                    </div>
                </th>
            </tr>
            <tr>
                <th :colspan="headers.length">
                    <div class="table__header">
                        <div class="btn-create">new task +</div>

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
                <th v-for="(header, index) in headers" :key="index" :width="header.width">
                    {{ header.title }}
                    <span v-if="typeof header.sort !== 'undefined'" @click="sortCondition(header.title, header.type), header.sort = !header.sort" class="u-cursor-pointer">
                        <fa-icon :icon="['fas', 'sort-amount-down-alt']" v-if="header.sort"></fa-icon>
                        <fa-icon :icon="['fas', 'sort-amount-up-alt']" v-else></fa-icon>
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td v-for="(header, index) in headers" :key="index">
                    <!-- <div v-if="header.type === 'status'" :class="'status status-' + matchTheWord(status.get(item[header.title]))">
                        {{ status.get(item[header.title]) }}
                    </div> -->
                    <!-- <div v-else>
                        {{ item[header.title] }}
                    </div> -->
                    <div v-html="$options.filters.highlightText(item[header.title], search)"></div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
// import Pagination from '@/components/bases/BasePagination'
// import Dropdown from '@/components/bases/BaseDropdown'
import moment from "moment"

export default {
    name: 'Datatable',

    components: {
        // Pagination,
        // Dropdown
    },

    props: {
        table_name: {
            type: String
        },

        headers: {
            required: true,
            type: Array
        },

        bodies: {
            required: true,
            type: Array
        }
    },

    computed: {
        tableName () {
            return this.table_name ? this.table_name : 'table name here'
        },

        items () {
            return this.bodies
                    .filter(body => {
                        const filter = {...body}
                        delete filter.id

                        return Object.values(filter).toString().includes(this.search)
                    })
                    .sort((prev, next) => {
                        const action = this.sortActions.get(this.sortObjectType)

                        return action.call(this, prev[this.sortObject], next[this.sortObject])
                    })
        }
    },

    data() {
        return {
            search: '',
            sortObject: 'id',
            sortObjectType: 'number',
            sortType: 1,
            sortActions: new Map([
                ['number', this.sortedByNumber],
                ['status', this.sortedByNumber],
                ['text', this.sortedByString],
                ['date', this.sortedByDate]
            ])
        }
    },

    filters: {
        highlightText (value, search) {
            return value.toString().replace(search, '<span class="text-highlight">' + search + '</span>')
        }
    },

    methods: {
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
        }
    }
}
</script>
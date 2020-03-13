<template>
    <table class="table">
        <thead>
            <tr>
                <th :colspan="headers.length">
                    <div class="table__header">
                        <span class="heading-primary">{{ tableName }}</span>
                        <input type="text" placeholder="Search" class="table__header__search-input">
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
                    <span v-if="typeof header.sort !== 'undefined'" @click="sort(index)" class="u-cursor-pointer">
                        <fa-icon :icon="['fas', 'sort-amount-down-alt']" v-if="header.sort"></fa-icon>
                        <fa-icon :icon="['fas', 'sort-amount-up-alt']" v-else></fa-icon>
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td v-for="(header, index) in headers" :key="index">
                    <div v-if="header.type === 'status'" :class="'status status-' + matchTheWord(status.get(item[header.title]))">
                        {{ status.get(item[header.title]) }}
                    </div>
                    <div v-else>
                        {{ item[header.title] }}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
// import Pagination from '@/components/bases/BasePagination'
// import Dropdown from '@/components/bases/BaseDropdown'

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
        }
    }
}
</script>

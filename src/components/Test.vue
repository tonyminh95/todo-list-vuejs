<template>
    <table class="table">
        <thead>
            <!-- table name + search -->
            <tr>
                <th>
                    <!-- table name + search -->
                    <h4 class="table__heading">task management</h4>
                    <div class="table__search">
                        <input type="text" placeholder="Search">
                    </div>
                    <!-- <div class="table__header">
                        <span class="heading-primary">{{ tableName }}</span>
                        <span class="table__header__search">
                            <input type="text" placeholder="Search" v-model="search">
                        </span>
                    </div> -->
                </th>
            </tr>
            <!-- create button + pagination -->
            <tr>
                <th>
                    create button + pagination
                </th>
                <!-- <th :colspan="headers.length">
                    <div class="table__header">
                        <div class="btn-create" @click="$emit('create')">new +</div>

                        <ul class="table__header__pagination">
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
                        </ul>
                    </div>
                </th> -->
            </tr>
            <!-- header + sort -->
            <tr>
                <th>
                    header + sort
                </th>
                <!-- <th v-for="(header, index) in headers" :key="index" :width="header.width">
                    {{ header.title }}
                    <span
                        v-if="typeof header.sort !== 'undefined'"
                        @click="sortCondition(header.title, header.type), header.sort = !header.sort"
                        class="u-cursor-pointer"
                    >
                        <fa-icon :icon="['fas', 'sort-amount-down-alt']" v-if="header.sort"></fa-icon>
                        <fa-icon :icon="['fas', 'sort-amount-up-alt']" v-else></fa-icon>
                    </span>
                </th> -->
            </tr>
            <!-- filter -->
            <tr>
                <th>
                    filter
                </th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-if="items.length == 0">
                <td :colspan="headers.length">
                    No data!!!
                </td>
            </tr>
            <tr v-else v-for="item in items" :key="item.id">
                <td v-for="(header, index) in headers" :key="index">
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
                </td>
            </tr> -->
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'Test'
}
</script>
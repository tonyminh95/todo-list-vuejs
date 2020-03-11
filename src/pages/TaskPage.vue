<template>
    <div style="width: 85%; margin: 0 auto; margin-top: 50px;">

        <table class="table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index" :width="header.width">
                        {{ header.title }}
                        <span v-if="typeof header.sort !== 'undefined'" @click="header.sort = !header.sort" class="table__sort-icon">
                            <fa-icon :icon="['fas', 'sort-amount-down-alt']" v-if="header.sort"></fa-icon>
                            <fa-icon :icon="['fas', 'sort-amount-up-alt']" v-else></fa-icon>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td v-for="(header, index) in headers" :key="index">
                        {{ item[header.title] }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td :colspan="headers.length">
                        <ul>
                            <li class="u-display-inline-block u-margin-right-small">
                                <dropdown :items="entries" @chosen-item="page_size = entries[$event]">
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
                    </td>
                </tr>
            </tfoot>
        </table>

    </div>
</template>

<script>
    import Pagination from '@/components/bases/BasePagination'
    import Dropdown from '@/components/bases/BaseDropdown'

    export default {
        name: 'TaskPage',

        components: {
            Pagination,
            Dropdown
        },

        data () {
            return {
                actions: new Map([
                    ['sort_asc', this.minh],
                    ['sort_desc', () => { alert(2) }]
                ]),
                page_size: 10,
                page_number: 1,
                entries: [10, 25, 50, 75, 100],
                headers: [
                    { width: '20%', title: 'title', sort: true },
                    { width: '50%', title: 'description', sort: false },
                    { width: '15%', title: 'deadline', sort: true },
                    { width: '15%', title: 'status' },
                ],
                bodies: [
                    {
                        id: 1,
                        title: 'Maecenas pharetra convallis posuere morbi',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus sed viverra tellus. Sed risus pretium quam vulputate dignissim. Amet massa vitae tortor condimentum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in.',
                        deadline: '13/02/2020',
                        status: 'open'
                    },
                    {
                        id: 2,
                        title: 'Volutpat blandit aliquam etiam erat',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Lobortis mattis aliquam faucibus purus in massa. Dignissim suspendisse in est ante in.',
                        deadline: '26/08/2020',
                        status: 'open'
                    },
                    {
                        id: 3,
                        title: 'Massa tincidunt dui ut ornare',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet sed euismod. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum velit laoreet id donec ultrices tincidunt. Tortor at auctor urna nunc id cursus metus aliquam eleifend.',
                        deadline: '03/05/2020',
                        status: 'in progress'
                    },
                    {
                        id: 4,
                        title: 'Diam phasellus vestibulum lorem sed',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel quam. Convallis posuere morbi leo urna. Eu lobortis elementum nibh tellus molestie nunc. Lacus vestibulum sed arcu non odio.',
                        deadline: '13/12/2020',
                        status: 'closed'
                    },
                ]
            }
        },

        computed: {
            items () {
                return this.bodies.slice(this.page_size * (this.page_number - 1), this.page_size * (this.page_number - 1) + this.page_size)
            }
        },

        methods: {
            minh () {
                return 123
            }
        },

        created () {
            console.log(this.actions.get('sort_asc').call(this))
        }
    }
</script>

<template>
    <div style="width: 85%; margin: 0 auto; margin-top: 50px;">

        <datatable
            :table_name="'task management'"
            :headers="headers"
            :bodies="bodies"

            :page_size="page_size"
            :page_number="page_number"
            :entries="entries"
        />

    </div>
</template>

<script>
    import Datatable from '@/components/Datatable'

    export default {
        name: 'TaskPage',

        components: {
            Datatable
        },

        data () {
            return {
                headers: [
                    { width: '20%', title: 'title', sort: true },
                    { width: '50%', title: 'description', sort: false },
                    { width: '15%', title: 'deadline', sort: true, type: 'ss' },
                    { width: '15%', title: 'status', type: 'status' },
                ],
                bodies: [
                    {
                        id: 1,
                        title: 'Maecenas pharetra convallis posuere morbi',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus sed viverra tellus. Sed risus pretium quam vulputate dignissim. Amet massa vitae tortor condimentum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in.',
                        deadline: '13/02/2020',
                        status: 0
                    },
                    {
                        id: 2,
                        title: 'Volutpat blandit aliquam etiam erat',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Lobortis mattis aliquam faucibus purus in massa. Dignissim suspendisse in est ante in.',
                        deadline: '26/08/2020',
                        status: 0
                    },
                    {
                        id: 3,
                        title: 'Massa tincidunt dui ut ornare',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet sed euismod. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum velit laoreet id donec ultrices tincidunt. Tortor at auctor urna nunc id cursus metus aliquam eleifend.',
                        deadline: '03/05/2020',
                        status: 1
                    },
                    {
                        id: 4,
                        title: 'Diam phasellus vestibulum lorem sed',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel quam. Convallis posuere morbi leo urna. Eu lobortis elementum nibh tellus molestie nunc. Lacus vestibulum sed arcu non odio.',
                        deadline: '13/12/2020',
                        status: 2
                    }
                ],




                status: new Map([
                    [0, 'open'],
                    [1, 'in progress'],
                    [2, 'closed']
                ]),
                page_size: 10,
                page_number: 1,
                entries: [10, 25, 50, 75, 100],

                // actions: new Map([
                //     ['sort_asc', this.sortAsc],
                //     ['sort_desc', () => { alert(2) }]
                // ]),
            }
        },

        computed: {
            items () {
                return this.bodies.slice(this.page_size * (this.page_number - 1), this.page_size * (this.page_number - 1) + this.page_size)
            },

            // test() {
                // this.actions.get('pagination')
                // this.actions.get('pagination')
                // this.actions.get('pagination')
                // this.actions.get('pagination')
            // },

            // test2() {
            //     return this.bodiesslice(this.page_size * (this.page_number - 1), this.page_size * (this.page_number - 1) + this.page_size)
            // }
        },

        methods: {
            // sortAsc () {
            //     return 123
            // },

            // sortDesc () {
            //     return 234
            // },

            // sort (index) {
            //     const header = this.headers[index]
            //     header.sort = !header.sort
            //     alert(header.title)
            //     console.log(this.actions.get('sort_asc').call(this))
            // },







            matchTheWord (word) {
                return word.replace(' ', '-')
            }
        }
    }
</script>
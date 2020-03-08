<template>
    <div style="width: 90%; margin: 0 auto; margin-top: 100px;">


        <!-- <table class="datatable">
            <thead>
                <tr>
                    <th v-for="(head, index) in heads" :key="index">{{ head }}</th>
                    <th v-if="button"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(body, index) in bodies" :key="index">
                    <td>{{ body.title }}</td>
                    <td>{{ body.description }}</td>
                    <td>{{ body.deadline }}</td>
                    <td>{{ body.status }}</td>
                    <td v-if="button" class="datatable__button-box">
                        <div v-for="(type, index) in button.types" :key="index" :class="[`btn-${type.item} btn-icon`]">
                            <fa-icon :icon="type.icon"></fa-icon>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> -->

        <div style="margin-bottom: 100px; text-align: center">
            <pagination />
        </div>

        <table class="datatable">
            <thead>
                <tr>
                    <th v-for="(head, index) in heads" :key="index">{{ head }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="body in bodies" :key="body.id">
                    <td>{{ body.title }}</td>
                    <td>{{ body.description }}</td>
                    <td>{{ body.deadline }}</td>
                    <td>{{ body.status }}</td>
                    <!-- <td v-if="body.propertyType == 'button'" class="datatable__button-box">
                        <div v-for="(type, index) in button.types" :key="index" :class="[`btn-${type.item} btn-icon`]">
                            <fa-icon :icon="type.icon"></fa-icon>
                        </div>
                    </td> -->
                </tr>
            </tbody>
        </table>

        <!-- <component
            :edit="true"
            :delete="true"
        /> -->
    </div>
</template>

<script>
    import Pagination from '@/components/bases/BasePagination'

    export default {
        name: 'DatatableTest',

        components: {
            Pagination
        },

        data() {
            return {
                // datas: [
                //     {
                //         title: 'title'
                //     },
                //     {
                //         title: 'description'
                //     },
                //     {
                //         title: 'deadline',
                //         propertyType: 'date'
                //     },
                //     {
                //         title: 'status',
                //         propertyType: 'status'
                //     },
                //     {
                //         propertyType: 'button'
                //     },
                //     {
                //         propertyType: 'button'
                //     }
                // ],


                heads: [ 'title', 'description', 'deadline', 'status' ],
                bodies: [
                    { id: 1, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 2, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 3, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 4, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 5, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 6, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 7, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 8, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 9, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 10, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 11, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 12, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 13, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 14, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 15, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 16, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 17, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 18, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 19, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 20, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 21, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 22, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 23, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 24, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 25, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 26, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 27, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 28, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 29, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 30, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 31, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 32, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 33, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 34, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 35, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 36, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 37, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 38, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 39, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 40, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 41, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 42, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 43, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 44, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 45, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 46, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 47, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 },
                    { id: 48, title: 'Minh', description: 'Đẹp trai vô đối', deadline: '2020/02/27', status: 1 }
                ],
                // button: {
                //     modal: true,
                //     link: true,
                //     types: [
                //         { item: 'edit', icon: ['far', 'edit'] },
                //         { item: 'delete', icon: ['far', 'trash-alt'] }
                //     ]
                // }

            }
        }
    }
</script>
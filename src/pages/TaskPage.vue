<template>
    <div style="width: 85%; margin: 0 auto; margin-top: 50px;">
        <datatable
            :table_name="'task management'"

            :headers="headers"

            :bodies="bodies"
            @create="createModalState = true"
            @edit="editModalState = true, targetId = $event"
            @delete="deleteModalState = true, targetId = $event"
        />

        <task-create v-if="createModalState" @closeModal="createModalState = false" />

        <task-edit v-if="editModalState" @closeModal="editModalState = false" :id="targetId" />

        <task-delete v-if="deleteModalState" @closeModal="deleteModalState = false" :id="targetId" />
    </div>
</template>

<script>
import Datatable from '@/components/bases/BaseDatatable'
import TaskCreate from '@/components/tasks/TaskCreate'
import TaskEdit from '@/components/tasks/TaskEdit'
import TaskDelete from '@/components/tasks/TaskDelete'

export default {
    name: 'TaskPage',

    components: {
        Datatable,
        TaskCreate,
        TaskEdit,
        TaskDelete
    },

    computed: {
        bodies () {
            return this.$store.state.tasks
        }
    },

    data () {
        return {
            // modal state
            createModalState: false,
            editModalState: false,
            deleteModalState: false,

            // action target
            targetId: null,

            // datatable
            headers: {
                // buttonActions: true,
                items: [
                    {
                        title: 'title',
                        width: '25%',
                        sort: 'asc',
                        type: 'text'
                    },
                    {
                        title: 'description',
                        width: '45%',
                        sort: 'asc',
                        type: 'text'
                    },
                    {
                        title: 'deadline',
                        width: '15%',
                        sort: 'desc',
                        type: 'date'
                    },
                    {
                        title: 'status',
                        width: '15%',
                        type: 'status',
                        status: ['open', 'in progress', 'closed']
                    }
                    // {
                    //     title: 'actions'
                    //     // width: '15%',
                    //     // type: 'button',
                    //     // buttons: [
                    //     //     { type: 'edit', icon: ['far', 'edit'] },
                    //     //     { type: 'delete', icon: ['far', 'trash-alt'] }
                    //     // ]
                    // }
                ]
            }
        }
    }
}
</script>
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
import Datatable from '@/components/Datatable'

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
            return this[this.bodyType]
        },

        fetchAllTasks () {
            return this.$store.getters.fetchTasks
        },

        fetchTodayTasks () {
            return this.$store.getters.fetchTodayTasks
        }
    },

    data () {
        return {
            // modal state
            createModalState: false,
            editModalState: false,
            deleteModalState: false,

            targetId: null,

            // datatable
            headers: [
                {
                    width: '20%',
                    title: 'title',
                    sort: true,
                    type: 'text'
                },
                {
                    width: '35%',
                    title: 'description',
                    sort: true,
                    type: 'text'
                },
                {
                    width: '15%',
                    title: 'deadline',
                    sort: true,
                    type: 'date'
                },
                {
                    width: '15%',
                    title: 'status',
                    type: 'status',
                    statusType: ['open', 'in progress', 'closed']
                },
                {
                    width: '15%',
                    type: 'button',
                    buttons: [
                        { type: 'edit', icon: ['far', 'edit'] },
                        { type: 'delete', icon: ['far', 'trash-alt'] }
                    ]
                }
            ],

            bodyType: 'fetchAllTasks'
        }
    }
}
</script>
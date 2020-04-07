<template>
    <div style="width: 85%; margin: 0 auto; margin-top: 50px;">

        <datatable
            :table_name="'task management'"
            :headers="headers"
            :bodies="bodies"
            @create="createModalState = true"
            @edit="editModalState = true"
            @delete="deleteModalState = true, targetId = $event"
        />

        <!-- modal -->
        <!-- <modal
            v-if="createModal"
            :modalType="'create'"
        >
            <div slot="header">
                Create Task
            </div>

            <div slot="body" class="form">
                <div class="form__item">
                    <label>Title</label>
                    <div>
                        <input type="text" v-model="task.title">
                    </div>
                </div>

                <div class="form__item">
                    <label>Description</label>
                    <div>
                        <textarea rows="5" v-model="task.description"></textarea>
                    </div>
                </div>

                <div class="form__item">
                    <label>Deadline</label>
                    <div>
                        <vue-datepicker :format="'dd/MM/yyyy'" v-model="task.deadline"></vue-datepicker>
                    </div>
                </div>

                <div class="form__item">
                    <label>Status</label>
                    <status-toggle-button
                        :entries="['open', 'in progress', 'closed']"
                        @chosen-target="task.status = $event"
                    />
                </div>
            </div>

            <div slot="footer">
                <span class="btn-cancel" @click="createModal = false">Cancel</span>
                <span class="btn-create" @click="createTask">Create</span>
            </div>
        </modal> -->

        <task-create v-if="createModalState" @closeModal="createModalState = false"/>

        <task-edit v-if="editModalState" @editTask="editTask"/>

        <task-delete v-if="deleteModalState" @deleteTask="deleteTask" @targetId="targetId"/>
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

            // crud
            task: {
                title: '',
                description: '',
                deadline: new Date(),
                status: 0
            },

            bodyType: 'fetchAllTasks'
        }
    },

    methods: {
        editTask (state) {
            this.editModalState = false

            if (state) {
//
            }
        },

        deleteTask (state) {
            this.deleteModalState = false

            if (state) {
                // this.$store.dispatch('deleteTask', targetTask)
            }
        }
    }
}
</script>
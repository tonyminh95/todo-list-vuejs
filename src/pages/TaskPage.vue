<template>
    <div style="width: 85%; margin: 0 auto; margin-top: 50px;">

        <datatable
            :table_name="'task management'"
            :headers="headers"
            :bodies="bodies"
            @create="createModal = true"
            @edit="editModal = true"
            @delete="deleteModal = true, targetObjectId = $event"
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

        <task-create/>
        <task-delete v-if="deleteModal" @deleteTask="deleteTask"/>
    </div>
</template>

<script>
    import Datatable from '@/components/Datatable'

import TaskCreate from '@/components/TaskCreate'
import TaskDelete from '@/components/TaskDelete'

    export default {
        name: 'TaskPage',

        components: {
            Datatable,
            TaskCreate,
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
                // modal
                createModal: false,
                editModal: false,
                deleteModal: false,
                targetObjectId: null,

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
            // crud
            createTask () {
                if (this.task.title != '')  {
                    this.createModal = false
                    this.$store.dispatch('createTask', this.task).then(() => {
                        this.task.title = ''
                        this.task.description = ''
                        this.task.deadline = new Date()
                        this.task.status = 0
                    })
                }
            },

            deleteTask (state) {
                this.deleteModal = false

                if (state) {
                    // this.$store.dispatch('deleteTask', targetTask)
                }
            }
        }
    }
</script>
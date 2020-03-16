<template>
    <div style="width: 85%; margin: 0 auto; margin-top: 50px;">

        <datatable
            :table_name="'task management'"
            :headers="headers"
            :bodies="bodies"
            @create="createModal = true"
            @edit="editModal = true"
            @delete="deleteModal = true, targetObjectId = $event"
        >
            <div slot="moreFilter" class="u-display-inline-block u-margin-left-small">
            </div>
        </datatable>

        <!-- modal -->
        <modal
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
        </modal>

        <modal
            v-if="deleteModal"
            :modalType="'delete'"
        >
            <div slot="header">
                Delete Task
            </div>

            <div slot="body">
                Do you really want to delete this task?
            </div>

            <div slot="footer">
                <span class="btn-cancel" @click="deleteModal = false">Cancel</span>
                <span class="btn-delete" @click="$store.dispatch('deleteTask', targetObjectId), deleteModal = false">Delete</span>
            </div>
        </modal>
    </div>
</template>

<script>
    import Datatable from '@/components/Datatable'
    import Modal from '@/components/bases/BaseModal'
    import StatusToggleButton from '@/components/bases/BaseToggleButton'

    export default {
        name: 'TaskPage',

        components: {
            Datatable,
            Modal,
            StatusToggleButton
        },

        computed: {
            bodies () {
                return this.$store.getters.fetchTask
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
                    deadline: '',
                    status: 0
                }
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
                        this.task.deadline = ''
                        this.task.status = 0
                    })
                }
            }
        }
    }
</script>
<template>
    <modal :modal_type="'create'" @close="$emit('closeModal')">
        <h2 slot="header" class="text-green">create task</h2>

        <div slot="body" class="form">
            <div class="form__row">
                <label>title</label>
                <input type="text" class="form__input" placeholder="Enter task title" v-model="task.title">
            </div>
            <div class="form__row">
                <label>description</label>
                <textarea rows="5" class="form__input" placeholder="Enter some description about the task" v-model="task.description"></textarea>
            </div>
            <div class="form__row">
                <label>deadline</label>
                <date-picker @chosenDate="task.deadline = $event" />
            </div>
            <div class="form__row">
                <label>status</label>
                <toggle-button :statusEntries="['open', 'in progress', 'closed']" @chosenStatus="task.status = $event" />
            </div>
        </div>

        <div slot="footer">
            <button class="btn-outline-cancel u-margin-right-2" @click="$emit('closeModal')">cancel</button>
            <button class="btn-create" @click="createTask">create</button>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/bases/BaseModal'
import ToggleButton from '@/components/bases/BaseToggleButton'
import DatePicker from '@/components/bases/BaseDateTimePicker'

export default {
    name: 'TaskCreate',

    components: {
        Modal,
        ToggleButton,
        DatePicker
    },

    data () {
        return {
            task: {
                title: null,
                description: null,
                deadline: null,
                status: null
            }
        }
    },

    methods: {
        createTask () {
            this.$store.dispatch('createTask', this.task).then(() => console.log('create success!'))
            this.$emit('closeModal')
        }
    }
}
</script>
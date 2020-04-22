<template>
    <modal :modal_type="'edit'" @close="$emit('closeModal')">
        <h2 slot="header" class="text-yellow">edit task</h2>

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
                <date-picker :targetDate="task.deadline" @chosenDate="task.deadline = $event" />
            </div>
            <div class="form__row">
                <label>status</label>
                <toggle-button :statusEntries="['open', 'in progress', 'closed']" :targetStatus="task.status" @chosenStatus="task.status = $event" />
            </div>
        </div>

        <div slot="footer">
            <button class="btn-outline-cancel u-margin-right-2" @click="$emit('closeModal')">cancel</button>
            <button class="btn-edit" @click="editTask">edit</button>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/bases/BaseModal'
import ToggleButton from '@/components/bases/BaseToggleButton'
import DatePicker from '@/components/bases/BaseDateTimePicker'

export default {
    name: 'TaskEdit',

    components: {
        Modal,
        ToggleButton,
        DatePicker
    },

    props: {
        id: {
            requried: true,
            type: Number
        }
    },

    computed: {
        task () {
            return this.$store.getters.getTaskById(this.id)
        }
    },

    methods: {
        editTask () {
            this.$store.dispatch('editTask', this.task).then(() => console.log('edit success!'))
            this.$emit('closeModal')
        }
    }
}
</script>
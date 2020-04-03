<template>
    <modal :modal_type="'create'" @close="$emit('createTask', false)">
        <div slot="header">
            Create Task
        </div>

        <div slot="body" class="form">
            <h4>title</h4>

            <input type="text" class="form-input">

            <h4>description</h4>

            <input type="text">

            <h4>deadline</h4>

            <vue-datepicker :format="'dd/MM/yyyy'"></vue-datepicker>

            <h4>status</h4>

            <status-toggle-button :statusEntries="['open', 'in progress', 'closed']"/>

            <!-- <div class="form__item">
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

            </div> -->
        </div>




        <div slot="footer">
            <span class="btn-create" @click="$emit('createTask', true)">Create</span>
            <span class="btn-cancel" @click="$emit('createTask', false)">Cancel</span>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/bases/BaseModal'
import StatusToggleButton from '@/components/StatusToggleButton'

export default {
    name: 'TaskCreate',

    components: {
        Modal,
        StatusToggleButton
    }
}
</script>
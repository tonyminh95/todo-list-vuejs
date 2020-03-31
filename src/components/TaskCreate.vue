<template>
    <modal :modal_type="'create'">
        <div slot="header">
            Create Task
        </div>

        <div slot="body" class="modal__content--body">
            <h4>title</h4>

            <input type="text">

            <h4>description</h4>

            <input type="text">

            <h4>deadline</h4>

            <input type="text">

            <h4>status</h4>

            <status-toggle-button
                :entries="['open', 'in progress', 'closed']"
                @chosen-target="task.status = $event"
            />

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
            <span class="btn-create" @click="$emit('deleteTask', true)">Create</span>
            <span class="btn-cancel" @click="$emit('deleteTask', false)">Cancel</span>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/bases/BaseModal'

export default {
    name: 'TaskCreate',

    components: {
        Modal
    }
}
</script>
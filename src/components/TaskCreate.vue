<template>
    <modal :modal_type="'create'" @close="$emit('createTask', false)">
        <h2 slot="header" class="text-green">create task</h2>

        <div slot="body" class="form">
            <div class="form__row">
                <label>title</label>
                <input type="text" class="form__input" placeholder="Enter task title">
            </div>
            <div class="form__row">
                <label>description</label>
                <textarea rows="5" class="form__input" placeholder="Enter some description about the task"></textarea>
            </div>
            <div class="form__row">
                <label>deadline</label>
                <input type="text" class="form__input">
                <!-- <vue-datepicker :format="'dd/MM/yyyy'"></vue-datepicker> -->
            </div>
            <div class="form__row">
                <label>status</label>
                <status-toggle-button :statusEntries="['open', 'in progress', 'closed']"/>
            </div>
        </div>

        <div slot="footer">
            <button class="btn-outline-cancel u-margin-right-2" @click="$emit('createTask', true)">cancel</button>
            <button class="btn-create" @click="$emit('createTask', false)">create</button>
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
<template>
    <modal :modal_type="'edit'" @close="$emit('editTask', false)">
        <h2 slot="header" class="text-yellow">edit task</h2>

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
                <date-picker :targetDate="'07/02/1002'"/>
            </div>
            <div class="form__row">
                <label>status</label>
                <toggle-button :statusEntries="['open', 'in progress', 'closed']" :targetStatus="1"/>
            </div>
        </div>

        <div slot="footer">
            <button class="btn-outline-cancel u-margin-right-2" @click="$emit('editTask', true)">cancel</button>
            <button class="btn-edit" @click="$emit('editTask', false)">edit</button>
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
    }
}
</script>
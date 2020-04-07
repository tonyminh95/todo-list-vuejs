<template>
    <modal :modal_type="'delete'" @close="$emit('deleteTask', false)">
        <h2 slot="header" class="text-red">Delete Task</h2>

        <div slot="body">
            <div class="text-uppercase">Do you really want to delete this task?</div>
        </div>

        <div slot="footer">
            <button class="btn-outline-cancel u-margin-right-2" @click="$emit('deleteTask', true)">cancel</button>
            <button class="btn-delete" @click="$emit('deleteTask', false)">create</button>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/bases/BaseModal'

export default {
    name: 'TaskDelete',

    components: {
        Modal
    }
}
</script>
<template>
    <modal :modal_type="'delete'">
        <div slot="header">
            Delete Task
        </div>

        <div slot="body">
            Do you really want to delete this task?
        </div>

        <div slot="footer">
            <span class="btn-delete" @click="$emit('deleteTask', true)">Delete</span>
            <span class="btn-cancel" @click="$emit('deleteTask', false)">Cancel</span>
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
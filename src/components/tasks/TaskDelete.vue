<template>
    <modal :modal_type="'delete'" @close="$emit('closeModal')">
        <h2 slot="header" class="text-red">Delete Task</h2>

        <div slot="body">
            <div class="text-uppercase">Do you really want to delete this task?</div>
        </div>

        <div slot="footer">
            <button class="btn-outline-cancel u-margin-right-2" @click="$emit('closeModal')">cancel</button>
            <button class="btn-delete" @click="deleteTask">create</button>
        </div>
    </modal>
</template>

<script>
import Modal from '@/components/bases/BaseModal'

export default {
    name: 'TaskDelete',

    components: {
        Modal
    },

    props: {
        id: {
            required: true,
            type: Number
        }
    },

    methods: {
        deleteTask () {
            this.$store.dispatch('deleteTask', this.id).then(() => console.log('delete success!'))
            this.$emit('closeModal')
        }
    }
}
</script>
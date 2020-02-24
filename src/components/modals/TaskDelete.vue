<template>
    <base-modal>
        <div slot="header" class="text-danger">Delete task</div>

        <div slot="body">Do you want to delete this Task?</div>

        <div slot="footer">
            <a class="btn-cancel mr-3" @click.prevent="$emit('cancelDelete')">Cancel</a>
            <a class="btn-delete" @click.prevent="$emit('delete')">Delete</a>
        </div>
    </base-modal>
</template>

<script>
    import BaseModal from '../bases/BaseModal'

    export default {
        name: 'TaskDelete',

        components: {
            BaseModal
        }
    }
</script>
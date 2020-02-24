<template>
    <modal>
        <div slot="header" class="text-danger">Delete task</div>

        <div slot="body">Do you want to delete this Task?</div>

        <div slot="footer">
            <a
                class="btn-cancel mr-3"
                @click.prevent="$emit('cancelDelete')"
            >
                Cancel
            </a>

            <a class="btn-delete">Delete</a>
        </div>
    </modal>
</template>

<script>
    import Modal from '../bases/Modal'

    export default {
        name: 'TaskDelete',

        components: {
            Modal
        }
    }
</script>
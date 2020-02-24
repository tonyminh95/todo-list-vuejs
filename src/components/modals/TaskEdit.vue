<template>
    <base-modal>
        <div slot="header" class="text-warning">Edit task</div>

        <div slot="body">
            <table class="table table-borderless" width="100%">
                <!-- <tr>
                    <td width="30%">Title</td>
                    <td width="70%">
                        <input v-model="todo.title" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>
                        <textarea rows="5" v-model="todo.description" class="form-control"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>Deadline</td>
                    <td>
                        <vue-datepicker v-model="todo.deadline"></vue-datepicker>
                    </td>
                </tr> -->
                <tr>
                    <td>Status</td>
                    <td>
                        <base-toggle-button :status="todo.status"></base-toggle-button>
                    </td>
                </tr>
            </table>
        </div>

        <div slot="footer">
            <a class="btn-cancel mr-3" @click.prevent="$emit('cancelEdit')">Cancel</a>
            <a class="btn-edit" @click.prevent="$emit('edit')">Edit</a>
        </div>
    </base-modal>
</template>

<script>
    import BaseModal from '../bases/BaseModal'
    import BaseToggleButton from '../bases/BaseToggleButton'

    export default {
        name: 'TaskEdit',

        props: {
            todo: {
                type: Object,
                required: true
            }
        },

        components: {
            BaseModal,
            BaseToggleButton
        }
    }
</script>
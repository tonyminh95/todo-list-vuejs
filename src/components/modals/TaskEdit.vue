<template>
    <base-modal>
        <div slot="header" class="text-warning">Edit task</div>

        <div slot="body">
            <table class="table table-borderless" width="100%">
                <tr>
                    <td>Title</td>
                    <td>
                        <input v-model="item.title" class="form-control">
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>
                        <textarea rows="5" v-model="item.description" class="form-control"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>Deadline</td>
                    <td>
                        <vue-datepicker v-model="item.deadline" :format="'yyyy/MM/dd'"></vue-datepicker>
                    </td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>
                        <status-toggle-button :status="todo.status" @changeStatus="item.status = $event"></status-toggle-button>
                    </td>
                </tr>
            </table>
        </div>

        <div slot="footer">
            <a class="btn-cancel mr-3" @click.prevent="$emit('cancelEdit')">Cancel</a>
            <a class="btn-edit" @click.prevent="$emit('edit', item)">Edit</a>
        </div>
    </base-modal>
</template>

<script>
    import BaseModal from '../bases/BaseModal'
    import StatusToggleButton from '../buttons/StatusToggleButton'

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
            StatusToggleButton
        },

        data () {
            return {
                item: {...this.todo}
            }
        }
    }
</script>

<style scoped>
    table td:first-child {
        width: 30%;
        text-align: right;
    }

    input[type=text] {
        border-radius: 5px;
        border: 1px solid lightgray;
        padding: 5px 10px;
        width: 100%;
    }
</style>

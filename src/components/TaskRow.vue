<template>
    <tr>
        <td>{{ todo.title }}</td>
        <td>{{ todo.description }}</td>
        <td>{{ todo.deadline }}</td>
        <td>
            <span :class="statusClass(todo.status)">{{ statusLabel(todo.status) }}</span>
        </td>
        <td class="text-center">
            <a class="btn-edit"><fa-icon :icon="['far', 'edit']"></fa-icon></a>
        </td>
        <td class="text-center">
            <a class="btn-delete"><fa-icon :icon="['far', 'trash-alt']"></fa-icon></a>
        </td>
    </tr>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'TaskRow',

        props: {
            todo: Object
        },

        computed: {
            ...mapGetters ({
                statusLabel: 'getStatusLabel',
                statusClass: 'getStatusClass'
            })
        }
    }
</script>
<template>
    <tr>
        <td>{{ todo.title }}</td>
        <td>{{ todo.description }}</td>
        <td>{{ todo.deadline }}</td>
        <td>{{ todo.status }}</td>
        <td><fa-icon :icon="['far', 'edit']" class="soft-red"></fa-icon></td>
        <td>Delete</td>
    </tr>
</template>

<script>
export default {
    name: 'TaskRow',

    props: {
        todo: Object
    },

    data() {
        return {
            click: false
        }
    }
}
</script>

<style scoped>
    input {
        border: none;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(117,117,117,0.5);
        -moz-box-shadow: 0px 0px 5px 0px rgba(117,117,117,0.5);
        box-shadow: 0px 0px 5px 0px rgba(117,117,117,0.5);
        outline: none;
    }
</style>

<template>
    <tr>
        <td @click="click = true">
            <div v-if="!click">{{ todo.title }}</div>
            <input v-else ref="title" v-model="todo.title">
        </td>
        <td>{{ todo.description }}</td>
        <td>{{ todo.deadline }}</td>
        <td>{{ todo.status }}</td>
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

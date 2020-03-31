<template>
    <div>
        <span v-for="(item, index) in status" :key="index" :class="item.class" @click="target = index">
            {{ item.title }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'StatusToggleButton',

    props: {
        statusEntries: {
            required: true,
            type: Array
        }
    },

    computed: {
        status () {
            return this.statusEntries.map((status, index) => ({ title: status, class: index == this.target ? `btn-${status.replace(' ', '-')}` : 'btn-default' }))
        }
    },

    data () {
        return {
            target: null
        }
    }
}
</script>
<template>
    <div>
        <button v-for="(item, index) in status" :key="index" :class="item.class" @click="target = index" class="u-margin-right-2">
            {{ item.title }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'BaseToggleButton',

    props: {
        statusEntries: {
            required: true,
            type: Array
        }
    },

    computed: {
        status () {
            return this.statusEntries.map((status, index) => ({ title: status, class: index == this.target ? `btn-${status.replace(' ', '')}` : 'btn-default' }))
        }
    },

    data () {
        return {
            target: null
        }
    }
}
</script>
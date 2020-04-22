<template>
    <div>
        <button v-for="(item, index) in status" :key="index" :class="item.class" @click="select(index)" class="u-margin-right-2">
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
        },

        targetStatus: {
            type: Number,
            default: null
        }
    },

    computed: {
        status () {
            return this.statusEntries.map((status, index) => ({ title: status, class: index == this.target ? `btn-${status.replace(' ', '')}` : 'btn-default' }))
        }
    },

    data () {
        return {
            target: this.targetStatus
        }
    },

    methods: {
        select (index) {
            this.target = index
            this.$emit('chosenStatus', this.target)
        }
    }
}
</script>
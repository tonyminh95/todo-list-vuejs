<template>
    <div>
        <span
            v-for="(item, index) in a"
            :key="index"
            :class="toggleClass"
            @click="b(index)"
        >
            {{ item }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'BaseToggleButton',

    computed: {
        toggleClass (item) {
            console.log(`btn-${this.a[item]}`)
            return `btn-${this.a[item]}`
        }
    },

    data() {
        return {
            a: ['default', 'default', 'default'],
            targetStatus: 0
        }
    },

    methods: {
        b (indexa) {
            const test = this.a.map((object, index) => )
            console.log(this.a)
        }
    }
}
</script>

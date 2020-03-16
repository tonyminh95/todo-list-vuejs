<template>
    <div>
        <span
            v-for="(item, index) in items"
            :key="index"
            :class="`btn-${item.target}`"
            @click="changeTarget(index)"
        >
            {{ item.title }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'BaseToggleButton',

    props: {
        entries: {
            required: true,
            type: Array
        }
    },

    data() {
        return {
            items: null,
        }
    },

    methods: {
        changeTarget (targetObject) {
            this.items = this.items.map((item, index) => {
                return {
                    title: item.title,
                    target: index == targetObject ? this.items[targetObject].title.replace(' ', '-') : 'default'
                }
            })

            this.$emit('chosen-target', targetObject)
        }
    },

    created () {
        this.items = this.entries.map(entry => {
            return {
                title: entry,
                target: 'default'
            }
        })
    }
}
</script>
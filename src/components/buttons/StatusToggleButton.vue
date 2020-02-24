<template>
    <div>
        <a
            v-for="(baseStatus, index) in baseStatuses"
            :key="index"
            class="mr-2"
            :class="getToggleClass(baseStatus.status)"
            @click.prevent="changeStatus(index)"
        >
            {{ baseStatus.title }}
        </a>
    </div>
</template>

<script>
    export default {
        name: 'StatusToggleButton',

        props: {
            status: {
                type: Number,
                required: true
            }
        },

        data () {
            return {
                baseStatuses: [
                    { title: 'open', status: 0 },
                    { title: 'is progress', status: 0 },
                    { title: 'closed', status: 0 }
                ],
                currentStatus: this.status
            }
        },

        methods: {
            getToggleClass (status) {
                switch (status) {
                    case 1:
                        return 'btn-create'

                    case 2:
                        return 'btn-edit'

                    case 3:
                        return 'btn-delete'

                    default:
                        return 'btn-cancel'
                }
            },

            changeStatus (index) {
                this.baseStatuses.map((baseStatus, key) => baseStatus.status = (key == index ? index + 1 : 0))
                this.$emit('changeStatus', index + 1)
            }
        },

        created () {
            this.baseStatuses[this.currentStatus - 1].status = this.currentStatus
        }
    }
</script>
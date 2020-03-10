<template>
    <ul class="condition">
        <li>
            <dropdown :items="entries" @chosen-item="chosenItem">
                <div slot="dropdownButton">
                    Show <span class="u-border-bottom">{{ numberOfEntries }}</span> entries
                    <fa-icon :icon="['fas', 'sort-down']"></fa-icon>
                </div>
            </dropdown>
        </li>
        <li>
            Filter <input >
        </li>
    </ul>
</template>

<script>
    import Dropdown from '@/components/bases/BaseDropdown'

    export default {
        name: 'TableCondition',

        components: {
            Dropdown
        },

        data () {
            return {
                numberOfEntries: 10,
                entries: [10, 25, 50, 75, 100]
            }
        },

        methods: {
            chosenItem (index) {
                this.numberOfEntries = this.entries[index]
                this.$emit('chosen-item', this.numberOfEntries)
            }
        }
    }
</script>
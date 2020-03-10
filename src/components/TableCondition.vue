<template>
    <div>
        <ul class="condition">
            <!--  -->
            <li>
                <dropdown :items="items">
                    <div slot="dropdownButton">
                        Show <span class="u-border-bottom">{{ numberOfEntries }}</span> entries
                        <fa-icon :icon="['fas', 'sort-down']"></fa-icon>
                    </div>
                </dropdown>
            </li>
            <li>
                <dropdown :items="items">
                    <div slot="dropdownButton">
                        Filter <fa-icon :icon="['fas', 'sort-down']"></fa-icon>
                    </div>
                </dropdown>
            </li>
            <li>
                <dropdown :items="items">
                    <div slot="dropdownButton">
                        Sort <fa-icon :icon="['fas', 'sort-down']"></fa-icon>
                    </div>
                </dropdown>
            </li>
        </ul>
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'
    import Dropdown from '@/components/bases/BaseDropdown'

    export default {
        name: 'TableCondition',

        components: {
            Dropdown
        },

        directives: {
            ClickOutside
        },

        data () {
            return {
                numberOfEntries: 10,
                showDropdown: false,
                items: [1, 2, 3, 4]
            }
        },

        methods: {
            hideDropdown () {
                this.showDropdown = false
            }
        }
    }
</script>
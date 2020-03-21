<template>
    <div>
        <select v-model="filter">
            <option v-for="(filter, index) in filters" :key="index" :value="filter">
                {{ filter.title }}
            </option>
        </select>

        <input v-if="filter.type === 'text'" type="text" placeholder="Search" class="u-margin-left-small">

        <select v-if="filter.type === 'status'" class="u-margin-left-small" @change="onChange($event)" >
            <option v-for="(option, index) in filter.statusType" :key="index" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'DatatableFilter',

    props: {
        filters: {
            required: true,
            type: Array
        }
    },

    data() {
        return {
            filter: this.filters[0]
        }
    },

    methods: {
        onChange (event) {
            console.log(event.target.value)
        }
    },
}
</script>

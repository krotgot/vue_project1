<template>
    <label>
        This type is {{ type }}
        This value is {{ value }}
        <input 
            :type="type"
            v-model="value"
            @change="changeInput"
        >
    </label>
</template>
<script>
export default {
name: 'x-input',
props: {
type: String
},
data() {
    return {
        value: null
    }
},
methods: {
    changeInput() {
        this.$emit('hasChanged', this.value)
    }
}

}
</script>
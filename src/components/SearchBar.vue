<template>
    <div>
        <!-- directive, can use 'v-on:' or '@' to set up event listener -->
        <input @input="onInput" />
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        methods: {
            onInput(event) {
                    // emit an event to the parent component (App)
                    this.$emit('termChange', event.target.value) 
                }
            }
        };
</script>

<style scoped>
    input {
        width: 75%;
    }
    div {
        text-align: center;
        margin: 20px;
    }
</style>

 
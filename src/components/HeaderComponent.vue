<script>
import SearchComponent from './SearchComponent.vue';

export default {
    name: "HeaderComponent",
    components: {
        SearchComponent
    }
}
</script>

<template>
    <header>
        <h1>Boolflix</h1>
        <SearchComponent @search="$emit('search')" />
    </header>
</template>

<style scoped>
header {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

h1 {
    color: red;
    text-transform: uppercase;
    height: 80px;
    line-height: 80px;
}
</style>
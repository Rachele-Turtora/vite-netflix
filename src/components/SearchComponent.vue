<script>
import { store } from "../store";

export default {
    name: "SearchComponent",
    emits: ["search"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <input type="text" placeholder="Search" @change="$emit('search')" v-model="store.searchKey">
        <button @change="$emit('search')">Invio</button>
    </div>
</template>

<style scoped>
div {
    margin: 10px;
}
</style>
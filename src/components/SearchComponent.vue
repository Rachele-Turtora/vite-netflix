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
    <input type="text" placeholder="Search" @change="$emit('search')" v-model="store.searchKey">
    <button @change="$emit('search')">Invio</button>
</template>
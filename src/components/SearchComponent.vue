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
    <div class="search">
        <input type="text" placeholder="Search" @change="$emit('search')" v-model="store.searchKey">
        <button @change="$emit('search')">Invio</button>
    </div>
</template>

<style scoped>
.search {
    margin: 10px;
}

input,
button {
    padding: 8px;
    margin-left: 5px;
    border-radius: 5px;
}

button {
    background-color: red;
    color: white;
    font-weight: 700;
}
</style>
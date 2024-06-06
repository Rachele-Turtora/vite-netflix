<script>
export default {
    name: "HeaderComponent"
}
</script>

<template>
    <header>
        <h1>Boolflix</h1>
    </header>
</template>

<style scoped>
header {
    background-color: black;
}

h1 {
    color: red;
    text-transform: uppercase;
    height: 80px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
</style>
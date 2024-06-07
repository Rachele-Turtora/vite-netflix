<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "MyApp",
  components: {
    HeaderComponent,
    MainComponent
  },
}
</script>

<template>
  <HeaderComponent />
  <MainComponent />
</template>

<style scoped></style>

<template>
  <div class="app">
    <card />
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style scoped>
.app {
  margin: 0 auto;
}
</style>

<template>
  <div class="app">
    <card />
  </div>
</template>

<script>
import Card from "./components/UploadFile.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style>
.app {
  margin-top: calc(var(--space--medium) * 3);
  margin-left: auto;
  margin-right: auto;
  padding: var(--space--medium);
}

@media (--viewport--medium) {
  .app {
    width: var(--breakpoint--medium);
  }
}

@media (--viewport--medium-up) {
  .app {
    width: var(--breakpoint--large);
    margin-left: auto;
    margin-right: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

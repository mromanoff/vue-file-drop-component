<template>
  <div class="file-list">
    <template v-for="(item, index) of [1, 2, 3]">
      <file-item class="file-list__item" :key="index">{{ item }}</file-item>
    </template>
  </div>
</template>

<script>
import FileItem from "./FileItem";
export default {
  name: "FileList",

  components: {
    FileItem,
  },
};
</script>

<style scoped>
.file-list {
  /* BLOCK */
}

.file-list__item {
  margin-bottom: var(--space--medium);
}
</style>

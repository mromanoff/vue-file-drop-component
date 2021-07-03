<template>
  <ul class="file-list">
    <transition-group name="list">
      <template v-for="({ name, type, size }, index) of files">
        <file-item
          :name="name"
          :type="type"
          :size="size"
          class="file-list__item"
          :key="index"
          @cancel="$emit('cancel', name)"
        />
      </template>
    </transition-group>
  </ul>
</template>

<script>
import FileItem from "./FileItem";

export default {
  name: "FileList",

  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    FileItem,
  },
};
</script>

<style scoped>
.file-list {
  padding-left: 0;
}

.file-list__item {
  margin-bottom: var(--space--large);
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

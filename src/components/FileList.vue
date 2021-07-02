<template>
  <ul class="file-list">
    <transition-group name="list">
      <template v-for="(item, index) of files">
        <file-item
          :file-name="item.fileName"
          :file-type="item.fileType"
          :upload-status="item.uploadStatus"
          class="file-list__item"
          :key="index"
          @cancel="handleCancelUpload"
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

  methods: {
    /***
     * Handle Cancel Upload
     * @param fileName
     */
    handleCancelUpload(fileName) {
      console.log("cancel upload", fileName);
      this.files = this.files.filter((file) => file.fileName !== fileName);
    },
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

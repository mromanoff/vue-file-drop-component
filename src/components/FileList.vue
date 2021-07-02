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

const MOCK = [
  {
    fileName: "some-file-name-1.psd",
    fileType: "PSD",
    uploadStatus: 100,
  },
  {
    fileName: "im-a-very-long-file-name-2.pdf",
    fileType: "PDF",
    uploadStatus: 60,
  },
  {
    fileName: "another-file-name-3.pdf",
    fileType: "PNG",
    uploadStatus: 40,
  },
];

export default {
  name: "FileList",

  data() {
    return {
      files: MOCK,
    };
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
  /* BLOCK */
}

.file-list__item {
  margin-bottom: var(--space--medium);

  @media (--viewport--medium-up) {
    margin-bottom: var(--space--large);
  }
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

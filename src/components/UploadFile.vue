<template>
  <section class="upload-file">
    <h1 class="upload-file__header">Upload File</h1>
    <file-list
      :files="files"
      class="upload-file__file-list"
      @cancel="handleCancelUpload"
    />

    <transition name="fade">
      <div v-if="error" class="upload-file__error">
        <h4>{{ error }}</h4>
        <h5>Only these are permitted:</h5>
        <ul style="margin-bottom: 0; font-size: var(--font-size--small)">
          <li v-for="(item, index) of allowedMimeFiles" :key="index">
            {{ item }}
          </li>
        </ul>
        <button @click="error = null">
          <icon class="upload-file__close-error" name="close" />
        </button>
      </div>
    </transition>

    <file-uploader class="upload-file__file-uploader" @upload="handleUpload" />
  </section>
</template>

<script>
import FileList from "./FileList";
import FileUploader from "./FileDrop";
import Icon from "./Icon";
import { ALLOWED_FILES } from "@/constants";

export default {
  name: "UploadFile",
  components: {
    FileList,
    FileUploader,
    Icon,
  },

  data() {
    return {
      files: [],
      error: null,
      allowedMimeFiles: Object.values(ALLOWED_FILES),
    };
  },

  methods: {
    /**
     * Handle Upload
     * @param files
     */
    handleUpload(files) {
      this.error = null; // reset error

      files.forEach((file) => {
        if (!files) {
          this.error = "Not supported file";
        } else if (!this.allowedMimeFiles.includes(file.type.toLowerCase())) {
          this.error = `This file type ${file.type} is not allowed to upload`;
        } else {
          const { name, type, size } = file;
          this.files.push({ name, type, size });
        }
      });

      // clean up
      this.clearFileInput();
    },

    /***
     * Handle Cancel Upload
     * @param fileName
     */
    handleCancelUpload(fileName) {
      this.files = this.files.filter((file) => file.name !== fileName);
      // clean up
      this.clearFileInput();
    },

    /**
     * Clear File Input field
     */
    clearFileInput() {
      document.getElementById("file-input").value = null;
    },
  },
};
</script>

<style scoped>
.upload-file {
  min-height: 10rem;
  background-color: var(--color--white);
  border-radius: var(--space--xLarge);
  padding: var(--space--xLarge);
}

.upload-file__header {
  font-size: responsive 1.5rem 2.25rem;
  font-range: 420px 1280px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: var(--space--xLarge);
}

.upload-file__file-list {
  margin-bottom: var(--space--xLarge);
}

.upload-file__error {
  position: relative;
  color: var(--color--white);
  background-color: var(--color--red500);
  padding: var(--space--small) var(--space--medium);
  margin: var(--space--medium) 0;
  border-radius: 6px;
}

.upload-file__close-error {
  cursor: pointer;
  position: absolute;
  right: var(--space--xSmall);
  top: var(--space--xSmall);
}
</style>

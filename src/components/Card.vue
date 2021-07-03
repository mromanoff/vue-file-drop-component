<template>
  <section class="card">
    <h1 class="card__header">Upload File</h1>
    <file-list :files="files" class="card__file-list" />

    <div v-if="error" class="card__error">
      <h4>{{ error }}</h4>
      <h5>Only these are permitted:</h5>
      <ul style="margin-bottom: 0; font-size: var(--font-size--small)">
        <li v-for="(item, index) of allowedMimeFiles" :key="index">
          {{ item }}
        </li>
      </ul>
      <button @click="error = null">
        <icon class="card__close-error" name="close" />
      </button>
    </div>

    <file-uploader class="card__file-uploader" @upload="handleUpload" />
  </section>
</template>

<script>
import FileList from "./FileList";
import FileUploader from "./FileUploader";
import Icon from "./Icon";
import { ALLOWED_FILES } from "@/constants";

export default {
  name: "Card",
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
     * @param file
     */
    handleUpload(file) {
      this.error = null; // reset error

      if (!file) {
        this.error = "Not supported file";
      } else if (!this.allowedMimeFiles.includes(file.type.toLowerCase())) {
        this.error = `This file type ${file.type} is not allowed to upload`;
      } else {
        this.files.push({
          fileName: file.name,
          fileType: file.type,
          filesize: file.size,
          uploadStatus: 100,
        });
      }
    },
  },
};
</script>

<style scoped>
.card {
  min-height: 10rem;
  background-color: var(--color--white);
  border-radius: var(--space--xLarge);
  padding: var(--space--xLarge);
}

.card__header {
  font-size: responsive 1.5rem 2.25rem;
  font-range: 420px 1280px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: var(--space--xLarge);
}

.card__file-list {
  margin-bottom: var(--space--xLarge);
}

.card__error {
  position: relative;
  color: var(--color--white);
  background-color: var(--color--red500);
  padding: var(--space--small) var(--space--medium);
  margin: var(--space--medium) 0;
  border-radius: 6px;
}

.card__close-error {
  cursor: pointer;
  position: absolute;
  right: var(--space--xSmall);
  top: var(--space--xSmall);
}
</style>

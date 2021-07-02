<template>
  <section class="card">
    <h1 class="card__header">Upload File</h1>
    <file-list :files="files" class="card__file-list" />
    <file-uploader class="card__file-uploader" @upload="handleFileAdd" />
  </section>
</template>

<script>
import FileList from "./FileList";
import FileUploader from "./FileUploader";
export default {
  name: "Card",
  components: {
    FileList,
    FileUploader,
  },

  data() {
    return {
      files: [],
    };
  },

  methods: {
    handleFileAdd(file) {
      debugger;

      if (!file) return; // print an error
      this.files.push({
        fileName: file.name,
        fileType: file.type,
        filesize: file.size,
        uploadStatus: 100,
      });
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

.card__file-uploader {
}
</style>

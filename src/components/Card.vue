<template>
  <section class="card">
    <h1 class="card__header">Upload File</h1>
    <file-list class="card__file-list" />
    <file-uploader class="card__file-uploader" />
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
};
</script>

<style scoped>
.card {
  width: 50rem;
  min-height: 10rem;
  background-color: var(--color--white);
  border-radius: var(--space--xLarge);
  padding: var(--space--xLarge);
}

.card__header {
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

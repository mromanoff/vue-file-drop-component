<template>
  <div class="file-uploader">
    <h3 class="file-uploader__title">
      Drag file here <br />
      or
      <a role="button" href="#" @click="handleUpload">browse</a>
    </h3>
  </div>
</template>

<script>
export default {
  name: "FileUploader",

  methods: {
    handleUpload(event) {
      event.preventDefault();
      console.log("upload file");
    },
  },
};
</script>

<style scoped>
.file-uploader {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dashed #d1ddf8;
  border-radius: calc(var(--space--medium) * 2);
  min-height: calc(var(--space--medium) * 20);
  text-align: center;
}

.file-uploader__title {
  text-transform: uppercase;
}
</style>

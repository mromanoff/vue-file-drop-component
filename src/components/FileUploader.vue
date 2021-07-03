<template>
  <div
    class="file-uploader"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <input
      type="file"
      class="file-uploader__input"
      name="filed"
      id="file-input"
      @change="handleChange"
      ref="file"
      :accept="allowedFileExtensions"
    />

    <div class="file-uploader__title">
      Drag file here <br />
      or
      <label for="file-input" class="file-uploader__button">browse</label>
    </div>
  </div>
</template>

<script>
import { ALLOWED_FILES } from "@/constants";
export default {
  name: "FileUploader",

  props: {
    value: {
      type: Object,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      fileList: [],
    };
  },

  computed: {
    allowedFileExtensions() {
      return Object.keys(ALLOWED_FILES).map((item) => `.${item}`);
    },
  },

  methods: {
    handleChange() {
      this.$emit("upload", this.$refs.file.files[0]);
    },

    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("file-uploader--dragover")) {
        event.currentTarget.classList.add("file-uploader--dragover");
      }
    },

    dragleave(event) {
      // Clean up
      event.currentTarget.classList.remove("file-uploader--dragover");
    },

    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.handleChange(); // Trigger the handleChange event manually
      // Clean up
      event.currentTarget.classList.remove("file-uploader--dragover");
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
  font-size: responsive 1.25rem 2rem;
  font-range: 375px 1280px;
  font-weight: var(--font-weight--medium);
}

.file-uploader__input {
  width: 1px;
  height: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}

.file-uploader__button {
  cursor: pointer;
  color: var(--link-color);
}

.file-uploader__button:hover {
  color: var(--link-color--onHover);
  text-decoration: underline;
}

.file-uploader--dragover {
  background-color: var(--color--green50);
}
</style>

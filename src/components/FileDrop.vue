<template>
  <div
    class="file-drop"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <input
      type="file"
      multiple
      class="file-drop__input"
      name="fields[file-input][]"
      id="file-input"
      @change="handleChange"
      ref="file"
      :accept="allowedFileExtensions"
    />

    <div class="file-drop__title">
      Drag file here <br />
      or
      <label for="file-input" class="file-drop__button">browse</label>
    </div>
  </div>
</template>

<script>
import { ALLOWED_FILES } from "@/constants";
export default {
  name: "FileDrop",

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
    /**
     * Handle Change
     */
    handleChange() {
      this.$emit("upload", this.$refs.file.files);
    },

    /***
     * Dragover
     * @param event
     */
    dragover(event) {
      event.preventDefault();
      if (!event.currentTarget.classList.contains("file-drop--dragover")) {
        event.currentTarget.classList.add("file-drop--dragover");
      }
    },

    /**
     * Dragleave
     * @param event
     */
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.remove("file-drop--dragover");
    },

    /**
     * Drop
     * @param event
     */
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.handleChange(); // Trigger the handleChange event manually
      // Clean up
      event.currentTarget.classList.remove("file-drop--dragover");
    },
  },
};
</script>

<style scoped>
.file-drop {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dashed #d1ddf8;
  border-radius: calc(var(--space--medium) * 2);
  min-height: calc(var(--space--medium) * 20);
  text-align: center;
}

.file-drop__title {
  text-transform: uppercase;
  font-size: responsive 1.25rem 2rem;
  font-range: 375px 1280px;
  font-weight: var(--font-weight--medium);
}

.file-drop__input {
  width: 1px;
  height: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}

.file-drop__button {
  cursor: pointer;
  color: var(--link-color);
}

.file-drop__button:hover {
  color: var(--link-color--onHover);
  text-decoration: underline;
}

.file-drop--dragover {
  background-color: var(--color--green50);
}
</style>

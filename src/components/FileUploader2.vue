<template>
  <div :class="{ disabled: disabled }" class="SImageUploader">
    <div class="dropzone" @dragover.prevent @drop.prevent="onFileChange">
      <div v-if="preview" class="SImageUploader_preview">
        <img :src="preview" alt="Preview" />
        <s-button variation="text" size="small" @click="$emit('input', null)">
          Remove
          <s-icon slot="icon-right" name="close" size="xxSmall" />
        </s-button>
      </div>

      <label v-else class="text-white text-center q-px-md q-py-xs">
        Select or Drop an Image
        <input
          v-if="!value"
          :value="value"
          :disabled="disabled"
          type="file"
          name="image"
          @change="onFileChange"
        />
      </label>
    </div>
  </div>
</template>

<script>
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default {
  name: "SImageUploader",

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
      preview: null,
    };
  },

  watch: {
    value() {
      this.setPreview();
    },
  },

  methods: {
    onFileChange(e) {
      e.preventDefault();
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      this.$emit("input", files[0]);
    },
    setPreview() {
      if (!this.value) {
        this.preview = null;
      } else {
        toBase64(this.value).then((res) => {
          this.preview = res;
        });
      }
    },
  },
};
</script>

<style scoped>
.dropzone {
  border: 5px dashed #727272;
  background: #626262;
  border-radius: 2px;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropzone > label {
  background: #d71921;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  position: relative;
  padding: 10px;
}

.dropzone > label input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.SImageUploader_preview img {
  max-width: 150px;
  max-height: 150px;
}
</style>

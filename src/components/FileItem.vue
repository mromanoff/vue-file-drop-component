<template>
  <li class="file-item">
    <file-icon class="file-item__icon" size="xxLarge" :name="fileIconName" />

    <div class="file-item__name">{{ fileName }}</div>
    <div class="file-item__status">
      <icon
        v-if="uploadStatus === 100"
        size="medium"
        name="check"
        color="green"
      />
      <button
        v-else
        class="file-item__cancel"
        @click="$emit('cancel', fileName)"
      >
        <icon size="medium" name="close" color="red" />
      </button>
    </div>
    <progress-bar
      class="file-item__progress"
      size="xSmall"
      :value="uploadStatus"
    />
  </li>
</template>

<script>
import ProgressBar from "./ProgressBar";
import Icon from "./Icon";
import FileIcon from "./FileIcon";
import { ALLOWED_FILES } from "@/constants";

export default {
  name: "FileItem",
  components: {
    Icon,
    FileIcon,
    ProgressBar,
  },

  props: {
    fileName: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      default: "UNKNOWN",
    },

    uploadStatus: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    fileIconName() {
      let extension = "";

      for (const [key, value] of Object.entries(ALLOWED_FILES)) {
        if (value === this.fileType) {
          extension = key;
        }
      }
      return extension;
    },
  },
};
</script>

<style scoped>
.file-item {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: 1fr max-content;
  grid-template-areas:
    "icon name status"
    "icon progress progress";
  grid-column-gap: var(--space--medium);
  align-items: flex-end;
}

.file-item__icon {
  grid-area: icon;
  @media (--viewport--medium-up) {
    width: initial;
  }
}

.file-item__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: responsive 0.85rem 1.75rem;
  font-range: 420px 1280px;
  font-weight: var(--font-weight--bold);
  grid-area: name;
}

.file-item__status {
  grid-area: status;
}

.file-item__progress {
  margin-top: var(--space--medium);
  grid-area: progress;
}
</style>

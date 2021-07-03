<template>
  <li class="file-item">
    <file-icon class="file-item__icon" size="xxLarge" :name="fileIconName" />
    <div class="file-item__name">{{ name }}</div>
    <div class="file-item__status">
      <transition name="fade-zoom" mode="out-in">
        <icon
          key="ready"
          v-if="uploadCount === maxCount"
          size="medium"
          name="check"
          color="green"
        />
        <button
          v-else
          key="pending"
          class="file-item__cancel"
          @click="$emit('cancel', name)"
        >
          <icon size="medium" name="close" color="red" />
        </button>
      </transition>
    </div>
    <progress-bar
      class="file-item__progress"
      size="xSmall"
      :value="uploadCount"
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
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      maxCount: 100,
      uploadCount: 0,
    };
  },

  mounted() {
    this.simulateUpload();
  },

  computed: {
    fileIconName() {
      let extension = "";

      for (const [key, value] of Object.entries(ALLOWED_FILES)) {
        if (value === this.type) {
          extension = key;
        }
      }
      return extension;
    },
  },

  methods: {
    /**
     * Simulate Upload
     */
    simulateUpload() {
      const delay = Math.ceil(this.size / 10000);

      window.setTimeout(() => {
        if (this.uploadCount === this.maxCount) return;
        this.uploadCount += 1;
        this.simulateUpload();
      }, delay);
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

.file-item__cancel {
  cursor: pointer;
}

.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: opacity 0.5s;
  transform: scale(1);
}
.fade-zoom-enter,
.fade-zoom-leave-to {
  transform: scale(1.5);
  opacity: 0;
}
</style>

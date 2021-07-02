<template>
  <li class="file-item">
    <icon class="file-item__icon" size="xxLarge" name="file-doc" />
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
export default {
  name: "FileItem",
  components: {
    Icon,
    ProgressBar,
  },

  props: {
    completed: {
      type: Boolean,
      default: false,
    },

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
};
</script>

<style scoped>
.file-item {
  /*  height: calc(var(--space--medium) * 5);*/
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
  font-size: var(--font-size--medium);
  font-weight: var(--font-weight--bold);
  grid-area: name;

  @media (--viewport--medium) {
    font-size: var(--font-size--xLarge);
  }

  @media (--viewport--large) {
    font-size: var(--font-size--xLarge);
  }
}

.file-item__status {
  grid-area: status;
}

.file-item__progress {
  margin-top: var(--space--medium);
  grid-area: progress;
}
</style>

<template>
  <div class="file-item">
    <icon class="file-item__icon" size="xxLarge" name="file-doc" />
    <div class="file-item__name">some-file-name-1.psd</div>
    <div class="file-item__status">
      <icon size="medium" name="check" />
    </div>
    <progress-bar class="file-item__progress" size="xSmall" :value="50" />
  </div>
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
};
</script>

<style scoped>
.file-item {
  height: calc(var(--space--medium) * 5);
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: max-content max-content;
  grid-template-areas:
    "icon name status"
    "icon progress progress";
  grid-column-gap: var(--space--medium);
  align-items: flex-end;
}

.file-item__icon {
  grid-area: icon;
}

.file-item__name {
  font-size: var(--font-size--xLarge);
  font-weight: var(--font-weight--bold);
  grid-area: name;
}

.file-item__status {
  grid-area: status;
}

.file-item__progress {
  grid-area: progress;
}
</style>

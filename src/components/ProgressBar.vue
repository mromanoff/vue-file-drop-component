<template>
  <div
    :class="computedSize"
    v-bind="$attrs"
    class="progress-bar"
    role="presentation"
  >
    <div class="progress-bar__track">
      <div
        :class="computedClasses"
        :style="{ width: computedWidth }"
        class="progress-bar__bar"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "progress-bar",
  props: {
    /**
     *  One of these colors: red, green, yellow, orange
     */
    color: {
      type: String,
      default: "red",
      validator: (value) => {
        return value.match(/(green|red|yellow|orange)/);
      },
    },
    /**
     * One of these sizes: small, medium, large
     */
    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        return value.match(/(xSmall|small|medium|large)/);
      },
    },
    /**
     * value number from 0 to 100
     */
    value: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    computedSize() {
      return {
        [`progress-bar--${this.size}`]: this.size,
      };
    },

    computedClasses() {
      return {
        [`progress-bar__bar--${this.color}`]: this.color,
      };
    },

    computedWidth() {
      return `${this.normalizedValue}%`;
    },

    normalizedValue() {
      if (this.value < 0) {
        return 0;
      }
      if (this.value > 100) {
        return 100;
      }
      return this.value;
    },
  },
};
</script>
<style scoped>
.progress-bar {
  display: block;
  height: var(--space--large);
}
.progress-bar__track {
  background-color: var(--color--grey100);
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
}
.progress-bar__bar {
  height: 100%;
  width: 0;
  transition: width 2.5s ease;
  transition-delay: 1s;
  border-radius: 4px;
}

/* bar sizes */
.progress-bar--xSmall {
  height: var(--space--xSmall);
}
.progress-bar--small {
  height: var(--space--small);
}
.progress-bar--medium {
  height: var(--space--medium);
}
.progress-bar--large {
  height: var(--space--large);
}
/* bar colors */
.progress-bar__bar--red {
  background-color: var(--color--red500);
}
/* bar colors */
.progress-bar__bar--green {
  background-color: var(--color--green500);
}
</style>

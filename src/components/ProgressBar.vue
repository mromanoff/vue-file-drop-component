<template>
  <div
    :class="computedSize"
    v-bind="$attrs"
    class="progress-bar"
    role="presentation"
  >
    <div class="progress-bar__track">
      <div
        :style="{ width: computedWidth, backgroundColor: computedColor }"
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

  data() {
    return {
      max: 100,
      red: {
        h: 3,
        s: 80,
        l: 65,
      },

      green: {
        h: 139,
        s: 46,
        l: 61,
      },
    };
  },

  computed: {
    computedSize() {
      return {
        [`progress-bar--${this.size}`]: this.size,
      };
    },

    computedWidth() {
      return `${this.normalizedValue}%`;
    },

    computedColor() {
      const hStep = Math.abs(this.green.h - this.red.h) / this.max;
      const sStep = Math.abs(this.green.s - this.red.s) / this.max;
      const lStep = Math.abs(this.green.l - this.red.l) / this.max;

      const h = Math.round(this.red.h + this.value * hStep);
      const s = Math.round(this.red.s - this.value * sStep);
      const l = Math.round(this.red.l - this.value * lStep);

      return `hsl(${h}, ${s}%, ${l}%)`;
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
  transition: width 200ms ease;
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

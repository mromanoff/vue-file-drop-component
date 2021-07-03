<template>
  <!-- eslint-disable vue/require-component-is -->
  <!-- eslint-disable vue/attribute-hyphenation -->
  <component
    :is="name"
    :class="computedClasses"
    viewBox="0 0 24 24"
    class="icon"
    role="presentation"
  />
</template>

<script>
export default {
  name: "Icon",
  components: {
    /* eslint-disable vue/no-unused-components */
    check: () =>
      import(
        /* webpackChunkName: "icons-check" */ "../assets/icons/icon-check.svg"
      ),

    close: () =>
      import(
        /* webpackChunkName: "icons-close" */ "../assets/icons/icon-close.svg"
      ),
  },

  props: {
    /**
     *  One of these colors: lightGrey, grey, darkGrey, lightBlue, blue, darkBlue, lightRed, red, darkRed, lightOrange, orange, darkOrange, lightYellow, yellow, darkYellow, lightGreen, green, darkGreen, white
     */
    color: {
      type: String,
      default: "default",
      validator: (value) => {
        return value.match(/(default|black|white|grey|red|green)/);
      },
    },
    /**
     * valid icon name look at Switch Icons Guide
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * One of these sizes: xSmall, small, medium, large, xLarge
     */
    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        return value.match(
          /(xxSmall|xSmall|small|medium|large|xLarge|xxLarge)/
        );
      },
    },
  },

  computed: {
    computedClasses() {
      return {
        [`icon--${this.size}`]: this.size,
        [`icon--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style>
.icon {
  display: block;
  width: var(--icon-size--medium);
  height: var(--icon-size--medium);
  font-size: var(--icon-size--medium);
  user-select: none;
  flex-shrink: 0;
}

/* icons sizes */
.icon--xxSmall {
  width: var(--icon-size--xxsmall);
  height: var(--icon-size--xxsmall);
}

.icon--xSmall {
  width: var(--icon-size--xsmall);
  height: var(--icon-size--xsmall);
}

.icon--small {
  width: var(--icon-size--small);
  height: var(--icon-size--small);
}

.icon--medium {
  width: var(--icon-size--medium);
  height: var(--icon-size--medium);
}

.icon--large {
  width: var(--icon-size--large);
  height: var(--icon-size--large);
}

.icon--xLarge {
  width: var(--icon-size--xlarge);
  height: var(--icon-size--xlarge);
}

.icon--xxLarge {
  width: var(--icon-size--xxlarge);
  height: var(--icon-size--xxlarge);
}

/* COLORS */
.icon--default {
  fill: currentColor;
}

.icon--grey {
  fill: var(--color--grey500);
}

.icon--black {
  fill: var(--color--black);
}

.icon--red {
  fill: var(--color--red500);
}

.icon--green {
  fill: var(--color--green500);
}

.icon--white {
  fill: var(--color--white);
}
</style>

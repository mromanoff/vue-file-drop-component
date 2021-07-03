<template>
  <!-- eslint-disable vue/require-component-is -->
  <!-- eslint-disable vue/attribute-hyphenation -->
  <component
    :is="name"
    :class="computedClasses"
    viewBox="0 0 24 24"
    class="file-icon"
    role="presentation"
  />
</template>

<script>
export default {
  name: "FileIcon",
  components: {
    /* eslint-disable vue/no-unused-components */
    doc: () =>
      import(
        /* webpackChunkName: "icons-doc" */ "../assets/icons/icon-file-doc.svg"
      ),

    psd: () =>
      import(
        /* webpackChunkName: "icons-psd" */ "../assets/icons/icon-file-psd.svg"
      ),

    pdf: () =>
      import(
        /* webpackChunkName: "icons-pdf" */ "../assets/icons/icon-file-pdf.svg"
      ),

    png: () =>
      import(
        /* webpackChunkName: "icons-png" */ "../assets/icons/icon-file-png.svg"
      ),

    ai: () =>
      import(
        /* webpackChunkName: "icons-ai" */ "../assets/icons/icon-file-ai.svg"
      ),

    jpg: () =>
      import(
        /* webpackChunkName: "icons-jpg" */ "../assets/icons/icon-file-jpg.svg"
      ),

    xls: () =>
      import(
        /* webpackChunkName: "icons-xls" */ "../assets/icons/icon-file-xls.svg"
      ),
  },

  props: {
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
        [`file-icon--${this.size}`]: this.size,
        [`file-icon--${this.name}`]: this.name,
      };
    },
  },
};
</script>

<style scoped>
.file-icon {
  display: block;
  width: var(--icon-size--medium);
  height: var(--icon-size--medium);
  font-size: var(--icon-size--medium);
  user-select: none;
  flex-shrink: 0;
}

/* icons sizes */
.file-icon--xxSmall {
  width: var(--icon-size--xxsmall);
  height: var(--icon-size--xxsmall);
}

.file-icon--xSmall {
  width: var(--icon-size--xsmall);
  height: var(--icon-size--xsmall);
}

.file-icon--small {
  width: var(--icon-size--small);
  height: var(--icon-size--small);
}

.file-icon--medium {
  width: var(--icon-size--medium);
  height: var(--icon-size--medium);
}

.file-icon--large {
  width: var(--icon-size--large);
  height: var(--icon-size--large);
}

.file-icon--xLarge {
  width: var(--icon-size--xlarge);
  height: var(--icon-size--xlarge);
}

.file-icon--xxLarge {
  width: var(--icon-size--xxlarge);
  height: var(--icon-size--xxlarge);
}

/* COLORS */
.file-icon--pdf .file-icon__shadow {
  fill: #f9e3da;
}
.file-icon--pdf .file-icon__outline,
.file-icon--pdf .file-icon__type {
  fill: #ed665f;
}

.file-icon--doc .file-icon__shadow {
  fill: #e8f0f8;
}
.file-icon--doc .file-icon__outline,
.file-icon--doc .file-icon__type {
  fill: #4585c7;
}

.file-icon--xls .file-icon__shadow {
  fill: #e0f1e6;
}
.file-icon--xls .file-icon__outline,
.file-icon--xls .file-icon__type {
  fill: #6cc08a;
}

.file-icon--psd .file-icon__shadow {
  fill: #e8f0f8;
}
.file-icon--psd .file-icon__outline,
.file-icon--psd .file-icon__type {
  fill: #4585c7;
}

.file-icon--ai .file-icon__shadow {
  fill: #f3e9d8;
}
.file-icon--ai .file-icon__outline,
.file-icon--ai .file-icon__type {
  fill: #ed9b5f;
}

.file-icon--png .file-icon__shadow {
  fill: #fbf3db;
}
.file-icon--png .file-icon__outline,
.file-icon--png .file-icon__type {
  fill: #edca5f;
}

.file-icon--jpg .file-icon__shadow {
  fill: #f1e4f6;
}
.file-icon--jpg .file-icon__outline,
.file-icon--jpg .file-icon__type {
  fill: #b276c8;
}

.file-icon--unknown .file-icon__shadow {
  fill: #e6e8ef;
}
.file-icon--unknown .file-icon__outline,
.file-icon--unknown .file-icon__type {
  fill: #afb4bc;
}
</style>

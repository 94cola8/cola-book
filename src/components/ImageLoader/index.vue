<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" :src="placeholder" alt="" class="placeholder" />
    <img
      :src="src"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      alt=""
      @load="handleLoad"
    />
  </div>
</template>
<script>
export default {
  name: "ImageLoader",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false,
      everythingDone: false,
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/mixin";

.image-loader-container {
  width: 100%;
  height: 100%;

  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    backdrop-filter: blur(20px);
  }
}
</style>

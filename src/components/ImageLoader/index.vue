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
      originLoaded: false, //  原图是否加载完成
      everythingDone: false, // 是否一切都尘埃落定了
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
@import "../../styles/mixin.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>

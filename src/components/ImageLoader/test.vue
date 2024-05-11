<template>
  <div class="test-container">
    <ImageLoader
      :duration="500"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      @load="handleLoaded"
    />
  </div>
</template>
<script>
import ImageLoader from "./index.vue";

export default {
  name: "test",
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("图片加载完成");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/mixin";

.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid green;
  .self-center();
}
</style>

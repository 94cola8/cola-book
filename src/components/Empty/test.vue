<template>
  <div class="test-container">
    <Empty />
  </div>
</template>
<script>
import Empty from "./index.vue";

export default {
  name: "test",
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 1px solid #aaa;
  margin: 0 auto;
  position: relative;
}
</style>

<template>
  <div class="test-container">
    <Concat />
  </div>
</template>
<script>
import Concat from "./index.vue";
import "@/styles/global.less";

export default {
  name: "test",
  components: {
    Concat,
  },
};
</script>

<style lang="less" scoped>
@import "../../../styles/mixin";

.test-container {
  width: 400px;
  height: 400px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
  padding-top: 200px;
}
</style>

<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>
<script>
import SiteAside from "./index.vue";
import "../../styles/global.less";

export default {
  name: "test",
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 250px;
  height: 600px;
  margin: 0 auto;
}
</style>

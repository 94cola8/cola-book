<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout/index";
import SiteAside from "./components/SiteAside/index";

export default {
  name: "App",
  components: {
    SiteAside,
    Layout,
  },
};
</script>

<style lang="less">
@import "./styles/mixin";

.app-container {
  .self-fill(fixed);
}

.aside {
  width: 250px;
  height: 100%;
}
</style>

<template>
  <div class="site-aside-container">
    <Avatar />
    <h1 class="title">cola吹水论坛</h1>
    <Menu />
    <div class="footer">
      <Contact />
      <p>渝ICP备2023008182号-1</p>
    </div>
  </div>
</template>
<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  name: "SiteAside",
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/var";

.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.avatar-container {
  margin: 0 auto;
}

.footer {
  position: absolute;
  bottom: 80px;

  p {
    text-align: center;
    font-size: 12px;
  }
}

.title {
  font-size: 1.2em;
  text-align: center;
  color: @gray;
  margin: 10px auto;
}
</style>

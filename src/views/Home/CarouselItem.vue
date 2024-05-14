<template>
  <div ref="container" class="carousel-item-container">
    <div ref="image" class="carousel-img">
      <ImageLoader :placeholder="carousel.midImg" :src="carousel.bigImg" />
    </div>
    <div ref="title" class="title">{{ carousel.title }}</div>
    <div ref="desc" class="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "../../components/ImageLoader/index";

export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/var.less";

.carousel-item-container {
  // background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}

.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 30px;
  color: #fff;
  text-shadow:
    1px 0 0 rgba(0, 0, 0, 0.5),
    -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5),
    0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}

.title {
  top: calc(50% - 40px);
  font-size: 2em;
}

.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>

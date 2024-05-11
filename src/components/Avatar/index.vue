<template>
  <img
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
    alt="avatar"
    class="avatar-img avatar-container"
  />
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,
      default: "https://blog-1319742726.cos.ap-chongqing.myqcloud.com/cola.jpg",
    },
    size: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    validateUrl(url) {
      const regex = /^https?:\/\/\S+$/i;
      return regex.test(url);
    },
  },
  mounted() {
    if (!this.validateUrl(this.url)) {
      this.url =
        "https://blog-1319742726.cos.ap-chongqing.myqcloud.com/cola.jpg";
    }
  },
};
</script>

<style lang="less" scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>

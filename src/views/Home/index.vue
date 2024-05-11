<template><h1 ref="cola">Home</h1></template>
<script>
export default {
  name: "Home",
  mounted() {
    this.$sayHello();
    console.log(this.$refs);
  },
};
</script>

<style lang="less" scoped></style>

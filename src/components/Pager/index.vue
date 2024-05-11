<template>
  <div v-if="pageNumber > 1" class="pager-container">
    <a
      v-if="current !== 1"
      :class="{ disabled: current === 1 }"
      href="#"
      @click="handleClick(1)"
      >|&lt;&lt;</a
    >
    <a
      :class="{ disabled: current === 1 }"
      href="#"
      @click="handleClick(current - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="(number, index) in visibleArr"
      :key="index"
      :class="{ active: current === number }"
      href="#"
      @click="handleClick(number)"
      >{{ number }}</a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      href="#"
      @click="handleClick(current + 1)"
      >&gt;&gt;</a
    >
    <a
      v-if="current !== pageNumber"
      :class="{ disabled: current === pageNumber }"
      href="#"
      @click="handleClick(pageNumber)"
      >&gt;&gt;|</a
    >
  </div>
</template>
<script>
import "@/styles/global.less";

export default {
  name: "Pager",
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      const sum = this.current - Math.floor(this.visibleNumber / 2);
      return sum <= 0 ? 1 : sum;
    },
    visibleMax() {
      const sum = this.visibleMin + this.visibleNumber - 1;
      return sum > this.pageNumber ? this.pageNumber : sum;
    },
    visibleArr() {
      const res = [];
      for (let i = this.visibleMin; i <= this.visibleMax; ++i) {
        res.push(i);
      }
      return res;
    },
  },
  methods: {
    handleClick(newPage) {
      if (
        newPage === this.current ||
        newPage === 0 ||
        newPage === this.pageNumber + 1
      )
        return;
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/var";

.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: 600;
      cursor: text;
    }
  }
}
</style>

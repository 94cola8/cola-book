<template>
  <div class="test-container">
    <Pager
      :current="current"
      :limit="limit"
      :total="total"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./index.vue";

export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      limit: 10,
      total: 156,
    };
  },
  methods: {
    handlePageChange(pageNumber) {
      this.current = pageNumber;
    },
  },
};
</script>

<style lang="less" scoped></style>

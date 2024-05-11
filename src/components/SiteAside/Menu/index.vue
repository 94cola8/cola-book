<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in menuItems"
      :key="item.name"
      :exact="item.exact"
      :to="{ name: item.name }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>
<script>
import Icon from "../../Icon/index.vue";

export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../../styles/var";

.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;

    &:hover {
      color: #fff;
    }

    &.router-link-exact-active {
      background-color: darken(@words, 2%);
    }

    &.router-link-active {
      background-color: darken(@words, 2%);
    }

    .icon {
      width: 24px;
    }
  }
}
</style>

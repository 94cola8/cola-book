import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";

Vue.prototype.$sayHello = function () {
  console.log("Hello!!!");
};

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// function getComponentRootDom(comp, props) {
//   const vm = new Vue({
//     render: (h) => h(comp, { props }),
//   });
//   vm.$mount();
//   return vm.$el;
// }
//
// import Icon from "./components/Icon";
//
// const dom = getComponentRootDom(Icon, { type: "home" });
// console.log(dom);

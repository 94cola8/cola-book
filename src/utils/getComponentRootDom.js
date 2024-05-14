import Vue from "vue";

/**
 * @description: 描述信息
 * @author: cola
 * @date: 2024--05--11 13--55
 * @param {any} comp - 组件对象
 * @param {Object} props - 组件需要的props
 */
export default function (comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });
  vm.$mount();
  return vm.$el;
}

import getComponentRootDom from "./getComponentRootDom";
import Icon from "../components/Icon";
import styles from "./showMessage.module.less";

/**
 * @description: 描述信息
 * @author: cola
 * @date: 2024--05--11 13--49
 * @param {Object} options - 消息配置，content:消息内容，type:消息类型([info,success,error,warn])，duration:消息持续时间，callback回调函数
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div> `;
  div.className = `${styles.message} ${styles["message-" + type]}`;
  document.body.appendChild(div);
  // 读取属性强制reflow
  div.clientWidth;

  div.style.opacity = "1";
  div.style.transform = `translate(-50%, -50%)`;

  setTimeout(() => {
    div.style.opacity = "0";
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;

    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        if (options.callback) options.callback();
      },
      { once: true },
    );
  }, duration);
}

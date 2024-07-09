/**
 * v-vFocus
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */

import type { Directive } from "vue";

const vFocus: Directive = {
  mounted(el: any) {
    el.focus();
  }
};

export default vFocus;

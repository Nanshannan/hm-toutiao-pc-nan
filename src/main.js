import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// 入口文件的职责
// 职责1: 创建一个根实例
// 职责2：负责全局范围的依赖导入

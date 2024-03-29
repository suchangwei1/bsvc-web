// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './config/rem'
import VueI18n from 'vue-i18n'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'zh',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./common/lang/zh'),   // 中文语言包
    'en': require('./common/lang/en')    // 英文语言包
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

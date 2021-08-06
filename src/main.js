// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueAxios from "vue-axios";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  vuetify,
  router,
  components: { App },
  template: "<App/>"
});

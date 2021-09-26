import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2/dist/sweetalert2"; //Toast*

import VueHead from "vue-head";

import LoadScript from "vue-plugin-load-script";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(LoadScript);
Vue.use(FontAwesomeIcon);
Vue.use(VueHead);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 4000,
  timerProgressBar: true,
  showConfirmButton: false,
});
window.Toast = Toast;

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

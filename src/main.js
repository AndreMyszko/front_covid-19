import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueGoogleCharts from "vue-google-charts";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2/dist/sweetalert2"; //Toast*

import VueHead from "vue-head";

import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

import LoadScript from 'vue-plugin-load-script';

import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(LoadScript);
Vue.use(VueChartkick);
Vue.use(FontAwesomeIcon);
Vue.use(VueHead);
Vue.use(VueGoogleCharts);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.use(VueSidebarMenu);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 4000,
  timerProgressBar: true,
  showConfirmButton: false,
});
window.Toast = Toast;

//GOOGLE API KEY
Vue.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBIt_QJhQzi_1vi5ALv1csP0cFzC1tSlFM")
.then(() => {
  console.log("GoogleMaps APIkey status: OK");
})
.catch(() => {
  console.log("ERRO: algo errado ao tentar carregar GoogleMaps APIkey");
});

//GOOGLE GEO CHART
Vue.loadScript("https://www.gstatic.com/charts/loader.js")
.then(() => {
  console.log("GStatic status: OK");
})
.catch(() => {
  console.log("ERRO: algo errado ao tentar carregar GStatic");
});

//GOOGLE API
Vue.loadScript("https://www.google.com/jsapi")
.then(() => {
  console.log("GoogleJsApi status: OK");
})
.catch(() => {
  console.log("ERRO: algo errado ao tentar carregar GoogleJsApi");
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

<template>
  <div class="home">
    <h1>Bem vindo à home page!</h1>
    <SweetAlert2 />
    <VueGoogleCharts />
    <BootstrapVue />
  </div>
</template>

<script>
import SweetAlert2 from "../components/exeamples/sweetAlert2";
import VueGoogleCharts from "../components/exeamples/vue-google-charts";
import BootstrapVue from "../components/exeamples/bootstrap-vue";

export default {
  name: "Home",

  components: {
    SweetAlert2,
    VueGoogleCharts,
    BootstrapVue,
  },

  head: {
    title: {
      inner: "Home",
    },
  },
};
</script>

<style scoped>
.home {
  color: rgb(255, 255, 255);
}
</style>

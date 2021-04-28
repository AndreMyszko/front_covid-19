<template>
  <div class="home">
    <h1>Bem vindo à home page!</h1>
    <SweetAlert2 />
    <VueGoogleCharts />

  </div>
</template>

<script>
import SweetAlert2 from '../components/exeamples/sweetAlert2'
import VueGoogleCharts from '../components/exeamples/vue-google-charts'

export default {
  name: "Home",
  components: {
    SweetAlert2,
    VueGoogleCharts,
  },
};
</script>

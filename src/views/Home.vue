<template>
  <div class="home">
    <h1>Bem vindo à home page!</h1>
    <SweetAlert2 />
    <BootstrapVue />
  </div>
</template>

<script>
import SweetAlert2 from "../components/example/sweetAlert2";
import BootstrapVue from "../components/example/bootstrap-vue";

export default {
  name: "Home",

  components: {
    SweetAlert2,
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

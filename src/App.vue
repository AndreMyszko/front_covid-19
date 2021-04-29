<template>
  <div id="app">
      <Header />
      <SideBar />
      <router-view />
      <Footer />
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";

export default {
  name: "App",
  components: {
    Header,
    SideBar,
    Footer,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<template>
  <div id="nav" class="mt-2 pt-0">
    <h1 class="mb-3">DynaForm Web</h1>
    <b-nav tabs align="center">
      <b-nav-item>
        |
        <router-link to="/">
          <b-icon icon="house-fill"></b-icon> Home
        </router-link>
        |
      </b-nav-item>
      <b-nav-item>
        |
        <router-link to="user">
          <b-icon icon="person-fill"></b-icon> User
        </router-link>
        |
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style scoped>
#nav {
  color: rgb(255, 255, 255);
}
</style>

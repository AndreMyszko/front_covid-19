<template>
  <div id="nav">
    <b-nav tabs align="center">
      <h3>- COVID -</h3>
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

<style scoped></style>
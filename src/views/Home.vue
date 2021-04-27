<template>
  <div class="home">
    <h1>Aqui estou na home page!</h1>
    <b-button class="mr-2" variant="primary" @click="defaultAlert">SweetAlert2_default</b-button>
    <b-button class="mr-2" variant="success" @click="successAlert">SweetAlert2_success</b-button>
    <b-button class="mr-2" variant="danger" @click="errorAlert">SweetAlert2_success</b-button>

  </div>
</template>

<script>

export default {
  name: "Home",
  components: {

  },

  methods: {
    defaultAlert(){
      this.$swal("HelloWorld!", "🌍 🌎 🌏")
    },

    successAlert(){
      this.$swal("Success!", "I am so proud with this success. 😀", "success")
    },

    errorAlert(){
      this.$swal("Error!", "Oww no dude. 😭", "error")
    },


  }

};
</script>

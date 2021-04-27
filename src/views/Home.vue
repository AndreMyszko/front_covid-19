<template>
  <div class="home">
    <h1>Bem vindo à home page!</h1>


  <div class="container">
    <b-card title="Sweet Alert 2">
      <b-card-text>
      </b-card-text>

      <b-card-text>
        <h5>Normal</h5>
        <b-button class="mr-2" variant="primary" @click="defaultAlert">default</b-button>
        <b-button class="mr-2" variant="info" @click="infoAlert">info</b-button>
        <b-button class="mr-2" variant="success" @click="successAlert">success</b-button>
        <b-button class="mr-2" variant="warning" @click="warningAlert">warning</b-button>
        <b-button class="mr-2" variant="danger" @click="errorAlert">error</b-button>
      </b-card-text>

      <b-card-text>
        <h5>Toast</h5>
        <b-button class="mr-2" variant="primary" @click="defaultToast">default</b-button>
        <b-button class="mr-2" variant="info" @click="infoToast">info</b-button>
        <b-button class="mr-2" variant="success" @click="successToast">success</b-button>
        <b-button class="mr-2" variant="warning" @click="warningToast">warning</b-button>
        <b-button class="mr-2" variant="danger" @click="errorToast">error</b-button>


      </b-card-text>


    </b-card>
  </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },

  methods: {
    //NORAML ALERT
    defaultAlert(){
      this.$swal("HelloWorld!", "🌍 🌎 🌏")
    },

    infoAlert(){
      this.$swal("Success!", "Look to this message, wow. 😯", "info")
    },

    successAlert(){
      this.$swal("Success!", "I am so proud with this success. 😀", "success")
    },

    warningAlert(){
      this.$swal("Success!", "take a lokk on this. 😦", "warning")
    },

    errorAlert(){
      this.$swal("Error!", "Oww no dude. 😭", "error")
    },

    //TOASTS
    defaultToast(){
      window.Toast.fire("info!", "omg loook aat this due! close me if you want by pressing OK....\n😐")
    },

    infoToast(){
      window.Toast.fire("info!", "omg loook aat this due! close me if you want by pressing OK....\n😯", "info")
    },

    successToast(){
      window.Toast.fire("success!", "omg loook aat this due! close me if you want by pressing OK.... \n😃", "success")
    },

    warningToast(){
      window.Toast.fire("warning!", "omg loook aat this due! close me if you want by pressing OK.... \n😦", "warning")
    },
    
    errorToast(){
      window.Toast.fire( "error!", "omg loook aat this due! close me if you want by pressing OK.... \n😭", "error")
    },




  }

};
</script>

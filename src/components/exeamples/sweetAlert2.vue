<template>
  <div class="container">
    <b-card id="def" class="mb-2" title="Sweet Alert 2">

      <b-card-text>
        <h5>Normal</h5>
        <b-button class="mr-2 mb-2" variant="primary" @click="defaultAlert">default</b-button>
        <b-button class="mr-2 mb-2" variant="info" @click="infoAlert">info</b-button>
        <b-button class="mr-2 mb-2" variant="success" @click="successAlert">success</b-button>
        <b-button class="mr-2 mb-2" variant="warning" @click="warningAlert">warning</b-button>
        <b-button class="mr-2 mb-2" variant="danger" @click="errorAlert">error</b-button>
      </b-card-text>

      <b-card-text>
        <h5>Toast</h5>
        <b-button class="mr-2 mb-2" variant="primary" @click="defaultToast">default</b-button>
        <b-button class="mr-2 mb-2" variant="info" @click="infoToast">info</b-button>
        <b-button class="mr-2 mb-2" variant="success" @click="successToast">success</b-button>
        <b-button class="mr-2 mb-2" variant="warning" @click="warningToast">warning</b-button>
        <b-button class="mr-2 mb-2" variant="danger" @click="errorToast">error</b-button>
      </b-card-text>

      <b-card-text>
        <h5>Confirm</h5>
        <b-button class="mr-2" variant="danger" @click="deleteConfirm">
          <b-icon icon="trash-fill">Trash</b-icon>
        </b-button>
      </b-card-text>
      
    </b-card>
  </div>
</template>

<script>
export default {
    name: "SweetAlert2",

    component: {

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

        //CONFIRMS
        deleteConfirm(){
        this.$swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        })
        .then((result) => {
            if (result.isConfirmed) {
            window.Toast.fire("Deleted","This was deleted", "success");
            }
            else{
            window.Toast.fire("Canceled Operation", "", "info");
            }
        });
        },
    },

}
</script>

<style scoped>
#def{
  color: rgb(255, 255, 255);
  background-image: linear-gradient(45deg, rgb(20, 222, 124) 0%, rgb(20, 222, 124) 21%,rgb(25, 190, 119) 21%, rgb(25, 190, 119) 37%,rgb(30, 158, 113) 37%, rgb(30, 158, 113) 46%,rgb(35, 126, 108) 46%, rgb(35, 126, 108) 53%,rgb(39, 94, 103) 53%, rgb(39, 94, 103) 59%,rgb(44, 62, 97) 59%, rgb(44, 62, 97) 77%,rgb(49, 30, 92) 77%, rgb(49, 30, 92) 100%);
}
</style>
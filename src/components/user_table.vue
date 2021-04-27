<template>
  <div id="tblUser" class="container">
    <h1><b-icon icon="people-fill"></b-icon> USERS</h1>

    <!-- MENSAGEM DE RETORNO DE MÉTODO DELETE -->
    <div v-if="message" class="alert alert-danger">
      <b-icon icon="info-square-fill"></b-icon>
      {{ message }}
    </div>

    <!-- Scopo total tabela + stuffs -->
    <div id="tblScope" class="container p-2">
      <!-- Input de busca na tabela user e AddUser-btn -->
      <div class="row mb-2">
        <div class="col-md-6">
          <h3 class="float-left"><b-icon icon="search"></b-icon>...</h3>
          <input
            id="search"
            class="float-left"
            type="text"
            placeholder="search for @email..."
            v-model="search"
          />
        </div>

        <div class="col-md-6">
          <button
            class="btn btn-success float-right"
            v-on:click="insertUserClick()"
          >
            <b-icon icon="person-plus-fill"></b-icon> Add User
          </button>
        </div>
      </div>

      <!-- LISTA DE USUÁRIOS (transformar em componente...) -->
      <table class="table">
        <thead>
          <tr>
            <!-- <th>ID</th> -->
            <!-- <th>Name</th> -->
            <th>Email</th>
            <!-- <th>Role</th> -->
            <!-- <th>Active</th> -->
            <th><!--Remove--></th>
            <th><!--Update--></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userFilter" v-bind:key="user.id">
            <!-- <td>{{user.id}}</td> -->
            <!-- <td>{{user.name}}</td> -->
            <td>{{ user.email }}</td>
            <!-- <td>{{user.user_role}}</td> -->
            <!-- <td>{{user.active}}</td> -->
            <td>
              <button
                class="btn btn-primary mr-2 mb-1"
                v-on:click="updateUserClick(user.id)"
              >
                <b-icon icon="person-lines-fill">Update</b-icon>
              </button>
              <button
                class="btn btn-danger mr-2 mb-1"
                v-on:click="deleteUserClick(user.id)"
              >
                <b-icon icon="trash-fill">Delete</b-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserService from "../service/user_service";

export default {
  name: "UserTable",

  data() {
    return {
      users: [],
      message: null,
      instructor: "user",
      search: "",
    };
  },

  methods: {
    //OK - funcionando
    refreshUser() {
      UserService.retriveAllUsers(this.instructor).then((response) => {
        this.users = response.data;
        //console.log(response.data);
      });
    },

    //OK - funcionando
    deleteUserClick(id) {
      UserService.deleteUser(this.instructor, id).then((response) => {
        this.message = `Delete user with ID: ${id} successful`;
        this.refreshUser();
        console.log(`delete --> ID:${id}`);
        return response;
      });
    },

    //OK - funcionando (retorna o id para pagina update)
    updateUserClick(id) {
      this.$router.push(`/user/${id}`);
      console.log(id);
    },

    //Em construção....
    insertUserClick() {
      this.$router.push(`/user/-1`);
    },
  },

  created() {
    this.refreshUser();
  },

  computed: {
    userFilter() {
      return this.users.filter((user) => {
        return user.email.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
#search {
  background-color: black;
  border: 3px solid greenyellow;
  border-radius: 5px;
  color: greenyellow;
}
</style>

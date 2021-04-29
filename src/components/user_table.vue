<template>
  <div id="user" class="container">
    <h1><b-icon icon="people-fill"></b-icon> USERS</h1>

    <div id="tblScope" class="container p-2">
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

      <table class="table text-light">
        <thead>
          <tr>
            <!-- <th>ID</th> -->
            <!-- <th>Name</th> -->
            <th>Email</th>
            <!-- <th>Role</th> -->
            <!-- <th>Active</th> -->
            <!--<th>Remove</th>-->
            <!--<th>Update</th>-->
            <th>Edit</th>
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
      instructor: "user",
      search: "",
    };
  },

  methods: {
    refreshUser() {
      UserService.retriveAllUsers(this.instructor).then((response) => {
        this.users = response.data;
      });
    },

    deleteUserClick(id) {
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
          window.Toast.fire("Deleted",`User with ID: ${id} was deleted`, "success");
          UserService.deleteUser(this.instructor, id).then((response) => {
          this.refreshUser();
          console.log(`delete --> ID:${id}`);
          return response;
      });

        }
        else{
          window.Toast.fire("Canceled Operation", "", "info");
        }
      });
    },

    updateUserClick(id) {
      this.$router.push(`/user/${id}`);
      console.log(id);
    },

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
#tblScope{
  color: rgb(255,255,255);
  border-radius: 10px;
  background-image: linear-gradient(301deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.42999999999999%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(438deg, rgba(25, 25, 25, 0.01) 0%, rgba(25, 25, 25, 0.01) 12.5%,rgba(150, 150, 150, 0.01) 12.5%, rgba(150, 150, 150, 0.01) 25%,rgba(84, 84, 84, 0.01) 25%, rgba(84, 84, 84, 0.01) 37.5%,rgba(85, 85, 85, 0.01) 37.5%, rgba(85, 85, 85, 0.01) 50%,rgba(188, 188, 188, 0.01) 50%, rgba(188, 188, 188, 0.01) 62.5%,rgba(80, 80, 80, 0.01) 62.5%, rgba(80, 80, 80, 0.01) 75%,rgba(73, 73, 73, 0.01) 75%, rgba(73, 73, 73, 0.01) 87.5%,rgba(219, 219, 219, 0.01) 87.5%, rgba(219, 219, 219, 0.01) 100%),linear-gradient(304deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(114, 114, 114, 0.01) 25%, rgba(114, 114, 114, 0.01) 50%,rgba(164, 164, 164, 0.01) 50%, rgba(164, 164, 164, 0.01) 75%,rgba(228, 228, 228, 0.01) 75%, rgba(228, 228, 228, 0.01) 100%),linear-gradient(418deg, rgba(45,148,88, 0.02) 0%, rgba(45,148,88, 0.02) 16.667%,rgba(44, 44, 44, 0.02) 16.667%, rgba(44, 44, 44, 0.02) 33.334%,rgba(166, 166, 166, 0.02) 33.334%, rgba(166, 166, 166, 0.02) 50.001000000000005%,rgba(2, 2, 2, 0.02) 50.001%, rgba(2, 2, 2, 0.02) 66.668%,rgba(23, 23, 23, 0.02) 66.668%, rgba(23, 23, 23, 0.02) 83.33500000000001%,rgba(21, 21, 21, 0.02) 83.335%, rgba(21, 21, 21, 0.02) 100.002%),linear-gradient(429deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 12.5%,rgba(116, 116, 116, 0.03) 12.5%, rgba(116, 116, 116, 0.03) 25%,rgba(214, 214, 214, 0.03) 25%, rgba(214, 214, 214, 0.03) 37.5%,rgba(217, 217, 217, 0.03) 37.5%, rgba(217, 217, 217, 0.03) 50%,rgba(68, 68, 68, 0.03) 50%, rgba(68, 68, 68, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(200, 200, 200, 0.03) 75%, rgba(200, 200, 200, 0.03) 87.5%,rgba(198, 198, 198, 0.03) 87.5%, rgba(198, 198, 198, 0.03) 100%),linear-gradient(198deg, rgba(195, 195, 195, 0.03) 0%, rgba(195, 195, 195, 0.03) 16.667%,rgba(177, 177, 177, 0.03) 16.667%, rgba(177, 177, 177, 0.03) 33.334%,rgba(170, 170, 170, 0.03) 33.334%, rgba(170, 170, 170, 0.03) 50.001000000000005%,rgba(158, 158, 158, 0.03) 50.001%, rgba(158, 158, 158, 0.03) 66.668%,rgba(121, 121, 121, 0.03) 66.668%, rgba(121, 121, 121, 0.03) 83.33500000000001%,rgba(146, 146, 146, 0.03) 83.335%, rgba(146, 146, 146, 0.03) 100.002%),linear-gradient(369deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 25%,rgba(112, 112, 112, 0.03) 25%, rgba(112, 112, 112, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(227, 227, 227, 0.03) 75%, rgba(227, 227, 227, 0.03) 100%),linear-gradient(191deg, rgb(53,54,70),rgb(53,54,70));
}
#user{
  color: rgb(255,255,255);
}
</style>
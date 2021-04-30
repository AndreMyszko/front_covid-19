<template>
  <div id="update-user">
    <div id="tblScope" class="container">
      <h1><b-icon icon="person-lines-fill"></b-icon> Update User</h1>

      <form @submit="validateAndSubmit">
        <br />
        <div v-if="errors.length">
          <div
            class="alert alert-danger mt-2"
            v-bind:key="index"
            v-for="(error, index) in errors"
          >
            {{ errors.toString() }}
          </div>
        </div>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Email</label>
          <input
            type="text"
            class="form-control"
            v-model="email"
            :disabled="disabled == 1"
          />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Name</label>
          <input type="text" class="form-control" v-model="name" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <b-form-group id="input-group" label="User Role:" label-for="input">
            <b-form-select
              id="input"
              v-model="user_role"
              :options="roles"
              required
            ></b-form-select>
          </b-form-group>
        </fieldset>

        <fieldset class="form-group">
          <b-form-checkbox id="checkbox-1" name="checkbox-1" v-model="active">
            Active this user?
          </b-form-checkbox>
        </fieldset>
        <router-link to="/user" class="btn btn-danger mb-3 mr-3">
          <b-icon icon="arrow-left-square-fill"></b-icon> Back
        </router-link>

        <button class="btn btn-success mb-3" type="submit">
          <b-icon icon="person-check-fill"></b-icon> Update User
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from "../service/user_service";

export default {
  name: "UserUpdate",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      user_role: null,
      roles: [{ text: "<-- select one -->", value: null }, "user", "admin"],
      active: "",

      disabled: 1,
      message: null,
      instructor: "user",
      errors: [],
    };
  },

  head: {
    title: {
      inner: 'Update User'
    },
  },


  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    refreshUser() {
      UserService.retrieveUser(this.INSTRUCTOR, this.id).then((res) => {
        if (this.id != -1) {
          this.name = res.data.name;
          this.email = res.data.email;
          this.password = res.data.password;
          this.user_role = res.data.user_role;
          this.active = res.data.active;
        } else {
          this.disabled = 0;
          this.active = false;
        }
      });
    },

    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.email) {
        this.errors.push("O email é obrigatório.");
      } else if (!this.name) {
        this.errors.push("Nome é obrigatório.");
      } else if (this.name.length < 4) {
        this.errors.push("Nome deve possuir mais de 4 caracteres.");
      } else if (!this.password) {
        this.errors.push("Necessário escolher uma senha.");
      } else if (this.password.length < 6) {
        this.errors.push("A senha deve conter ao mesnos 6 caracteres.");
      } else {
        this.errors.length === 0;
      }

      if (this.errors.length === 0) {
        if (this.id === -1) {
          UserService.createUser(this.INSTRUCTOR, {
            name: this.name,
            email: this.email,
            password: this.password,
            user_role: this.user_role,
            active: this.active,
          }).then(() => {
            this.$router.push("/user");
          });
        } else {
          UserService.updateUser(this.INSTRUCTOR, this.id, {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            user_role: this.user_role,
            active: this.active,
          }).then(() => {
            this.$router.push("/user");
            console.log(
              `update user --> { NAME: ${this.name}, EMAIL: ${this.email}`
            );
          });
        }
      }
      window.Toast.fire(
        "Success",
        `User "${this.name}" was registred/updated!`,
        "success"
      );
    },
  },

  created() {
    this.refreshUser();
  },
};
</script>
<style scoped>
#tblScope {
  color: rgb(255, 255, 255);
  border-radius: 10px;
  background-image: linear-gradient(
      301deg,
      rgba(213, 213, 213, 0.01) 0%,
      rgba(213, 213, 213, 0.01) 14.286%,
      rgba(140, 140, 140, 0.01) 14.286%,
      rgba(140, 140, 140, 0.01) 28.572%,
      rgba(52, 52, 52, 0.01) 28.572%,
      rgba(52, 52, 52, 0.01) 42.858%,
      rgba(38, 38, 38, 0.01) 42.858%,
      rgba(38, 38, 38, 0.01) 57.144%,
      rgba(159, 159, 159, 0.01) 57.144%,
      rgba(159, 159, 159, 0.01) 71.42999999999999%,
      rgba(71, 71, 71, 0.01) 71.43%,
      rgba(71, 71, 71, 0.01) 85.71600000000001%,
      rgba(88, 88, 88, 0.01) 85.716%,
      rgba(88, 88, 88, 0.01) 100.002%
    ),
    linear-gradient(
      438deg,
      rgba(25, 25, 25, 0.01) 0%,
      rgba(25, 25, 25, 0.01) 12.5%,
      rgba(150, 150, 150, 0.01) 12.5%,
      rgba(150, 150, 150, 0.01) 25%,
      rgba(84, 84, 84, 0.01) 25%,
      rgba(84, 84, 84, 0.01) 37.5%,
      rgba(85, 85, 85, 0.01) 37.5%,
      rgba(85, 85, 85, 0.01) 50%,
      rgba(188, 188, 188, 0.01) 50%,
      rgba(188, 188, 188, 0.01) 62.5%,
      rgba(80, 80, 80, 0.01) 62.5%,
      rgba(80, 80, 80, 0.01) 75%,
      rgba(73, 73, 73, 0.01) 75%,
      rgba(73, 73, 73, 0.01) 87.5%,
      rgba(219, 219, 219, 0.01) 87.5%,
      rgba(219, 219, 219, 0.01) 100%
    ),
    linear-gradient(
      304deg,
      rgba(233, 233, 233, 0.01) 0%,
      rgba(233, 233, 233, 0.01) 25%,
      rgba(114, 114, 114, 0.01) 25%,
      rgba(114, 114, 114, 0.01) 50%,
      rgba(164, 164, 164, 0.01) 50%,
      rgba(164, 164, 164, 0.01) 75%,
      rgba(228, 228, 228, 0.01) 75%,
      rgba(228, 228, 228, 0.01) 100%
    ),
    linear-gradient(
      418deg,
      rgba(45, 148, 88, 0.02) 0%,
      rgba(45, 148, 88, 0.02) 16.667%,
      rgba(44, 44, 44, 0.02) 16.667%,
      rgba(44, 44, 44, 0.02) 33.334%,
      rgba(166, 166, 166, 0.02) 33.334%,
      rgba(166, 166, 166, 0.02) 50.001000000000005%,
      rgba(2, 2, 2, 0.02) 50.001%,
      rgba(2, 2, 2, 0.02) 66.668%,
      rgba(23, 23, 23, 0.02) 66.668%,
      rgba(23, 23, 23, 0.02) 83.33500000000001%,
      rgba(21, 21, 21, 0.02) 83.335%,
      rgba(21, 21, 21, 0.02) 100.002%
    ),
    linear-gradient(
      429deg,
      rgba(3, 3, 3, 0.03) 0%,
      rgba(3, 3, 3, 0.03) 12.5%,
      rgba(116, 116, 116, 0.03) 12.5%,
      rgba(116, 116, 116, 0.03) 25%,
      rgba(214, 214, 214, 0.03) 25%,
      rgba(214, 214, 214, 0.03) 37.5%,
      rgba(217, 217, 217, 0.03) 37.5%,
      rgba(217, 217, 217, 0.03) 50%,
      rgba(68, 68, 68, 0.03) 50%,
      rgba(68, 68, 68, 0.03) 62.5%,
      rgba(118, 118, 118, 0.03) 62.5%,
      rgba(118, 118, 118, 0.03) 75%,
      rgba(200, 200, 200, 0.03) 75%,
      rgba(200, 200, 200, 0.03) 87.5%,
      rgba(198, 198, 198, 0.03) 87.5%,
      rgba(198, 198, 198, 0.03) 100%
    ),
    linear-gradient(
      198deg,
      rgba(195, 195, 195, 0.03) 0%,
      rgba(195, 195, 195, 0.03) 16.667%,
      rgba(177, 177, 177, 0.03) 16.667%,
      rgba(177, 177, 177, 0.03) 33.334%,
      rgba(170, 170, 170, 0.03) 33.334%,
      rgba(170, 170, 170, 0.03) 50.001000000000005%,
      rgba(158, 158, 158, 0.03) 50.001%,
      rgba(158, 158, 158, 0.03) 66.668%,
      rgba(121, 121, 121, 0.03) 66.668%,
      rgba(121, 121, 121, 0.03) 83.33500000000001%,
      rgba(146, 146, 146, 0.03) 83.335%,
      rgba(146, 146, 146, 0.03) 100.002%
    ),
    linear-gradient(
      369deg,
      rgba(103, 103, 103, 0.03) 0%,
      rgba(103, 103, 103, 0.03) 25%,
      rgba(112, 112, 112, 0.03) 25%,
      rgba(112, 112, 112, 0.03) 50%,
      rgba(4, 4, 4, 0.03) 50%,
      rgba(4, 4, 4, 0.03) 75%,
      rgba(227, 227, 227, 0.03) 75%,
      rgba(227, 227, 227, 0.03) 100%
    ),
    linear-gradient(191deg, rgb(53, 54, 70), rgb(53, 54, 70));
}
</style>

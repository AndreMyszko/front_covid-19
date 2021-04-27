lear<template>
  <div id="update-user" class="pb-3">
    <h1><b-icon icon="person-lines-fill"></b-icon> Update</h1>

    <div id="tblScope" class="container">
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

      console.log({
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        user_role: this.user_role,
        active: this.active,
      });
    },
  },

  created() {
    this.refreshUser();
  },
};
</script>

<style scoped></style>

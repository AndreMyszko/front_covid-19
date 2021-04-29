<template>
  <div id="user" class="pb-3">
    <UserTable />
  </div>
</template>

<script>
import UserTable from "../components/user_table";

export default {
  name: "User",
  components: {
    UserTable,
  },
};
</script>

<style scoped></style>
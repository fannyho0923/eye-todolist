<template>
  <div>
    <div class="baseBody">
      <v-app id="inspire">
        <v-form ref="form" lazy-validation>
          <h1>系統登入</h1>
          <v-text-field
            class="set-border"
            v-model="name"
            label="帳號"
            required
            outlined
          ></v-text-field>
          <v-text-field
            class="set-border"
            v-model="password"
            label="密碼"
            required
            outlined
          ></v-text-field>
          <v-btn @click="login">
            登入
          </v-btn>
        </v-form>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.baseBody {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.v-form {
  margin-top: 6rem;
  border: solid 1px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-text-field {
  width: 50%;
  margin: auto;
}
.v-btn {
  display: block;
  margin: auto;
  color: #6558f5;
  border-style: solid;
  border-color: #c7c3fb;
  box-shadow: none;
  background-color: white;
  background-color: transparent !important;
}
h1 {
  margin: 0 auto 2rem auto;
}
</style>

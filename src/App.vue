<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div class="signin mx-auto">
    <h2 class="signin__tit">登入</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="mail"
        :rules="emailRules"
        label="E-mail"
        required
        autocomplete
        validate-on-blur
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="18"
        validate-on-blur
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="rules"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="請輸入密碼"
        hint="密碼至少 8 個字符，至少 1 個字母和 1 個數字，且不得超出 18 個字符"
        @click:append="show = !show"
        autocomplete
      ></v-text-field>
      <router-link class="signin__link" to="/login/forget"
        >忘記密碼？</router-link
      >
      <v-btn
        block
        :disabled="!valid"
        color="primary"
        class="my-4"
        @click="signIn"
      >
        登入
      </v-btn>
      <h4 class="signin__signup-link fs-6 text-center">
        還沒有帳號？<router-link class="signin__link" to="/login/signup"
          >註冊</router-link
        >
      </h4>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <v-banner class="ban1"
      ><v-btn class="backBtn" flat @click="back">登出</v-btn></v-banner
    >
    <main>
      <div class="ban2">
        <h1>To Do List 清單</h1>
        <v-btn class="addBtn" flat @click="back">新增</v-btn>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.ban1 {
  width: 100vw;
  background-color: #f3c19d !important;
  margin-bottom: 5rem;
}
.backBtn {
  float: right;
  box-shadow: none;
  background-color: transparent !important;
}
.ban2 {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: solid 1px;
  padding: 1rem 0.5rem;
}
.addBtn {
  float: right;
  background-color: #2c88d9 !important;
  color: white;
  box-shadow: none;
}
main {
  width: 600px;
  margin: 0 auto;
}
</style>

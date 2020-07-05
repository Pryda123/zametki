<template>
  <div id="app">
    <header class="header">
      <router-link to="/" class="header__logo">Мои заметки</router-link>
      <router-link to="/add" class="btn btn-add"><span class="btn-text">Добавить</span><img src="./assets/icons/add.png" alt=""></router-link>
    </header>

    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #2c3e50;
}
.header__logo {
  color: #fff;
  font-size: 24px;
}
.btn {
  display: flex;
  background: none;
  border: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
}
.btn:hover {
  cursor: pointer;
}
.btn-add {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 16px;
  background: none;
  border: 0;
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  border-radius: 5px;
}
.btn-add:hover {
  background-color: #e2e6ea;
  border-color: #dae0e5;
}
.main {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 30px;
  margin: 0 -15px;
  width: 100%;
}
@media (max-width: 500px) {
  .header {
    padding: 15px;
  }
}
@media (max-width: 400px) {
  .btn-text {
    display: none;
  }
}
</style>

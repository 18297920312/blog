<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="app">
  </div>
    <router-view/>
  </div>
</template>

<script>
import request from './helper/request'
window.request = request
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--
 * @Author: your name
 * @Date: 2020-11-06 18:24:03
 * @LastEditTime: 2020-11-06 18:27:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue_rem/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.2rem;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

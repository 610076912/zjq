<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <ul>
        <router-link tag="li" to="/">服务</router-link>
        <router-link tag="li" to="/product">产品</router-link>
        <router-link tag="li" to="/resources">资源</router-link>
        <router-link tag="li" to="/ours">我们</router-link>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="bottom">
      <img src="./assets/bottom.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/reset.css";

  #app {
    width: 100%;
    .header {
      width: 1200px;
      height: 150px;
      margin: 0 auto;
      padding: 30px 200px;
      .logo {
        float: left;
        width: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      ul {
        overflow: hidden;
        padding: 30px;
        .router-link-exact-active {
          background: #e87348;
        }
        li {
          float: left;
          list-style: none;
          width: 90px;
          height: 40px;
          background: #4eb2e3;
          color: #fff;
          text-align: center;
          line-height: 40px;
          border-radius: 5px;
          margin-left: 30px;
          cursor: pointer;
        }
      }
    }
    .content {
      min-height: calc(100vh - 338px);
      width: 1200px;
      margin: 0 auto;
    }
    .bottom {
      width: 1200px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
      }
    }
  }
</style>

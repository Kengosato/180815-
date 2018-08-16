<template>
  <div id="app">
    <tab-menu></tab-menu>
    <img src="./assets/logo.png">
    <h1>「おおたまを学ぶ」のデモサイトを作る</h1>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
import TabMenu from '@/components/TabMenu'

export default {
  name: 'app',
  components:{
    TabMenu
  }
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

<template>
  <div id="app">
    <MHeader></MHeader>
  </div>
</template>

<script>
import MHeader from 'components/Mheader'
export default {
  name: 'App',
  comments: {MHeader}
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

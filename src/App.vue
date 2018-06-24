<template>
  <div id="app">
    <VHeader></VHeader>
    <VTab></VTab>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from 'components/Header/v-header'
import VTab from 'components/Tab/tab'
export default {
  name: 'App',
  components: {VHeader, VTab}
}
</script>

<style>
</style>

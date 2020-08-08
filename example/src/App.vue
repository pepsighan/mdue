<template>
  <div id="app">
    <ab-testing style="color: gray; font-size: 64px;"></ab-testing>
  </div>
</template>

<script>
import { AbTesting } from 'mdue';

export default {
  name: 'App',
  components: {
    AbTesting,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <shoppingCart/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  @include size(100%);
  background-color: #111;  
  color:white;
}
</style>

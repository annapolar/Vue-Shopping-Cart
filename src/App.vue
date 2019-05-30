<template>
  <div id="app">
    <h1>Vue.js Shopping Cart</h1>
    <shoppingCart/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./style/common.scss";

#app {
  font-family: "Lato", sans-serif;
  @include size(100%);
  background-color: #111;
}
</style>

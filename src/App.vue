<template>
  <div id="app">
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
  background-color: #111;
  font-family: "Lato", sans-serif;
  @include size(100%);
  display: flex;
}
</style>

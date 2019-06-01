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
  background-image: linear-gradient(to bottom, #1b1d22, #2b303a);
  font-family: "Lato", sans-serif;
  @include size(100%);
  display: flex;
  overflow: hidden;
}
</style>

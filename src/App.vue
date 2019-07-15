<template>
  <div id="app">
    <shoppingCart />
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
  background-image: linear-gradient(to bottom, #15161a, #272e3b);
  font-family: "Lato", sans-serif;
  @include size(100%);
  display: flex;
  overflow: hidden;
 
}
</style>

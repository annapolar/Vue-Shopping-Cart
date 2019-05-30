<template>
  <div id="app">
    <div class="title">Vue.js Shopping Cart</div>
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
  @include flexCenter;
  justify-content: left;
  .title{
    color:white;
    position: fixed;
    top:20px;
    left:40px;
    font-size:30px;
    font-weight: 700;
  }
}
</style>

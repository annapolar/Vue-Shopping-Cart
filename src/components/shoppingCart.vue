<template>
  <div class="shoppingCart">
    <h2>dvd shopping cart</h2>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      movies: []
    };
  },
  created() {
    axios.get("https://awiclass.monoame.com/api/command.php?type=get&name=movies").then(res => {
      this.movies = res.data;
      console.table(this.movies)
    });
  }
};
</script>


<style scoped lang="scss">
</style>

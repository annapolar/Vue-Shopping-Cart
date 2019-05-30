<template>
  <div class="shoppingCart">
    <div class="cards">
      <div class="card" v-for="movie in movies">
        <div class="left">
          <div class="cover" :style="bgcss(movie.cover)"></div>
        </div>
        <div class="right">
          <h2>{{movie.name}}</h2>
          <h4>{{movie.type}}</h4>
          <p v-html="movie.description"></p>
          <div class="price">${{movie.price}}</div>
          <button class="add">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: []
    };
  },
  created() {
    axios
      .get("https://awiclass.monoame.com/api/command.php?type=get&name=movies")
      .then(res => {
        this.movies = res.data;
        console.table(this.movies);
      });
  },
  methods: {
    bgcss(url) {
      return{
        'background-image':'url('+ url +')',
        'background-position':'center center',
        'background-size':'cover'
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../style/common.scss';

.shoppingCart {
  .cards {
   .card{
     .left{
       .cover{
         width:180px;
         height:250px;
         @include bxShadow
       }
     }
     .right{

     }
   }
  }
}
</style>

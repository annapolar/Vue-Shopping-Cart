<template>
  <div class="shoppingCart" @wheel.prevent="wheel">
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
          <button class="add">+ Add to My Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { TweenMax } from "gsap/TweenMax";

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
     
      });
  },
  methods: {
    bgcss(url) {
      return {
        "background-image": "url(" + url + ")",
        "background-position": "center center",
        "background-size": "cover"
      };
    },
    wheel(e) {
      TweenMax.to(".cards", 0.8, {
        left: "+=" + e.deltaY*2 + "px"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../style/common.scss";

.shoppingCart {
  flex: 1;
  border: 2px solid yellow;

  .cards {
    @include flexCenter;
    justify-content: left;
    height: 100%;
    margin: 0 20vw;
    position: relative;
    transition: 0.5s, left 0s;
    left: 0;
    border: 2px solid green;

    .card {
      margin: 60px;
      @include size(460px, auto);
      display: inline-block;
      flex-shrink: 0;
      display: inline-flex;
      background-color: rgba(white, 0.9);
      transition: 0.5s;
      border-radius: 5px;
      @include bxShadow;
      padding: 20px;
      padding-bottom: 0;

      &:hover {
        transform: translateY(-10px);
        .left {
          .cover {
            transform: translateY(-10px);
          }
        }
      }

      .left {
        flex: 1;
        margin-bottom: -15px;

        .cover {
          @include size(180px, 240px);
          @include bxShadow;
          border-radius: 5px;
          position: relative;
          top: -50px;
          transition: 0.5s;
        }
      }
      .right {
        flex: 2;
        padding: 20px;
        padding-top: 10px;
        h2 {
          margin: 0;
          font-weight: bold;
          font-size: 24px;
          color: #444;
          font-family: "Roboto Slab", serif;
        }
        h4 {
          margin: 10px 0;
          font-weight: normal;
          opacity: 0.6;
        }
        p {
          font-size: 13px;
          line-height: 1.3;
          text-align: justify;
          opacity: 0.3;
          min-height: 5em;
        }
        .price {
          display: inline-block;
          margin-right: 20px;
        }
        button {
          padding: 5px 10px;
          background-color: #bbb;
          color: rgba(white, 0.9);
          border-radius: 50px;
          cursor: pointer;
          transition: 0.5s;
          border: none;
          &:hover {
            color: white;
            background-color: #f95e5e;
          }
        }
      }
    }
  }
}
</style>

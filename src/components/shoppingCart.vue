<template>
  <div class="shoppingCart" @wheel.prevent="wheel">
    <div class="title">DVD Shopping Cart (Vue.js)</div>
    <div class="cards" :class="{isCartOpen:isCartOpen}">
      <div class="card" v-for="(movie, index) in movies" :key="index">
        <div class="left">
          <div class="cover" :style="bgcss(movie.cover)"></div>
        </div>
        <div class="right">
          <h2>{{movie.name}}</h2>
          <h4>{{movie.type}}</h4>
          <p v-html="movie.description"></p>
          <div class="price">${{movie.price}}</div>
          <button class="add" @click.prevent="addItem(movie,$event)">+ Add to My Cart</button>
          <!-- $event is the original DOM event -->
        </div>
      </div>
    </div>
    <div class="fix-control" @click="isCartOpen=!isCartOpen">
      <i class="fas fa-shopping-cart"></i>
      <span>{{cart.length}}</span>
    </div>
    <div class="cartList" :class="{isCartOpen:isCartOpen}">
      <div class="panel">
        <div class="closePanel" @click="isCartOpen=!isCartOpen">
          <i class="fas fa-times"></i>
        </div>
        <h2>My Shopping Cart List</h2>
        <ul>
          <li v-for="(movie, index) in cart" :key="index">
            <div class="thumbnail" :style="bgcss(movie.cover)"></div>
            <h3>
              {{movie.name}}
              <div class="listRight">
                <div class="price">${{movie.price}}</div>
                <div class="remove" @click="cart.splice(index, 1)">
                  <i class="fas fa-trash"></i>
                </div>
              </div>
            </h3>
          </li>
          <li v-if="!cart.length" class="empty">
            <h3>Your Cart is Empty :(</h3>
          </li>
        </ul>
        <div class="totalPrice">
          Total:
          <span>${{totalPrice}}</span>
        </div>
      </div>
    </div>
    <div class="buybox" :style="bgcss(currentMovie.cover)" v-if="currentMovie"></div>
  </div>
</template>

<script>
import axios from "axios";
import { TweenMax } from "gsap/TweenMax";

export default {
  data() {
    return {
      movies: [],
      cart: [],
      currentMovie: null,
      isCartOpen: false
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
        left: "+=" + e.deltaY * 2 + "px"
      });
    },
    addItem(movie, e) {
      this.currentMovie = movie;

      this.$nextTick(() => {
        // After DOM is updated, then execute this animation
        TweenMax.from(".buybox", 0.8, {
          left: e.pageX - 50,
          top: e.pageY,
          opacity: 1
        });
        setTimeout(() => {
          this.cart.push(movie);
        }, 800);
      });
    }
  },
  watch: {
    cart() {
      TweenMax.from(".fa-shopping-cart", 0.3, {
        scale: 0.5
      });
    }
  },
  computed: {
    totalPrice() {
      return this.cart
        .map(movie => movie.price)
        .reduce((total, currentPrice) => total + currentPrice, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.shoppingCart {
  flex: 1;
  background: radial-gradient(rgba(#000,0.2) 20%, rgba(rgb(38, 42, 54),0.2) 20%);
  background-size: 10px 10px;
  -webkit-animation: bscale 10s infinite linear;
  animation: bscale 100s infinite linear;

  .title {
    @include fixPosition(50px, 30px);
    color: white;
    font-size: 26px;
    font-weight: 600;
  }

  .cards {
    @include flexCenter;
    justify-content: left;
    height: 100%;
    margin: 0 20vw;
    position: relative;
    transition: 0.5s, left 0s;
    left: 0;
    &.isCartOpen {
      transform: scale(0.8);
    }

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
          font-size: 22px;
          color: #444;
        }
        button {
          padding: 10px 20px;
          border-radius: 50px;
          cursor: pointer;
          color: rgba(white, 0.9);
          background-image: linear-gradient(
            to right,
            #f95e5e 0%,
            #ffa58a 51%,
            #f95e5e 100%
          );
          background-size: 200% auto;
          transition: 0.5s;
          border: none;
          font-size: 14px;
          &:hover {
            color: white;
            background-position: right center;
          }
        }
      }
    }
  }
  .fix-control {
    position: fixed;
    top: 20px;
    right: 40px;
    color: white;
    font-size: 26px;
    z-index: 1000;
    opacity: 0.5;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 1;
    }

    span {
      font-size: 15px;
      margin-left: 10px;
    }
  }
  .buybox {
    @include size(50px, 80px);
    position: fixed;
    right: 30px;
    top: 30px;
    opacity: 0;
  }
  .cartList {
    @include size(100%);
    @include fixPosition(0, 0);
    @include flexCenter;
    color: white;
    background-image: linear-gradient(
      10deg,
      #111 0%,
      #111 50%,
      rgba(#111, 0.4) 100%
    );
    padding: 5vw;
    box-sizing: border-box;
    opacity: 0;
    transition: 0.5s;
    pointer-events: none;
    &.isCartOpen {
      opacity: 1;
      pointer-events: initial;
    }
    .panel {
      width: 70%;
      position: relative;
      h2 {
        margin-bottom: 40px;
      }
      .closePanel {
        position: absolute;
        right: 10px;
        top: 10px;
        i {
          font-size: 20px;
          color: white;
        }
      }
      ul {
        padding: 0;
        list-style: none;
        border-bottom: 1px solid rgba(white, 0.4);
        padding-bottom: 20px;

        li {
          display: flex;
          margin: 5px 0;
          padding: 6px 20px;
          transition: 0.5s;
          cursor: pointer;
          border-radius: 5px;

          &.empty {
            cursor: initial;
            &:hover {
              background-color: rgba(white, 0);
              transform: translateY(0);
            }
          }

          &:hover {
            background-color: rgba(white, 0.1);
            transform: translateY(-10px);
          }

          h3 {
            font-size: 17px;
            display: inline-block;
            width: 100%;
            opacity: 0.8;
            line-height: 1.6;
            .listRight {
              float: right;
              display: flex;

              .price {
                margin: 0 20px;
              }
              .remove {
                margin: 0 10px;
                font-size: 14px;
                line-height: 2;
                opacity: 0.6;
                &:hover {
                  color: #f95e5e;
                  opacity: 1;
                }
              }
            }
          }
          .thumbnail {
            @include size(50px, 70px);
            display: inline-block;
            margin-right: 20px;
          }
        }
      }
      .totalPrice {
        padding: 10px 20px;
        font-size: 20px;
        span {
          float: right;
          margin-right: 50px;
          letter-spacing: 1.3px;
        }
      }
    }
  }
}
</style>
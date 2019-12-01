<template>
  <v-app>
    <div class="container" style="background-color: transparent!important; opacity: 0.99;
   border-color: transparent!important;">
      <div id="particles-js">
        <vue-particles
                color="#48a999"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#6745c2"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
        </vue-particles>
      </div>
      <app-header></app-header>
      <div class="row">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  name: 'App',

  components: {
    appHeader: Header,
  },
  created(){
    this.$store.dispatch('initStocks');
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  body{
    padding: 30px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  #particles-js canvas {
    display: block;
    vertical-align: bottom;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-transition: opacity .8s ease, -webkit-transform 1.4s ease;
    transition: opacity .8s ease, transform 1.4s ease
  }

  #particles-js {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -10;
    top: 0;
    left: 0
  }
</style>

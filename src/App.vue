<template>
  <div id="app">
    <Topline></Topline>
    <transition name="fade">
      <div class="container-fluid nav_position" v-if="navShow">
        <div class="row">
          <ul class="nav nav-tabs col-md-6 col-md-offset-1">
            <li class="active "><router-link to="/"><span class="glyphicon glyphicon-home nav-icon"></span>首页</router-link></li>
            <li><router-link to="/classify"><span class="glyphicon glyphicon-tags nav-icon"></span>分类</router-link></li>
            <li><router-link to="/about"><span class="glyphicon glyphicon-font nav-icon"></span>关于</router-link></li>
          </ul>
        </div>
      </div>
    </transition>
    <router-view></router-view>
    <ONJ></ONJ>
  </div>
</template>

<script>
import ONJ from './components/commentComponents/ONJ.vue'
import Topline from './components/commentComponents/Topline.vue'
export default {
  name: 'app',
  data () {
    return {
      navShow: true,
      scrollY: ''
    }
  },
  components: {
    ONJ,
    Topline
  },
  methods: {
    handleScroll () {
      if (this.scrollY > window.scrollY) {
        this.navShow = true
      } else {
        this.navShow = false
      }
      this.scrollY = window.scrollY
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
  .nav-icon {
    margin-right:5px;
  }

  .nav_position {
    position:fixed;
    left:0;
    right:0;
    top:0;
    background:rgba(256,256,256,.6);
    z-index:233;
  }

  .fade-enter {
    transform: translateY(-20px);
    opactity: 0;
  }

  .fade-enter-active {
    transition: all .5s ease;
  }

  .fade-leave-active {
    opacity: 0
  }
</style>

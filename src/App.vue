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
    <transition name="backTop">
      <div class="scrollImg" v-on:click="scrollTop" v-if="backTop">
        <img :src="scrollImg" alt="=。=貌似网络不好">
      </div>
    </transition>
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
      scrollY: '',
      scrollImg: 'static/scroll.png',
      backTop: false
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
      if (window.scrollY > window.innerHeight) {
        this.backTop = true
      } else {
        this.backTop = false
      }

      this.scrollY = window.scrollY
    },
    scrollTop () {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.scrollTop)
        window.scrollTo(0, currentScroll - (currentScroll / 5))
      }
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

  .scrollImg {
    position: fixed;
    right: 40px;
    top: 0;
    margin-top: -230px;
  }

  .backTop-enter-active {
    transition:all .3s ease;
  }

  .backTop-enter,.backTop-leave-active {
    transform: translateY(-700px);
  }

  .backTop-leave-active {
    transition: all .8s ease;
  }

</style>

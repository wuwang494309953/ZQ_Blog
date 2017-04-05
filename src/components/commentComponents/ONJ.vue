<template>
  <div class="onj">
    <img :src="imgSrc" id="onjImg" @click="clickWithMp3"></img>
    <audio :src="onjSrc" ref="bgMusic"></audio>
  </div>
</template>

<script>
export default {
  name: 'onj',
  data () {
    return {
      imgSrc: 'static/xm.png',
      onjSrc: 'static/onj001.mp3'
    }
  },
  methods: {
    clickWithMp3 () {
      var audio = this.$refs.bgMusic
      audio.play()
    }
  }
}
</script>

<style>
  #onjImg {
    position:fixed;
    bottom:0;
    left:0;
    z-index:1;
    width:50px;
    transition:all 0.3s linear; 
  }

  #onjImg:hover {
    transform:scale(1,1.2) translate(0px,-3px);
  }
</style>

<template>
  <div class="progress topline">
    <div class="progress-bar progress-bar-success" :style="{width:complete}">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topline',
    data () {
      return {
        complete: ''
      }
    },
    watch: {
      complete: function (newComplete) {
        console.log('进度条')
      }
    }
  }
</script>

<style>
  .topline {
    height:2px;
    margin-bottom:0px;
    position:fixed;
    top:0px;
    left:0px;
    right:0px;
    z-index:1;
  }
</style>

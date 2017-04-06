<template>
  <div class="right-width">
    <div class="right-item">
      <div class="item-border">
        <img class="headImg" :src="headSrc"></img>
        <h5>蕾 姆 酱</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexME',
    data () {
      return {
        headSrc: 'static/leimu.jpg'
      }
    }
  }
</script>

<style>
  .right-item {
      border-radius: 5px;
      background-color: white;
      transition:all 0.3s linear;
      overflow: hidden;
  }

  .right-item:hover {
      margin-top: -10px;
	  box-shadow: 0px 5px 10px 2px lightgray;
  }

  .item-border {
    margin:10px;
    overflow: hidden;
    text-align: center;
  }

  .headImg {
      height: 250px;
  }

</style>

<template>
  <div>
    <div class="index">
    <div class="col-md-12 index-title">
      <p class="index-titlefont" id="show">{{title}}</p>
    </div>
    <div class="col-md-8 col-md-offset-2 index-head">
      <img class="headImg" :src="headSrc"></img>
      <p class="headTitle" v-html="splitHeadTitle"></P>
    </div>
  </div>
  <div class="col-md-10 col-md-offset-1 index-body">
      <IndexBlogTitle></IndexBlogTitle>
  </div>
  </div>
</template>

<script>
import IndexBlogTitle from './IndexCompoents/IndexBlogTitle.vue'
export default {
  name: 'index',
  data () {
    return {
      title: '',
      headSrc: 'static/leimu.jpg',
      headTitle: 'Eloim Essaim Eloim Essaim'
    }
  },
  computed: {
    splitHeadTitle: function () {
      var list = this.headTitle.split(' ')
      for (var i in list) {
        let color = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1)'
        list[i] = '<span style="color:' + color + '">' + list[i] + '<span>'
      }
      return list.join(' ')
    }
  },
  methods: {
    showFont (msg, flag) {
      var i = 0
      let vm = this
      let timer = setInterval(function () {
        vm.title = msg.substring(0, i)
        i++
        if (vm.title === msg) {
          clearInterval(timer)
          if (flag) {
            setTimeout(vm.hideFont, '3000')
          }
        }
      }, 200)
    },
    hideFont () {
      let vm = this
      var i = vm.title.length
      let timer = setInterval(function () {
        vm.title = vm.title.substring(0, i--)
        if (vm.title === '') {
          clearInterval(timer)
          vm.showFont('Hello World', false)
        }
      }, 60)
    }
  },
  mounted: function () {
    this.showFont('这是一个兴趣使然的...<(￣ˇ￣)/', true)
  },
  components: {
    IndexBlogTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    background-image:url(../assets/index_top.png);
    width:100%;
    height:650px;
    background-size:cover;
    background-repeat:no-repeat;
  }

  .index-title {
    height:100px;
    top:35%;
  }

  .index-titlefont {
      font-family: myIndex,'Lato', sans-serif;
			font-size: 4em;
			line-height: 40px;
			color: white;
			text-align: center;
  }

  .index-titlefont:after {
			margin-left:7px;
			content:'|';
			color: #16a085;
			animation-name: opacity;
     	animation-duration: 2s;
      animation-iteration-count: infinite;
		}

    @keyframes opacity {
			0%, 100% {opacity:0;}
  		50% {opacity:1;}
		}

    @font-face {
			font-family: myIndex;
			src:url("../assets/font/LietoMe-TTF.ttf");
			src:url("../assets/font/LietoMe-OTF.otf");
		}

    ::selection {
      background:#FF7F24;
      color:#555;
    }

    .index-head {
      background:rgba(230,244,249,.8);
      top:55%;
      height:220px;
      border-radius:5px;
      text-align:center;
      animation: index-head-show 2s ease-out;
    }

    @keyframes index-head-show {
      0% {top:100%}
      80% {top:50%}
      85% {top:60%}
      90% {top:53%}
      100% {top:55%}
    }

    .headImg {
      width:100px;
      height:100px;
      border-radius:100%;
      margin-top:50px;

    }

    .headImg:hover {
      animation: headImgAnimation 0.75s linear;
    }

    @keyframes headImgAnimation {
      0% {transform:scale(0.9) rotate(-10deg)}
      50%,70%,90% {transform: rotate(-5deg);}
      40%,60%,80% {transform: rotate(5deg);}
    }

    .headTitle {
      margin-top:30px;
      font-size:20px;
    }

    .index-body {
      margin-top:60px;
    }
</style>

<template>
    <div class="item-main row">
      <div class="item-head">
        <p class="item-title-p col-md-11">
          <a href="#" class="item-title">{{title}}</a>
        </p>
        <p class="item-subtitle col-md-11">
          <span class="glyphicon glyphicon-heart"></span> {{time}} •
          <span class="glyphicon glyphicon-eye-open"></span> {{numEyes}} •
          <span class="glyphicon glyphicon-comment"></span> {{numComment}}
        </p>
      </div>
      <div class="item-body col-md-12">
        <div v-for="item in datas">
            <p v-if="item.key === 'text'" class="item-text">{{item.value}}</p>
            <img v-else-if="item.key === 'img'" :src="item.value"></img>
        </div>
        <p class="item-foot">
            <a href="#" class="item-all-btn">阅读全文 >></a>
        </p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'IndexBlogItem',
    data () {
      return {
        title: 'Service Workers 实现网站加速和离线缓存',
        time: '2017年3月3日',
        numEyes: '1,911次围观',
        numComment: '活捉27条',
        datas: [
          { key: 'text', value: '最近看到了 Service Workers 这个东西，它可以根据配置为用户缓存网站静态与动态资源：截获用户的所有网络请求，根据缓存配置来决定是从缓存还是网络获取相应资源，从而可以极大提高网页的加载速度。优点有可定制性高、不需要服务端支持、效果显著。' },
          { key: 'text', value: '最后的效果就是当你第二次访问我的网站时只会加载大约80k 的资源（除去 AdSense 的情况下），这其中包括了所有图片和音频视频，这 80k 主要是 HTML 和我使用的 DPlayer 的 API。' },
          { key: 'img', value: 'static/leimu.jpg' }
        ]
      }
    }
  }
</script>

<style>
    .item-main {
        background-color:white;
        border-radius:5px;
        margin-bottom: 50px;
        padding:5px;
    }

    .item-head {
         margin-top: 30px;
    }

    .item-title-p {
        text-align: center;
    }

    .item-title {
       font-size:25px;
       display:inline;
       
    }

    .item-subtitle {
        text-align: center;
    }

    .item-body {
    }

    .item-text {
        margin:10px 0;
        line-height:24px;
        font-size: 15px;
        text-indent:2em;
    }

    .item-foot {
        text-align: center;
        margin: 20px;
    }

    .item-all-btn {
        background-color: #337ab7;
        color: white;
        border-radius: 4px;
        padding: 5px 10px;
        font-size: 12px;
    }

    a:hover { text-decoration:none }
</style>

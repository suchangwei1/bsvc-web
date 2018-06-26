<template>
  <div class="wl-ground">
    <el-row :gutter="20" >
      <el-col :span="6" :offset="6"></el-col>
      <el-col :span="12" :offset="10" class="d-title"  style="margin-top: 20px">
        <span style="font-size: 20px ; color: aliceblue;margin-top:30px;position: absolute;margin-left: 80px">未来趋势</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 40px" type="flex" align="middle">
      <el-col :span="12" :offset="4" class="wlqs-content"  >
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="12" :offset="5" style="background-color: black;width: 800px;height:400px;opacity:0.7;position: absolute;margin-top: -10px" >
              <span style="color: #fff;font-size: 13px;;margin-top: 100px;position: absolute">
互联网发展至今正在深深的改变着人类社会的生活方式！从1969年在美国只有四台主机相连开始，到现在几十亿的终端互联，互联网爆发了极大的活力与进步。互联网从诞生开始就一直在不停的打破传统时间空间的束缚，带给人们对自由互联生活的向往。拥抱互联网，现在的生活，只需几秒钟就可以完成对远方朋友邮件的问候，只需打开视频就可以见到恋人那熟悉而美丽的面孔！人们可以在FACEBOOK，QQ，朋友圈随时随地的分享人生的美好与感觉，也可以在海量商品的电商平台（EBAY，淘宝，亚马逊）等，选购自己喜欢的商品。这是属于互联网的时代！互联网打破了许多传统市场的垄断与约束，带给人们更优质的人生体验。
互联网的发展带给我们更多的是生活的改变.改变就意味着对传统的颠覆，每个时代都需要改变的力量，这个时代的改变更多的来自于互联网！互联网正在改变的是传统的金融体系，因为我们正在为过高的转账手续费，过长的到账时间，银行里漫长的排队时间而抱怨。人们迫切需要更加高效，低廉，快捷的支付清算系统。BSVC专为解决人们对传统金融体系抱怨而产生的互联网金融创新。BSVC是基于RTXP协议的金融网络产品。它是更低成本、更高效的的支付清算系统、汇兑系统。它支持各种类型的货币，包括虚拟货币和法币，使得互联网支付就像Email一样简单便捷。BSVC系统必将打破传统金融体系对市场的垄断，就像网上购物颠覆了传统零售行业一样！</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'future',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  .wl-ground {
    background:url("../assets/wlqsground.jpg") no-repeat center center scroll;
    height: 1020px;
  }
  </style>

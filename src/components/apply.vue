<template>
  <div id="background">
      <div  class="bg-photo bg-photo-1" >
        <ul class="tab-list" >
          <li  v-for="(value, index) in actList"  :key="value.id" v-bind:style="{ 'border-bottom': value.activeColor ? '2px solid #05a4a4':'','color': value.activeColor ? '#05a4a4':''}" v-on:click="actClick(index)">{{value.label}}</li>
        </ul>
    </div>
    <el-row :gutter="20" class="header-content">
      <el-col :span="6" :offset="6">
        <span>BSVC</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="header-contentTwo">
      <el-col :span="12" :offset="6">
        <span>BSVC是基于“智慧城市的未来运用”
主要功能：收藏——价值兑换：是协助优质企业做市值管理扩融、创造万物纵横的物联网区块链，安全技术创新，数量有限，限量发行。</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      actList: [{label: '概要', activeColor: true},
        {label: '普通用户', activeColor: false},
        {label: '做市商', activeColor: false},
        {label: '商家', activeColor: false},
        {label: '金融机构', activeColor: false},
        {label: '技术背景', activeColor: false},
        {label: '未来趋势', activeColor: false}],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    actClick (index) {
      for (let i = 0; i < this.actList.length; i++) {
        if (this.actList[i].activeColor) {
          this.actList[i].activeColor = false
        }
      }
      this.actList[index].activeColor = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .back-ground{
    background-image:url("../assets/background.jpg") ;
    height: 10rem;
    width: 16rem;
  }
h1, h2 {
  font-weight: normal;
}
  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
  .tab-list  {
    margin-left: 2rem;
    position: absolute;
    text-align: center;
    line-height: 40px;
    font-family: "微软雅黑";
    height: 40px;
    border-bottom: none;
    font-size: 0.2rem;
  }
  .tab-list  li {
    float: left;
  color: aliceblue;
    width: 1.6rem;
    cursor: pointer;
  }
  #background
  {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #211f1f;
  }
  #background .bg-photo
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    overflow: hidden;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
  }
  #background .bg-photo-1
  {
    display: block;
    background: url('../assets/background.jpg') no-repeat center center;
  }

  .header-content {
    margin-top: 100px;
    color: aliceblue;
    font-weight:bold;
    font-size: 24px;
  }
  .header-contentTwo {
    margin-top: 30px;
    color: aliceblue;
    font-weight:bold;
    font-size: 12px;
  }
  .news_tit{ height:63px; line-height:33px;overflow:hidden;color:#FF0066; position:relative; font-size:14px; padding-left:10px; font-weight:bold;}
  .tab2new div.active{  width:80px; height:34px; line-height:34px;  }
  .tab2new div.active a{color: #05a4a4;}
  .tab2new div{ float: left;width:80px; text-align:center; height:26px; line-height:34px;}
  .tab2new div a{color:#ffffff;}
  .l{ float:left}
</style>

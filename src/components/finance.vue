<template>
  <div class="jrjg-ground">
    <el-row  type="flex" justify="center">
      <el-col class="d-title"  >
        <span class="finance-header" v-bind:style="{'margin-left':this.$i18n.locale === 'zh'? '90px':'30px'}">{{$t('financial.financial')}}</span>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="12"  :offset="6">
        <p   class="font-ys">
          {{$t('financial.introduce')}}
        </p>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12"  class="jr-img">
        <div  class="fin-ig"><span  class="ig-content">{{$t('financial.financialIntroduceOne')}}</span></div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 30px" type="flex" justify="center">
      <el-col :span="12" class="jr-imgtwo">
        <div  class="fin-ig"><span class="ig-content">{{$t('financial.financialIntroduceTwoL')}}</span></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'finance',
    data () {
      return {

      }
    },
    created:function() {
console.log(this.$i18n.locale === 'zh')
    },
    methods: {

    }
  }
</script>
<style scoped>
  .jrjg-ground {
    background:url("../assets/jrjg-ground.jpg") no-repeat center center scroll;
    height: 820px;
    background-size:100% 100%;
  }
  .d-title {
    background:url("../assets/dtitle.png") no-repeat ;
    height: 80px;
    width: 248px;
    margin: 0 auto;
    margin-top: 40px;
  }
  .finance-header {
    font-size: 20px ;
    color: aliceblue;
    margin-top:30px;
    position: absolute;
    text-align: center;
  }
  .font-ys {
    color: aliceblue;
    font-size: 0.2rem;
    margin: 0.1rem;
  }
  .jr-imgtwo {
    background:url("../assets/jr02.jpg") no-repeat ;
    height: 160px;
    width: 10rem;
    background-size:100% 100%;
  }
  .jr-img {
    background:url("../assets/jr01.jpg") no-repeat ;
    height: 160px;
    width: 10rem;
    background-size:100% 100%;
  }
  .ig-content {
    z-index: 1000;
    color:#fff
  }
  .fin-ig {
    z-index:1;
    background:rgb(94,101,100);

    margin-top: 60px;
    font-size: 12px
  }
</style>

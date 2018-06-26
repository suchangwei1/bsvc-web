<template>
  <div class="js-ground">
    <el-row type="flex" justify="center" >
      <el-col  class="d-title"  >
        <span class="js-header" v-bind:style="{'margin-left':this.$i18n.locale === 'zh'? '90px':'30px'}">{{$t('technical.TechnicalBackground')}}</span>
      </el-col>
    </el-row>
    <el-row  type="flex" align="middle" class="top-xs">
      <el-col :span="10" :offset="2" class="js-content"  >
      </el-col>
      <el-col :span="12"  class="hark-con">
        <p class="font-ys"> {{$t('technical.introduce')}} </p></el-col>
    </el-row>
    <el-row :gutter="20"  class="top-xs">
      <el-col :span="6"  :offset="3">
        <el-row type="flex" justify="center">
          <img class="img-style"  src="../assets/jsfooter01.png"/>
        </el-row>
        <el-row type="flex" justify="center" class="top-ls">
          <span class="font-type">{{$t('technical.introduceContentOne')}} </span>
        </el-row>
      </el-col>
      <el-col :span="6"  >
        <el-row type="flex" justify="center" >
          <img class="img-style"  src="../assets/jsfooter02.png"/>
        </el-row>
        <el-row type="flex" justify="center" class="top-ls">
          <span class="font-type">{{$t('technical.introduceContentTwo')}}</span>
        </el-row>
      </el-col>
      <el-col :span="6"  >
        <el-row type="flex" justify="center">
          <img class="img-style" src="../assets/jsfooter03.png"/>
        </el-row>
        <el-row type="flex" justify="center" class="top-ls">
          <span class="font-type">{{$t('technical.introduceContentInfo')}}</span>
        </el-row>
      </el-col>
    </el-row>
  </div>

</template>
<script>
  export default {
    name: 'technology',
    data () {
      return {

      }
    },
    methods: {

    }
  }
  </script>
<style scoped>
  .top-ls {
    margin-top: 10px;
  }
  .js-ground {
    background:url("../assets/jsground.jpg") no-repeat center center scroll;
    height: 100%;
    background-size:100% 100%;
  }
  .img-style {
    border-radius:3.4rem;
    height: 3.4rem;
    width: 3.4rem
  }
  .top-xs {
    margin-top: 0.5rem;
  }
  .d-title {
    background:url("../assets/dtitle.png") no-repeat ;
    height: 80px;
    width: 248px;
    margin: 0 auto;
  margin-top: 0.2rem;
  }
  .js-content {
    background:url("../assets/jsone.jpg") no-repeat;
    height:5rem;
    width: 6rem;
    background-size:100% 100%;
  }
  .js-header {
    font-size: 20px ;
    color: aliceblue;
    margin-top:30px;
    position: absolute;
  }
  .hark-con {
    background-color: black;
    width: 6.8rem;
    height:400px
  }
  .font-ys {
    color: #fff;
    font-size: 12px;
    margin-top: 1rem
  }
  .font-type {
    color: aliceblue;
    font-size: 13px
  }
  </style>

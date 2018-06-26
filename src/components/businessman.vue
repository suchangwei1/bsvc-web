<template>
  <div class="sj-ground">
    <el-row type="flex" justify="center" >
      <el-col  class="d-title"  >
        <span class="sj-header" >{{$t('merchants.merchantsInfo')}}</span>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="16"  :offset="4">
        <p class="font-type">
          {{$t('merchants.introduce')}}
        </p>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="6"  :offset="4">
        <div style="" class="outline"></div>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="16"  :offset="4">
        <p style="" class="font-type">
          {{$t('merchants.introduceExample')}}
        </p>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" >
      <el-col :span="8">
        <p class="font-type"> {{$t('merchants.introducecenter')}}
        </p>
      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="6"  :offset="4">
        <el-row type="flex" justify="center"><img class="img-border" src="../assets/user01.jpg"/></el-row>
        <el-row type="flex" justify="center" ><span class="font-type"> {{$t('merchants.transfer')}}</span></el-row>
      </el-col>
      <el-col :span="6"  >
        <el-row type="flex" justify="center"><img class="img-border" src="../assets/user02.jpg"/></el-row>
        <el-row type="flex" justify="center" ><span class="font-type"> {{$t('merchants.fee')}}</span></el-row>
      </el-col>
      <el-col :span="6"  >
        <el-row type="flex" justify="center"><img class="img-border" src="../assets/user03.jpg"/></el-row>
        <el-row type="flex" justify="center" ><span class="font-type"> {{$t('merchants.internet')}}</span></el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'businessman',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  .sj-ground {
    background:url("../assets/sjground.jpg") no-repeat center center scroll;
    height: 820px;
    width: 100%;
  }
  .sj-header {
    font-size: 20px ;
    color: aliceblue;
    margin-top:30px;
    position: absolute;
    margin-left: 100px
  }
  .d-title {
    background:url("../assets/dtitle.png") no-repeat ;
    height: 80px;
    width: 248px;
    margin: 0 auto;
    margin-top: 40px
  }
  .font-type {
    color: aliceblue;
    font-size: 0.2rem;
  }
  .img-border {
     border-radius:3rem;
     height: 3rem;
     width: 3rem
   }
  .outline {
    height:1px;
    margin:0px auto;
    padding:0px;
    background-color:#D5D5D5;
    overflow:hidden;
  }
  </style>

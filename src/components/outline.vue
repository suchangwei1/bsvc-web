<template>
  <div class="gy-ground">
    <transition name="slide-fade">
      <div v-if="show">
    <el-row  type="flex" justify="center">
      <el-col   class="d-title" >
        <span class="gy-cl" >{{$t('outline.outlineInfo')}}</span>
      </el-col>
    </el-row>
    <el-row  class="header-contentTwo" type="flex" justify="center">
      <el-col :span="18" >
        <span>{{$t('outline.introduce')}}</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="ma-top">
      <el-col  class="x-title">
        <span class="xt-user">{{$t('outline.participants')}}</span>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="center">
      <el-col :span="8"  class="user-header">
        <el-row    >
          <el-col :span="8" :offset="8">
            <img  class="img-cl" src="../assets/ptuser.png"/>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col  :xs="16" :sm="10">
            <p class="ce-content">
              {{$t('outline.user')}}
            </p>
          </el-col>
         </el-row>
        <el-row >
          <el-col :span="16" :offset="4">
            <div class="xh-ys"></div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" >
            <p class="font-ys">
              {{$t('outline.userIntroduce')}}
            </p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="1" class="user-header">
        <el-row type="flex" justify="center">
          <el-col :span="12" :offset="7">
            <img class="img-cl"  src="../assets/wg.png"/>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col  :xs="16" :sm="10">
            <p class="ce-content">
              {{$t('outline.gateway')}}
            </p>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="16" :offset="4">
            <div class="xh-ys"></div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" >
            <p class="font-ys">
              {{$t('outline.gatewayIntroduce')}}
            </p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="1" class="user-header">
        <el-row >
          <el-col :span="8" :offset="9">
            <img class="img-cl"  src="../assets/zss.png"/>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col  :xs="7" :sm="6">
            <p class="ce-content">
              {{$t('outline.marketmakers')}}
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :offset="4">
            <div class="xh-ys"></div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" >
            <p class="font-ys">
              {{$t('outline.marketmakersIntroduce')}}
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'outline',
    data () {
      return {
        show: false
      }
    },
    mounted:function() {
    let self = this;
      window.addEventListener('scroll',function() {
        if (document.documentElement.scrollTop > 500) {
          if ( !self.show ) {
            self.show = true;
          }
        }
      });
    },
    methods: {

    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide-fade-enter-active {
    transition: all 1.8s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }
  .x-title {
    background:url("../assets/xtitle.png") no-repeat ;
    height: 80px;
    width: 260px;
  }
  .img-cl {
    height: 0.8rem;width: 1rem
  }
  .header-contentTwo {
    margin-top: 30px;
    color: aliceblue;
    font-weight:bold;
    font-size: 0.2rem;
  }
  .ce-content {
    color: aliceblue;
    font-size: 0.2rem;
    margin: 0px
  }
  .font-ys {
    color: aliceblue;
    font-size: 0.2rem;
    margin: 0.1rem;

  }
  .user-header {
    width: 4rem;
    height: 4.2rem;
    background-color: #116c75;
    opacity:0.8;
  }
  .gy-ground {
    background:url("../assets/gyground.jpg") no-repeat center center scroll;
    height: 840px;
    background-size:100% 100%;
  }
  .mp-top {
    padding-top: 30px
  }
  .d-title {
    background:url("../assets/dtitle.png") no-repeat ;
    height: 80px;
    width: 248px;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .user-font {
    color: aliceblue;
    font-size: 0.3rem;
  }
  .ma-top {
    margin-top: 0.3rem;
  }
  .xh-ys {
    height:1px;
    margin:0px auto;
    padding:0px;
    background-color:#D5D5D5;
    overflow:hidden;
  }
  .gy-cl {
    font-size: 20px ;
    color: aliceblue;
    padding-top: 30px;
    position: absolute;
    margin-left: 100px
  }
  .xt-user {
    font-size: 16px ;
    color: aliceblue;
    padding-top: 20px;
    position: absolute;
    margin-left: 40px
  }
</style>

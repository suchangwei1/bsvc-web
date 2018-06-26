<template>

  <div class="pt-user-ground">
    <transition name="slide-fades">
      <div v-if="userShow">
    <el-row type="flex" justify="center">
      <el-col  class="user-title"  >
        <span  v-bind:style="{'margin-left':this.$i18n.locale === 'zh'? '90px':'60px'}" class="user-header">{{$t('user.userInfo')}}</span>
      </el-col>
    </el-row>
    <el-row  class="header-contentTwo" type="flex" justify="center">
      <el-col  :span="18" >
        <span class="font-ys">{{$t('user.introduce')}}</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="ma-top">
      <el-col class="x-title">
        <span class="xt-content">{{$t('user.participant')}}</span>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="center">
      <el-col :span="6" :offset="2" >
        <img  class="zd-font" src="../assets/hg.jpg"/>
      </el-col>
      <el-col :span="14">
        <el-row >
          <el-col  :span="4">
            <img  src="../assets/zfsb.png"/>
          </el-col>
          <el-col :span="10">
            <span class="font-ys">{{$t('user.pay')}}</span>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="8" >
            <div style="height:1px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;"></div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="20" class="header-contentTwo">
          <span class="font-ys">{{$t('user.payInfo')}}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center"  class="ma-top">
      <el-col :span="6" :offset="2" >
        <img  class="zd-font" src="../assets/hwh.jpg"/>
      </el-col>
      <el-col :span="14" >
        <el-row>
          <el-col :span="4" >
            <img  src="../assets/hwhtp.png"/>
          </el-col>
          <el-col :span="10">
            <span class="font-ys">{{$t('user.currency')}}</span>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="8" >
            <div class="underline"></div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="20" class="header-contentTwo">
          <span class="font-ys">{{$t('user.currencyInfo')}}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="center" class="ma-top">
      <el-col :span="6" :offset="2" >
        <img class="zd-font"src="../assets/wg.jpg"/>
      </el-col>
      <el-col :span="14" >
        <el-row>
          <el-col :span="4" >
            <img src="../assets/gwtp.png"/>
          </el-col>
          <el-col :span="10">
            <span class="font-ys">{{$t('user.gateway')}}</span>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="8" >
            <div class="xh-cl"></div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="20" class="header-contentTwo">
            <span class="font-ys">{{$t('user.gatewayInfo')}}</span>
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
    name: 'user',
    data () {
      return {
        userShow: false
      }
    },
    mounted:function() {
      let self = this;
      window.addEventListener('scroll',function() {
        if (document.documentElement.scrollTop > 1000) {
          if ( !self.userShow ) {
            self.userShow = true;
          }
        }
      });
    },
    methods: {

    }
  }
</script>
<style scoped>
  .slide-fades-enter-active {
    transition: all 1.8s ease;
  }

  .slide-fades-enter, .slide-fades-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }
  .zd-font {
    width: 3.5rem;
    height: 3.5rem
  }
  .pt-user-ground {
    background:url("../assets/ptuserground.jpg") no-repeat center center scroll;
    height: 100%;
    background-size:100% 100%;
  }
  .xt-content {
    font-size: 16px ;
    color: aliceblue;
    padding-top: 20px;
    position: absolute;
    margin-left: 40px
  }
  .underline {
    height:1px;
    margin:0px auto;
    padding:0px;
    background-color:#D5D5D5;
    overflow:hidden;
  }
  .user-title {
    background:url("../assets/dtitle.png") no-repeat ;
    height: 80px;
    width: 248px;
    margin: 0 auto;
    margin-top: 40px
  }
  .header-contentTwo {
    margin-top: 0.1rem;
    color: aliceblue;
    font-weight:bold;
    font-size: 0.1rem;
  }
  .ma-top {
    margin-top: 0.3rem;
  }
  .x-title {
    background:url("../assets/xtitle.png") no-repeat ;
    height: 80px;
    width: 260px;
  }
  .font-ys {
    color: aliceblue;
    font-size: 0.2rem;
    margin: 0.1rem;

  }
.user-header {
  font-size: 20px ;
  color: aliceblue;
  margin-top:30px;
  position: absolute;
  margin-left: 80px
}
  .xh-cl {
    height:1px;
    margin:0px auto;
    padding:0px;
    background-color:#D5D5D5;
    overflow:hidden;
  }
</style>

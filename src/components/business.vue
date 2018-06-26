<template>
  <div class="zss-ground">
    <transition name="slide-fade">
      <div v-if="headerShow">
    <el-row  type="flex" justify="center">
      <el-col  class="d-title" >
        <span class="zs-header" v-bind:style="{'margin-left':this.$i18n.locale === 'zh'? '90px':'60px'}">{{$t('marketmakers.marketmakersInfo')}}</span>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="16"  >
        <p  class="font-ys">
          {{$t('marketmakers.introduce')}}
        </p>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="center">
      <el-col :span="10"   class="pt-content-st">
        <el-row  type="flex" justify="center" >
          <el-col  style="height: 16px">
            <span v-bind:style="{'margin-left':this.$i18n.locale === 'zh'? '0.8rem':'0.7rem'}" class="user-border">{{$t('marketmakers.user')}}</span>
          </el-col >
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="10" >
            <img class="img-border" src="../assets/hbdh.jpg"/>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" >
            <p class="content-op">
              {{$t('marketmakers.userIntroduce')}}
               </p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10" :offset="1" class="pt-content-st">
        <el-row type="flex" justify="center">
          <el-col  style="height: 16px" >
            <span v-bind:style="{'margin-left':this.$i18n.locale === 'zh'? '0.8rem':'0.4rem'}" class="user-border">{{$t('marketmakers.scenarios')}}</span>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="10" >
            <img class="img-border" src="../assets/yycj.jpg"/>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" >
            <p  class="content-op">
              {{$t('marketmakers.scenariosntroduce')}}
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
    name: 'business',
    data () {
      return {
        headerShow: false
      }
    },
    methods: {

    },
    mounted:function() {
      let self = this;
      window.addEventListener('scroll',function() {
        if (document.documentElement.scrollTop > 2300) {
          if ( !self.headerShow ) {
            self.headerShow = true;
          }
        }
      });
    },
  }
</script>
<style scoped>
  .slide-fade-enter-active {
    transition: all 1.8s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }
  .font-ys {
    color: aliceblue;
    font-size: 0.2rem;
    margin: 0.2rem;

  }
  .d-title {
    background:url("../assets/dtitle.png") no-repeat ;
    height: 80px;
    width: 248px;
    margin: 0 auto;
  }
  .zss-ground {
    background:url("../assets/zssground.jpg") no-repeat center center scroll;
    height: 860px;
    width: 100%;
  }
  .zs-header {
    font-size: 20px ;
    color: aliceblue;
    margin-top:30px;
    position: absolute;
  }
  .pt-content-st {
    width: 5rem;
    height: 380px;
    background-color: #035969;
    opacity:0.9;
  }
  .user-border {
    color: aliceblue;
    font-size: 0.4rem;
    position: absolute;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
  }
  .img-border {
    border-radius: 2.5rem;
    height: 2.2rem;
    width: 2.2rem;
    margin-top: 0.6rem
  }
  .content-op {
    margin: 0px;
    color: #fff;
    font-size: 0.12rem;
  }
</style>

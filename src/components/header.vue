<template>
  <div class="back-ground">
    <transition name="slide-fade">
      <div v-if="show">
    <el-row type="flex" justify="center"  class="header-height">
      <el-col :span="16" :offset="2">
        <div >
          <ul class="tab-list"  v-if="this.$i18n.locale === 'zh'">
            <li style="width: 1.4rem" v-for="(value, index) in actList"  v-bind:style="{ 'border-bottom': value.activeColor ? '2px solid #05a4a4':'','color': value.activeColor ? '#05a4a4':''}" v-on:click="actClick(index)">{{value.label}}</li>
          </ul>
          <ul class="tab-list"  v-if="this.$i18n.locale === 'en'">
            <div v-bind:style="{'width':this.$i18n.locale === 'zh'? '0.7rem':'2.5rem'}">
              <li  v-for="(value, index) in actList"  v-bind:style="{ 'border-bottom': value.activeColor ? '2px solid #05a4a4':'','color': value.activeColor ? '#05a4a4':''}" v-on:click="actClick(index)">{{value.label}}</li>
            </div>
          </ul>
        </div>
      </el-col>
      <el-col :span="6" >
      <div  class="navbar-toggle" v-for="(value, index) in toggleChange" v-if="value.hidden">
        <div >
            <img  class="toggle-img"  :src = "value.toggleImg"/>
        </div>
        <div  v-on:click="toggleContent(index)">
            <span  class="toggle-content"> {{value.language}}</span>
        </div>
         <div class="toggle-icon">
           <span v-if="value.icon"><i v-bind:class = "value.elIcon" v-on:click="clickIcon(index)"></i></span>
         </div>
      </div>
      </el-col>
    </el-row>
    <el-row class="header-content" type="flex" justify="center">
      <el-col :span="4" >
        <p>BSVC</p>
      </el-col>
    </el-row>
    <el-row  class="header-contentTwo" type="flex" justify="center">
      <el-col :span="20" v-bind:style="{ 'margin-left': this.$i18n.locale === 'en' ? '4rem':''}">
        <p >{{$t('bsvcInfo')}}</p>
      </el-col>
    </el-row>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'headerTop',
    data () {
      return {
        toggleChange : [{language:'中文',toggleImg: require('../assets/ch.jpg'),elIcon :'el-icon-arrow-down',hidden:true,icon:true},
          {language:'英文',toggleImg: require('../assets/en.jpg'),elIcon :'el-icon-arrow-down',hidden:false,icon:false}],
        numbers: [],
        actList: [ {label:this.$t('actList.profile')}, {label:this.$t('actList.user')}, {label:this.$t('actList.business')}, {label:this.$t('actList.businessman')}
          , {label:this.$t('actList.financial')}, {label:this.$t('actList.technology')}, {label:this.$t('actList.trend')}],
        show: false,
        buttonItem :false,
      }
    },
    created:function () {
      console.log(this.$i18n.locale)
      this.actList.forEach((item) =>{
        if (item.label === '概要') {
          item.activeColor = true;
        } else {
          item.activeColor = false;
        }
      })
      let self = this;
        if (document.body.clientWidth < 500) {
          if (!self.buttonItem) {
            self.buttonItem = true;
          }
        }else {
          if (self.buttonItem) {
            self.buttonItem = false;
          }
        }
    },
    mounted:function() {
      this.show = true;
      let self = this;
      window.onresize = function() {
        if (document.body.clientWidth < 500) {
          if (!self.buttonItem) {
            self.buttonItem = true;
          }
        }else {
          if (self.buttonItem) {
            self.buttonItem = false;
          }
        }
      }

    },
    methods: {
      toggleContent(index) {
        let valueChange ;
        let stateValue;
        let locale = this.$i18n.locale;
        for (let i=0; i < this.toggleChange.length;i < i ++){
          if (index !== i) {
            valueChange = i;
          }
        }
        stateValue = this.toggleChange[index];
        this.toggleChange[index] = this.toggleChange[valueChange];
        this.toggleChange[valueChange] = stateValue;
        this.toggleChange[index].hidden = false;
        this.toggleChange[index].icon = false;
        this.toggleChange[valueChange].hidden = true;
        this.toggleChange[valueChange].icon = true;
          if (this.toggleChange[valueChange].language === '中文') {
            this.$i18n.locale = 'zh'
          } else  {
            this.$i18n.locale = 'en'
          }
        this.actList= [ {label:this.$t('actList.profile')}, {label:this.$t('actList.user')}, {label:this.$t('actList.business')}, {label:this.$t('actList.businessman')}
          , {label:this.$t('actList.financial')}, {label:this.$t('actList.technology')}, {label:this.$t('actList.trend')}];
        this.actList.forEach((item) =>{
          if (item.label === 'The profile' || item.label === '概要') {
            item.activeColor = true;
          } else {
            item.activeColor = false;
          }
        })
      },
      actClick (index) {
        for (let i = 0; i < this.actList.length; i++) {
          if (this.actList[i].activeColor) {
            this.actList[i].activeColor = false
          }
        }
        this.$set(this.actList, index, {activeColor: true,label: this.actList[index].label});
        if (this.actList[index].label === '普通用户') {
          window.scrollTo(0,650);
        }else if(this.actList[index].label === '做市商') {
          window.scrollTo(0,1450);
        }else if(this.actList[index].label === '商人') {
         window.scrollTo(0,2350);
     }else if(this.actList[index].label === '金融机构') {
          window.scrollTo(0,3200);
        }else if(this.actList[index].label === '技术背景') {
          window.scrollTo(0,4000);
        }
      },
      clickIcon (index) {
        let iconValue ;
        for (let i=0; i < this.toggleChange.length;i < i ++){
          if (index !== i) {
            iconValue = i;
          }
        }
              this.toggleChange[iconValue].hidden = !this.toggleChange[iconValue].hidden;
        }

    },
  }
</script>
<style scoped>
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all 2.9s cubic-bezier(3.0, 2.5, 2.8, 3.0);
  }
  .slide-fade-icon-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-icon-enter, .slide-fade-icon-leave-to
  {
    transform: translateX(20px);
    opacity: 0;

  }
  .slide-fade-enter, .slide-fade-leave-to
    {
    transform: translateX(20px);
    opacity: 0;
  }
  .header-height {
    height: 1.5rem;
  }
  .toggle-icon {
    color:black;
    font-size: 16px;
    float: right;
    margin-top: 4px;
    margin-right: 5px;
    cursor: pointer;
  }
  .back-ground{
    background:url("../assets/background.jpg") no-repeat center center scroll;
    height: 640px;
    background-size:100% 100%;
  }
  .header-contentTwo {
    color: aliceblue;
    font-weight:bold;
    font-size: 0.2rem;

  }
  .header-content {
    color: aliceblue;
    font-weight:bold;
    font-size: 24px;

  }
  .toggle-content {
    color:black;
    font-size: 12px;
    position: absolute;
    margin-top: 6px;
    margin-left: 30px
  }
  .toggle-img {
    position: absolute;
    margin-top: 7px;
    margin-left: 5px
  }
  .tab-list  {
    color: aliceblue;
    text-align: center;
    line-height: 40px;
    font-family: "微软雅黑";
    height: 40px;
    border-bottom: none;
    font-size: 0.15rem;
  }
  .tab-list  li {
    float: left;
    width: 100px;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    color: #42b983;
  }
  .navbar-toggle {
    cursor: pointer;
    height: 30px;
    width: 104px;
    border: 1px solid #fff;
    border-radius: 4px;
    background-color: aliceblue;
    margin-top: 0.1rem;
  }
  .navbar-toggle-two {
    cursor: pointer;
    height: 30px;
    width: 104px;
    border: 1px solid #fff;
    border-radius: 4px;
    background-color: aliceblue;
    margin-top: 12px;
  }
   .icon-bar {
     background-color: #000;
    display: block;
    width: 22px;
    height: 2px;
     margin-top: 4px;
    border-radius: 1px;
     margin-left: 10px;
  }
   .icon-bar-one {
     background-color: #000;
     display: block;
     width: 22px;
     height: 2px;
     margin-top: 14px;
     border-radius: 1px;
     margin-left: 10px;
   }
  .tab2new div.active a{color: #05a4a4;}
  .tab2new div{ float: left;width:80px; text-align:center; height:26px; line-height:34px;}
  .tab2new div a{color:#ffffff;}
</style>

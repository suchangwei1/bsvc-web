<template xmlns:v-demo="http://www.w3.org/1999/xhtml">
  <div>
    <headerTop></headerTop>
    <vUser></vUser>
    <vOutline></vOutline>
  </div>


</template>

<script>
  import Vue from 'vue'
  import  headerTop from "../components/header.vue"
  import  vUser from "../components/user.vue"
  import  vOutline from "../components/outline.vue"
  import  vBusiness from "../components/business.vue"
  import  vBusinessman from "../components/businessman.vue"
  import  vFinance from "../components/finance.vue"
  import  vTechnology from "../components/technology.vue"

import clickoutside from 'element-ui/src/utils/clickoutside.js';
export default {
  components:{
    headerTop,
    vUser,
    vOutline,
    vBusiness,
    vBusinessman,
    vFinance,
    vTechnology
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .input { padding: 5px; margin: 0; border: 1px solid #beceeb; }
  .clear { display: none; position: absolute; width: 16px; height: 16px; margin: 6px 0 0 -20px; ;}
  .input::-ms-clear { display: none; }
  .input:valid + .clear { display: inline; }
</style>

<template>
  <div>
    <headerTop></headerTop>
    <vOutline></vOutline>
    <vUser></vUser>
    <vBusiness></vBusiness>
    <vBusinessman></vBusinessman>
    <vFinance></vFinance>
    <vTechnology></vTechnology>
  </div>


</template>

<script>
  import  headerTop from "../components/header.vue"
  import  vUser from "../components/user.vue"
  import  vOutline from "../components/outline.vue"
  import  vBusiness from "../components/business.vue"
  import  vBusinessman from "../components/businessman.vue"
  import  vFinance from "../components/finance.vue"
  import  vTechnology from "../components/technology.vue"
  export default {
    name: 'home',
    data () {
      return {
      }
    },
    methods: {
    },
    components:{
      headerTop,
      vOutline,
      vBusiness,
      vBusinessman,
      vUser,
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

</style>

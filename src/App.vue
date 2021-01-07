<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
</style>

<script>
import vHeader from '@/components/common/header'
import vFooter from '@/components/common/footer'
export default {
  components:{
    vHeader,
    vFooter
  }
}
</script>


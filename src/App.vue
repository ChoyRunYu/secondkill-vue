<template>
  <div id="app">
    <v-header></v-header>
    <v-footer></v-footer>
    <router-view/>
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


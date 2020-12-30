<template>
  <div id="app">
    <v-header></v-header>
    <v-footer></v-footer>
    <router-view/>
  </div>
</template>
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


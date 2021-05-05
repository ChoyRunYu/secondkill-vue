<template>
  <div class="page-not-fount">
    <el-image
      style="width: 1000px; height: 600px"
      :src="require('@/assets/404_images/404.png')"
      fit="contain" />
  </div>
</template>

<script>

export default {
  name: 'Page404',
}
</script>

<style lang="scss" scoped>
.page-not-fount{
  text-align: center;
}
</style>

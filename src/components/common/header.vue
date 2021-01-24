<template>
    <div id="header">
        <div class="header-nav">
            <div class="header-left">基于微服务的商城秒杀系统</div>
            <div class="header-right">
                <ul class="header-right-nav">
                    <li>首页</li>
                    <li>我的订单</li>
                    <li>我的购物车</li>
                    <li>登录</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #efefef;
  line-height: 40px;
  box-sizing: border-box;

  .header-nav{
      width: 1300px;
      height: 40px;
      margin: 0 auto;
  }

  .header-left {
    float: left;
  }

  .header-right {
    float: right;

    .header-right-nav li {
      float: left;
      list-style: none;
      margin-left: 20px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
<script>
export default {};
</script>

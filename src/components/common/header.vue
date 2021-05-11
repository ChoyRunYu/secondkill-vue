<template>
  <div id="header">
    <div class="header-nav">
      <div class="header-left">基于微服务的商城秒杀系统</div>
      <div class="header-right">
        <ul class="header-right-nav">
          <li>{{ username }}</li>
          <li><router-link to="/">首页</router-link> </li>
          <li><router-link to="/myorder">我的订单</router-link></li>
          <!-- <li>我的购物车</li> -->
          <li v-if="!isLogin"><router-link to="/login">登录</router-link></li>
          <li v-else><div @click="logout">退出</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
    }
  },
  computed:{
    isLogin: function (){
      return this.$store.getters.token !== undefined
    },
    username: function(){
      return this.$store.getters.username
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('user/logout').then(() => {
        this.$router.push({ path: '/login' })        
      })
    }
  }
};
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #666;
}
#header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #efefef;
  line-height: 40px;
  box-sizing: border-box;

  .header-nav {
    width: 1300px;
    height: 40px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
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
      cursor: pointer;
    }
  }
}
</style>


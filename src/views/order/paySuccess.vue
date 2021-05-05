<template>
  <div class="buy">
    <div class="header-bg"></div>
    <div class="buy-main">
      <div class="confirm-order">
        <div class="confirm-order-title">支付成功，前往我的订单查看，<router-link to="/myorder">我的订单</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
     
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
.buy {
  .header-bg {
    background: url("~@/assets/img/secondkill-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 150px;
    min-width: 1300px;
    margin-top: 50px;
  }

  .buy-main {
    width: 100%;
    height: 220px;
    margin: 0 auto;
    background: #f4f4f4;
    padding: 50px 0;

    .confirm-order {
      width: 1200px;
      height: 180px;
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;
      padding: 40px;

      .confirm-order-title {
        font-weight: 550;

        a{
            color: #f17594;
        }
      }

      .pay-order {
        .order-goods-title {
          margin-top: 50px;
          width: 100%;
          height: 100px;
          border: 1px solid #ff4f7c;
          padding: 20px;
          box-sizing: border-box;

          .title {
            font-size: 20px;
          }

          .tips {
            margin-top: 10px;
            color: #666;
          }
        }
      }
    }

    .create-order {
      width: 1200px;
      height: 80px;
      margin: 0 auto;
      background: #fff;
      border-top: 1px solid #dfdfdf;
      line-height: 80px;
      padding: 0 40px;
      box-sizing: border-box;

      .create-order-ul {
        float: right;

        li {
          float: left;
          list-style: none;
          color: #666;
        }

        .total-ptice {
          color: #ff4f7c;
          font-size: 22px;
          font-weight: 600;
        }

        .el-button {
          margin-left: 20px;
          color: #fff;
          background: #ff4f7c;
          width: 120px;
          height: 40px;
          border: none;
        }

        .el-button:hover {
          background: #f17594;
        }
      }
    }
  }
}
</style>

<template>
  <div class="buy">
    <div class="header-bg"></div>
    <div class="buy-main">
      <div class="confirm-order">
        <div class="confirm-order-title">下单成功，请支付订单</div>
        <div class="pay-order">
          <div class="order-goods-title">
            <div class="title">{{order.title}}共{{order.count}}件商品</div>
            <div class="tips">请您在半小时内完成支付</div>
          </div>
        </div>
      </div>
      <div class="create-order">
        <ul class="create-order-ul">
          <li>总计：</li>
          <li class="total-ptice">¥{{order.unitPrice}}</li>
          <li>
            <el-button
              @click="createOrderBtn"
              class="create-order-btn"
            >支付</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderById, pay } from "@/api/order";

export default {
  data() {
    return {
      orderId: this.$route.params.orderId,
      order: {
        state: 1,
        title: "",
        unitPrice: "",
        count: 1
      }
    };
  },
  mounted() {
    getOrderById(this.orderId).then(res => {
      // 如果订单为未支付状态
      if (res.data.orderState === 1) {
        this.order.title = res.data.goodsTitle;
        this.order.state = res.data.orderState;
        this.order.unitPrice = res.data.unitPrice;
        this.order.count = res.data.count;
      } else if (res.data.orderState === 0) {
        this.$alert("该订单已支付", "温馨提示", {
          confirmButtonText: "我知道了",
          callback: () => {
            this.$router.push({ path: "/myorder" });
          }
        });
      } else if (res.data.orderState === 2) {
        this.$alert("该订单已过期", "温馨提示", {
          confirmButtonText: "我知道了",
          callback: () => {
            this.$router.push({ path: "/myorder" });
          }
        });
      } else {
        this.$alert("系统出错", "温馨提示", {
          confirmButtonText: "我知道了",
          callback: () => {
            this.$router.push({ path: "/" });
          }
        });
      }
    });
  },
  methods: {
    /**
     * 创建订单按钮
     */
    createOrderBtn() {
      pay(this.orderId).then(res => {
        if(res.code === 40004){
          this.$alert(res.msg, "温馨提示", {
            confirmButtonText: "我知道了",
          });
        }else{
          this.$router.push({path: '/paySuccess'})
        }
      })
    }
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
    height: 420px;
    margin: 0 auto;
    background: #f4f4f4;
    padding: 50px 0;

    .confirm-order {
      width: 1200px;
      height: 340px;
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;
      padding: 40px;

      .confirm-order-title {
        font-weight: 550;
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

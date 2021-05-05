<template>
  <div class="buy">
    <div class="header-bg"></div>
    <div class="buy-main">
      <div class="my-order">
        <div class="order-title">
          <table
            class="order-table-title"
            cellpadding="0px"
            cellspacing="0px"
          >
            <thead>
              <tr>
                <th width="540">商品</th>
                <th width="120">单价（元）</th>
                <th width="80">数量</th>
                <th width="120">实付款（元）</th>
                <th width="120">交易状态</th>
                <!-- <th>操作</th> -->
              </tr>
            </thead>
          </table>
        </div>
        <div v-for="order in orderList" :key="order.id" class="order-list">
          <table class="order-list-item" cellpadding="0px" cellspacing="0px">
            <tbody>
              <tr class="item-title">
                <td colspan="6"><div>订单编号：{{order.id}} </div><div>创建时间：{{order.createTime}}</div><div>店铺：官网自营</div></td>
              </tr>
              <tr class="item-content">
                <td width="540" class="goods-info">
                  <div>
                    <img :src="order.goodsImg" alt="">
                    <div>{{order.goodsTitle}}</div>
                  </div>
                </td>
                <td width="120">¥{{order.unitPrice}}</td>
                <td width="80">{{order.count}}</td>
                <td width="120">¥{{(order.unitPrice * order.count).toFixed(2)}}</td>
                <td width="120" class="order-state">
                  <span v-if="order.orderState === 0">已支付</span>
                  <span v-else-if="order.orderState === 1">待支付，<router-link :to="'/pay/' + order.id">去付款</router-link></span>
                  <span v-else>交易取消</span>
                </td>
                <!-- <td>删除订单</td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { listOrderByUser } from '@/api/order'

export default {
  data() {
    return {
      orderList: []
    }
  },
  mounted() {
    listOrderByUser().then(res => {
      this.orderList = res.data
    })
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
    height: 100%;
    margin: 0 auto;
    background: #f4f4f4;
    padding: 50px 0;

    .my-order {
      width: 1200px;
      min-height: 600px;
      height: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;
      padding: 40px;

      .order-title{
        margin-bottom: 50px;
      }

      .order-table-title {
        margin-top: 30px;
        width: 100%;

        thead tr {
          th {
            font-weight: 550;
            font-size: 14px;
            height: 50px;
            border-top: 1px solid #efefef;
            border-bottom: 1px solid #efefef;
          }
        }

      }

      .order-list{


        .order-list-item{
          margin-bottom: 40px;
          border: 1px solid #efefef;
          width: 100%;
        
          .item-title {
            height: 40px;
            font-weight: 400;
            font-size: 15px;
            background-color: #efefef;

            div{
              display: inline-block;
              margin-right: 25px;
              padding: 0 20px;
              box-sizing: border-box;
            }
          }

          .item-content{

            .order-state{
              color: #8ca5f5;
              font-weight: 550;
              font-size: 15px;
            }

            td{
              box-sizing: border-box;
              text-align: center;
              border: 1px solid #efefef;
            }

              .goods-info{
                div{
                  display: flex;
                  align-items: center;
                  padding: 20px;
                  box-sizing: border-box;
                  margin: 0;
                }
                
                img{
                  width: 120px;
                  height: 120px;
                }
              }
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

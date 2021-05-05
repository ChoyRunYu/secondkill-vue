<template>
  <div class="buy">
    <div class="header-bg"></div>
    <div class="buy-main">
      <div class="confirm-order">
        <div class="confirm-order-title">确认商品信息</div>
        <div class="comfirm-order-table">
          <table
            class="goods-table"
            cellpadding="0px"
            cellspacing="0px"
          >
            <thead>
              <tr>
                <th width="540">商品</th>
                <th width="120">商品信息</th>
                <th width="120">单价（元）</th>
                <th width="80">数量</th>
                <th width="80">优惠</th>
                <th class="goods-cal">小计（元）</th>
              </tr>
            </thead>
            <tbody>
              <tr class="goods-table-shop">
                <td colspan="6">
                  <div>
                    <span class="shop">店铺:</span> <span class="shop-name">官网自营</span>
                  </div>
                </td>
              </tr>
              <tr class="goods-table-info">
                <td
                  width="540"
                  class="goods-mess"
                >
                  <img
                    :src="goods.img"
                    alt=""
                  >
                  <div class="goods-title">{{goods.title}}</div>
                </td>
                <td
                  width="120"
                  class="goods-info"
                >无</td>
                <td
                  width="120"
                  class="goods-simgle-price"
                >{{goods.price}}</td>
                <td
                  width="80"
                  class="goods-num"
                >{{goods.num}}</td>
                <td
                  width="80"
                  class="goods-discount"
                >无</td>
                <td class="goods-cla">{{(goods.price * goods.num).toFixed(2)}}</td>
              </tr>
              <tr class="express-info">
                <td colspan="3"></td>
                <td colspan="2">
                  快递公司：全国包邮
                </td>
                <td>
                  快递运费：¥0.00
                </td>
              </tr>
              <tr class="total-price-tr">
                <td colspan="5"></td> 
                <td colspan="1"><span class="total-price-title">合计：</span><span class="total-ptice">¥{{(goods.price * goods.num).toFixed(2)}}</span></td> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="create-order">
        <ul class="create-order-ul">
          <li>总计：</li>
          <li class="total-ptice">¥{{(goods.price * goods.num).toFixed(2)}}</li>
          <li><el-button @click="createOrderBtn" class="create-order-btn">确认订单</el-button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { buy, createOrder } from '@/api/order'

export default {
  data() {
    return {
      msGoodsId: this.$route.params.msGoodsId,
      goods:{
        img: '',
        title: '',
        price: '',
        num: 1
      }
    }
  },
  mounted() {
    buy(this.msGoodsId).then(res => {
      this.goods.img = res.data.goodsImg
      this.goods.title = res.data.goodsTitle
      this.goods.price = res.data.msPrice
    })
  },
  methods: {
    /**
     * 创建订单按钮
     */
    createOrderBtn(){
      createOrder(this.msGoodsId).then(res => {
        if(res.code === 40004){
          this.$alert(res.msg, "温馨提醒", {confirmButtonText: '我知道了'});
        }else{
          this.$router.push({name: 'pay', params: {orderId: res.data }})
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
    height: 680px;
    margin: 0 auto;
    background: #f4f4f4;
    padding: 50px 0;

    .confirm-order {
      width: 1200px;
      height: 600px;
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;
      padding: 40px;

      .confirm-order-title {
        font-weight: 550;
      }

      .goods-table {
        margin-top: 30px;
        width: 100%;

        thead tr {
          th {
            font-weight: 400;
            font-size: 14px;
            height: 50px;
            border-top: 1px solid #efefef;
            border-bottom: 1px solid #efefef;
          }
        }

        tbody {

          .goods-table-shop {
            height: 80px;

            td {
              padding: 32px 16px 16px;
            }

            .shop {
              color: #666;
              margin-right: 10px;
            }
          }

          .goods-table-info {
            background: #efefef;

            td {
              border: none;
              border-top: 1px solid #dfdfdf;
              border-bottom: 1px solid #dfdfdf;
              height: 150px;
              text-align: center;
            }

            .goods-mess {
              box-sizing: border-box;
              padding: 0 20px;
              text-align: left;
              display: flex;
              align-items: center;

              img {
                width: 120px;
                height: 120px;
                margin-right: 10px;
              }
            }
          }

          .express-info {
            height: 80px;
            background: #efefef;
            text-align: center;
            font-size: 14px;

            td {
              border-bottom: 1px solid #dfdfdf;
            }

          }
        }

        .total-price-tr{
          background: #efefef;
          height: 70px;
          text-align: center;

          td{
            padding-right: 30px;
          }

          .total-price-title{
            color: #666;
          }

          .total-ptice{
            color: #ff4f7c;
            font-size: 20px;
            font-weight: 550;
          }
          
        }
      }
    }

    .create-order{
      width: 1200px;
      height: 80px;
      margin: 0 auto;
      background: #fff;
      border-top: 1px solid #dfdfdf;
      line-height: 80px;
      padding: 0 40px;
      box-sizing: border-box;
      
      .create-order-ul{
        float: right;

        li{
          float: left;
          list-style: none;
          color: #666;
        }

        .total-ptice{
          color: #ff4f7c;
          font-size: 22px;
          font-weight: 600;
        }

        .el-button{

          margin-left: 20px;
          color: #fff;
          background: #ff4f7c;
          width: 120px;
          height: 40px;
          border: none;
        }

        .el-button:hover{
          background: #f17594;
        }

      }


    }
  }
}
</style>

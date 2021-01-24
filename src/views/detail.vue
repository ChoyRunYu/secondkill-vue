<template>
  <div class="detail">
    <div class="bg-img">
      <div class="bg-title">今日秒杀</div>
    </div>
    <div class="goods-detail">
      <div class="goods-detail-div">
        <div class="goods-img">
          <img
            src="../assets/goods.jpg"
            alt=""
          >
        </div>
        <div class="goods-mess">
          <div>
            <div class="goods-desc-title">
              <p>子俊男装冬季加厚高领针织衫男韩版潮流宽松拼接撞色森系毛衣外套嘎哈哈哈哈哈哈哈哈或或或或或或或或或或</p>
            </div>
            <div class="goods-price">
              <p><span class="goods-price-title">价格：</span> <span class="goods-yuanjia">¥40.00</span></p>
              <p><span class="goods-price-title"> 秒杀价： </span><span class="goods-msjia">¥20.00</span></p>
            </div>
            <div class="goods-box">
              <dl class="goods-freight">
                <dt>运费</dt>
                <dd>包邮</dd>
              </dl>
              <dl>
                <dt>数量</dt>
                <dd>
                  <el-input-number
                    size="mini"
                    v-model="buyNum"
                  ></el-input-number>
                </dd>
              </dl>
              <div class="goods-action">
                <a class="goods-buy">
                  立即购买
                </a>
                <a class="goods-add-cart">
                  加入购物车
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
.detail {
  .bg-img {
    width: 100%;
    height: 60px;
    margin-top: 40px;
    background: #ff4466;
    line-height: 60px;
    box-sizing: border-box;

    .bg-title {
      width: 1300px;
      margin: 0 auto;
      color: #fff;
      font-size: 20px;
      font-weight: 550;
    }
  }

  .goods-detail {
    width: 1300px;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;

    .goods-detail-div {
      margin-top: 30px;
      padding: 20px;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #efefef;

      .goods-img {
        width: 400px;
        height: 400px;
        display: inline-block;

        img {
          display: block;
        }
      }

      .goods-mess {
        display: inline-block;
        vertical-align: top;
        width: 600px;
        min-height: 400px;
        margin-left: 30px;
        // border: 1px solid #ff4466;

        .goods-desc-title {
          font-size: 20px;
          font-weight: 600;
          word-break: break-all;
        }

        .goods-price {
          margin-top: 10px;
          width: 100%;
          height: 70px;
          // border: 1px solid red;
          background: #f6f6f6;
          padding: 0 10px;
          box-sizing: border-box;

          .goods-price-title {
            width: 70px;
            display: inline-block;
            color: #999;
            height: 35px;
            line-height: 35px;
            font-size: 15px;
          }

          .goods-yuanjia {
            color: #bbb;
            font-size: 16px;
            text-decoration: line-through;
          }

          .goods-msjia {
            margin-top: 0px;
            color: #ef2f23;
            font-size: 24px;
            font-weight: 600;
          }
        }

        .goods-box {
          padding: 20px;

          dl {
            margin-bottom: 20px;
          }

          dt {
            color: #999;
            font-size: 15px;
            display: inline-block;
            width: 60px;
          }

          dd {
            display: inline-block;
          }

          .goods-action{
            width: 100%;
            height: 60px;
            margin-top: 80px;
            padding-left: 60px;

            a{
              font-size: 18px;
              width: 200px;
              height: 50px;
              display: inline-block;
              color: #fff;
              text-align: center;
              line-height: 50px;
            }

            .goods-buy{
              background: #ef2f23;
              margin-right: 20px;
            }

            .goods-add-cart{
              color: #333;
              border: 1px solid #ddd;
            }

          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      buyNum: 1
    };
  }
};
</script>


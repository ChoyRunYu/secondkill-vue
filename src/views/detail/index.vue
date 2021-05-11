<template>
  <div class="detail">
    <div class="header-bg"></div>
    <div class="bg-img">
      <div class="bg-title">今日秒杀</div>
    </div>
    <div class="goods-detail">
      <div class="goods-detail-div">
        <div class="goods-img">
          <img
            :src="goodsImg"
            alt=""
          >
        </div>
        <div class="goods-mess">
          <div>
            <div class="goods-desc-title">
              <p>{{goodsTitle}}</p>
            </div>
            <div class="goods-price">
              <p><span class="goods-price-title">价格：</span> <span class="goods-yuanjia">{{goodsPrice}}</span></p>
              <p><span class="goods-price-title"> 秒杀价： </span><span class="goods-msjia">{{msPrice}}</span></p>
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
                    :max="1"
                    :min="1"
                  ></el-input-number>
                  <span class="goods-stock">仅剩<span class="curr-stock">{{msStock}}</span>件</span>
                </dd>
              </dl>
              <div class="goods-action">
                <el-button
                  class="goods-buy"
                  @click="buyNow()"
                  :disabled="!(start == 1)"
                >
                  {{btnText}}
                </el-button>
                <div class="goods-tips">
                  <span v-if="start == 0">活动未开始，距离开始还有<span
                      ref="goodsTimer"
                      class="goods-timer"
                    >{{time}}</span></span>
                  <span v-else-if="start == 1 || start == 2">活动距离结束还有<span
                      ref="goodsTimer"
                      class="goods-timer"
                    >{{time}}</span></span>
                  <span v-else>活动已结束</span>
                </div>
                <!-- <a class="goods-add-cart">
                  加入购物车
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-login-dialog></v-login-dialog>
  </div>
</template>

<script>
import { getMsGoodsDetail } from "@/api/goods";
import vLoginDialog from "@/components/loginDialog";
import { getToken } from "@/utils/auth";
import { checkStock } from "@/api/order";

export default {
  name: "Detail",
  components: {
    vLoginDialog
  },
  data() {
    return {
      loginDialogIsShow: false,
      msGoodsId: this.$route.params.msGoodsId,
      buyNum: 1,
      goodsTitle: "",
      goodsPrice: "",
      msPrice: "",
      goodsImg: "",
      startTime: "",
      endTime: "",
      msStock: 0,
      startDate: "",
      endDate: "",
      startSecond: 0,
      serverTime: "",
      start: 3,
      timer: null,
      // 0  ->  未开始
      // 1  ->  已开始，且有库存
      // 2  ->  已开始，且无库存
      // 3  ->  已结束
      btnText: "立即抢购",
      res: null
    };
  },
  mounted() {
    /**
     * 获取商品详情信息
     */
    getMsGoodsDetail(this.$route.params.msGoodsId).then(res => {
      let data = res.data.goodsDetail;
      this.goodsTitle = data.goodsTitle;
      this.goodsPrice = data.goodsPrice;
      this.msPrice = data.msPrice;
      this.goodsImg = data.goodsImg;
      this.startTime = data.startTime;
      this.endTime = data.endTime;
      this.msStock = data.msGoodsStock;
      this.startDate = new Date(data.startTime);
      this.endDate = new Date(data.endTime);
      this.serverTime = res.data.serverTime;
      this.calStartTime();
    });
  },
  methods: {
    /**
     *
     * 点击抢购按钮
     */
    buyNow() {
      if (getToken() === undefined) {
        this.$store.commit("SET_ISSHOWLOGINDIALOG", true);
        return;
      } else {
        this.start = 2;
        this.btnText = "抢购中...";
        checkStock(this.msGoodsId).then(res => {
          // 如果被限流
          if (res.code === 40004) {
            this.delay3s("立即抢购", res.msg, 1);
          } else if (res.data === "end") {
            this.delay3s("库存不足，再等等看", res.msg, 2);
          } else if (res.data === "true") {
            this.$router.push({ name: "buy", params: { msGoodsId: this.msGoodsId } });
          }
        });
      }
    },
    /**
     * 延时3秒
     */
    delay3s(btext, msg, btn) {
      setTimeout(() => {
        if (btn === 2) {
          this.msStock = 0;
        }
        this.start = btn;
        if (btext !== null) {
          this.btnText = btext;
        }
        if (msg !== null) {
          this.$alert(msg, "温馨提醒", {confirmButtonText: '我知道了'});
        }
      }, 3000);
    },
    calStartTime() {
      let now = new Date();
      // 如果当前时间小于开始时间，则秒杀活动未开始
      // 如果当前时间大于开始时间且小于结束时间，则秒杀活动正在进行
      //     --- 如果秒杀活动开始，但库存为0，则按钮不能点击
      // 如果当前时间大于结束时间，则秒杀活动结束
      if (now < this.startDate) {
        this.startSecond = Math.round(
          (new Date(this.startDate).getTime() - now.getTime()) / 1000
        );
        this.start = 0;
        this.btnText = '即将开始'
      } else if (now > this.startDate && now < this.endDate) {
        this.startSecond = Math.round(
          (new Date(this.endTime).getTime() - now.getTime()) / 1000
        );
        this.start = this.msStock > 0 ? 1 : 2;
        this.btnText = this.msStock > 0 ? '立即抢购' : '库存不足，再等等...'
      } else {
        this.start = 3;
        this.btnText = '活动结束'
        return;
      }
      this.startTimer();
    },
    /**
     * 启动定时器
     */
    startTimer() {
      this.timer = setInterval(() => {
        this.startSecond--;
      }, 1000);
    },
    /**
     * 时间自动补0
     */
    autoFill0(val) {
      if (val.length < 2) return "0" + val;
      return val;
    },
    /**
     * 清除定时器
     */
    cleanTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  computed: {
    time: {
      get: function() {
        // 计算时分秒
        let hour = Number.parseInt(this.startSecond / 3600).toString();
        let minute = Number.parseInt((this.startSecond % 3600) / 60).toString();
        let second = ((this.startSecond % 3600) % 60).toString();
        // 自动补0
        hour = this.autoFill0(hour);
        minute = this.autoFill0(minute);
        second = this.autoFill0(second);
        return hour + "时" + minute + "分" + second + "秒";
      }
    }
  },
  watch: {
    startSecond: {
      handler(val) {
        if (val <= 0) {
          this.cleanTimer();
          console.log("计时结束");
          if (this.start == 0) {
            // 重新计时，距离结束还有多少时间
            this.start = 1;
            this.startSecond = Math.round(
              (new Date(this.endTime).getTime() - new Date().getTime()) / 1000
            );
            this.startTimer();
          } else if (this.start == 1 || this.start == 2) {
            this.start = 3;
          }
        }
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  .header-bg {
    background: url("~@/assets/img/secondkill-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 150px;
    min-width: 1300px;
    margin-top: 50px;
  }
  .bg-img {
    min-width: 1300px;
    height: 40px;
    background: #ff4466;
    line-height: 40px;
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
          width: 400px;
          height: 400px;
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

          .goods-tips-dd {
            margin-top: 50px;
          }

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

            .goods-stock {
              margin-left: 20px;
              font-size: 14px;
              color: #999;
            }
          }

          .goods-action {
            width: 100%;
            height: 60px;
            margin-top: 50px;
            padding-left: 60px;
            display: inline-block;

            .goods-buy {
              background: #ef2f23;
              margin-right: 20px;
              cursor: pointer;
              border: none;
              font-size: 18px;
              width: 200px;
              height: 50px;
              display: inline-block;
              color: #fff;
              text-align: center;
            }

            .is-disabled {
              color: #fff;
              background-color: #fab6b6;
              border-color: #fab6b6;
            }

            .is-disabled:hover {
              color: #fff !important;
              cursor: not-allowed !important;
              background-image: none !important;
              background-color: #fab6b6 !important;
              border-color: #fab6b6 !important;
            }

            .goods-add-cart {
              color: #333;
              border: 1px solid #ddd;
            }

            .goods-tips {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>



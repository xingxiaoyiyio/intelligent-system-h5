<template>
    <div class='orderDatail'>
        <div class='padding'>
        <p class='shopName'>小智餐厅餐厅碧桂园分店</p>
         <div class='dishBox'>
            <div class='dishItem' v-for="(item,index) in dishList" :key='index'>
              <div class='img'>
                <img src="../assets/img/img1.jpg" alt="">
              </div>
              <div class='flex1box'>
                <p class='name'>{{item.name}}</p>
                <p class='qty'>x{{item.qty}}</p>
              </div>
              <div class='price'>￥{{item.price}}</div>
            </div>
        </div>
        <div class='other'>
          <div class='packagePay'>包装费  <span>￥5</span> </div>
          <div class='discount'>优惠    <span>￥15</span> </div>
          <div class='total'>合计：￥{{totalPayment}}</div>
        </div>
         </div>
         
        <div class='line'></div>
          <div class='padding'>
        <div class='detailInfo'>
            <p class='shopName'>订单信息</p>
            <div class='infoBox'>
                <div class='infoItem'>
                    <div class='left'>订单号码</div>
                    <div class='right'>8787878787878787</div>
                </div>
                  <div class='infoItem'>
                    <div class='left'>下单时间</div>
                    <div class='right'>2018-11-03  11:30</div>
                </div>
                  <div class='infoItem'>
                    <div class='left'>支付方式</div>
                    <div class='right'>在线支付</div>
                </div>
                 <div class='infoItem'>
                    <div class='left'>订单类型</div>
                    <div class='right'>外卖自提</div>
                </div>
            </div>
        </div>
         </div>
         <div class='submitBtn'>立即支付</div>
    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "订单详情");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group
  },
  methods: {},
  data() {
    return {
      totalPayment: 98,
      dishList: [
        { name: "红烧排骨饭", qty: "3", price: "23" },
        { name: "香辣虾", qty: "1", price: "83" },
        { name: "番茄炒蛋", qty: "1", price: "13" }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.orderDatail {
    .padding{
        padding: 0 20px;
    }
  .shopName {
    font-size: 17px;
    height: 40px;
    line-height: 40px;
  }

  .dishBox {
    padding: 10px;
    border-bottom: 1px solid #f2f2f2;
  }
  .dishItem {
    display: flex;
    margin-top: 10px;
    padding-right: 10px;
    .img {
      width: 60px;
      img {
        display: block;
        width: 40px;
        margin: 0 auto;
      }
    }
    .name {
      font-size: 16px;
    }
    .qty {
      color: #929292;
    }
    .price {
      font-size: 16px;
      width: 50px;
      text-align: right;
    }
  }
  .packagePay {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f2f2f2;
    span {
      float: right;
    }
  }
  .discount {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f2f2f2;
    span {
      float: right;
      color: red;
    }
  }
  .total {
    height: 50px;
    line-height: 50px;
    text-align: right;
  }
  .other {
    padding: 0 20px;
  }
  .infoItem {
    height: 30px;
    line-height: 30px;
    display: flex;
    .left {
      color: #929292;
      width: 50%;
    }
    .right {
      text-align: right;
      width: 50%;
    }
  }
  .submitBtn {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-image: linear-gradient(-180deg, #fdc135 0%, #fa8829 100%);
  }
}
</style>


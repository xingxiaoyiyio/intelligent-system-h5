<template>
    <div class='msgCenter'>
        <div class='msgItem' v-for="(item,index) in msgList" :key='index'>
             <div class='title'>  <img  class='icon' src="../assets/images/news.png" alt="">  {{item.name}}  <span class='time'>{{item.time}}</span></div>
             <div :class='item.showMore ? "msg showMore":"msg showLess"'>
                 {{item.msg}}
                 <div class='downIcon' @click="item.showMore = !item.showMore">
                      <img  src="../assets/images/down.png" alt="">
                 </div>
             </div>
        </div>
    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "消息中心");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group
  },
  methods: {},
  data() {
    return {
        msgList:[
            {name:'排号',msg:'距离您的排号还有一桌，请准备用餐。',time:'今天12:00',showMore:true},
            {name:'订单完成',msg:'您的订单已完成，共消费84元。欢迎再次光临yoyyoyoyoyoyo~',time:'2018-10-20 12:30:00',showMore:false}
        ]
    };
  }
};
</script>
<style lang='less' scoped>
.title{
    padding: 0 0 0 35px;
    font-size: 17px;
    position: relative;
    height: 40px;
    line-height: 40px;
    .icon{
        position: absolute;
        left: 0;
        top: 10px;
        width: 25px;
    }
    span{
        font-size: 14px;
        color: #929292;
        float:right;
    }
  

}
.msgItem{
    padding: 10px 15px;
    border-bottom: 1px solid #f2f2f2;
  .msg{
        padding: 0 40px 0 30px;
        position: relative;
        line-height: 30px;
        color:#929292;
        .downIcon{
            position: absolute;
            transition:  all linear;
                width: 30px;
                right: 0;
                text-align: center;
                top: 0;
            img{
                width: 13px;
                text-align: center;
            }
        }
       
    }
     .msg.showLess{
        overflow: hidden;
        text-overflow: ellipsis;
        height: 30px;
     }
     .msg.showMore{
          max-height: 800px;
         .downIcon{
             transform: rotate(180deg);
         }
     }
}
</style>


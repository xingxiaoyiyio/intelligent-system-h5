<template>
    <div class='queueDetail'>
        <div class='top'>
            <div class='flexbox'>
            <div class='scu'>已成功排号！</div>
            <div>预计等待时间：30分钟</div>
            </div>
        </div>
        <div class='detail'>
            <div class='cellBox'>
                <div class='label'>门店选择</div>
                <div class='value'>碧桂园大道店</div>
            </div>
             <div class='cellBox'>
                <div class='label'>餐桌型号</div>
                <div class='value'>小桌</div>
            </div>
            <div class='cellBox'>
                <div class='label'>就餐时段</div>
                <div class='value'>晚餐</div>
            </div>
             <div class='cellBox'>
                <div class='label'>排号</div>
                <div class='value'>A25</div>
            </div>
            <div class='cellBox'>
                <div class='label'>当前呼号</div>
                <div class='value'>A22</div>
            </div>
        </div>
        <div class='cancel' @click='cancelQueue'>
            取消排号
        </div>
    </div>
</template>
<script>
import { Group,Cell } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "排号详情");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,Cell
  },
  methods: {
      cancelQueue(){
          this.$router.push({path: '/index/home'});
      }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.top{
    padding: 10px;
    background: #F2F2F2;
}
.scu{
    color: #30ACCF;
    font-size: 17px;
    padding-left: 15px;
}
.detail{
    
    padding: 10px;
    .cellBox{
        display: flex;
        border-bottom: 1px solid #f2f2f2;
        .label{
            color: #929292;
        }
        .value{
            text-align: right;
        }
        >div{
            width:50%;
            height: 44px;
            line-height: 44px;
        }
    }
}
.flexbox{
   background: #FFFFFF;
box-shadow: 0 4px 6px 0 #CCCCCC;
border-radius: 4px;
     line-height: 85px;
       height: 85px;
       display: flex;
   >div{
        width: 50%
    }
}
.cancel{
    width: 150px;
    height: 50px;
    border: 1px solid #CCCCCC;
border-radius: 4px;
line-height: 50px;

margin:0 auto;
margin-top: 30px;
text-align: center;
color:#929292;
font-size: 17px;
}
</style>


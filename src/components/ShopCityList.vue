<template>
    <div class='shopCity'>
        <div class='top'>
            <p>定位/最近访问</p>
            <flexbox :gutter="0" wrap="wrap" class='cityBox'>
                  <flexbox-item :span="1/4"><div class="cityItem">  <div class='active' @click='cityChange' > <img src="../assets/images/addr_loc.png" alt=""> 佛山</div> </div></flexbox-item>
                  <flexbox-item :span="1/4"><div class="cityItem">  <div>广州</div> </div></flexbox-item>
                  <flexbox-item :span="1/4"><div class="cityItem">  <div>深圳</div> </div></flexbox-item>
            </flexbox>
        </div>
        <div class='cityPannel'>
          <p class='title'>F</p>
          <div>佛山</div>
          <div>福州</div>
        </div>
         <div class='cityPannel'>
          <p class='title'>G</p>
          <div>广州</div>
          <div>桂林</div>
        </div>
    </div>
</template>
<script>
import { Group ,Flexbox, FlexboxItem} from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "定位");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,Flexbox, FlexboxItem
  },
  methods: {
    cityChange(){
      this.$router.push("/index/shopList")
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.cityBox{
  height: 60px;
}
.top{
  padding: 10px;
}
.cityItem{
  .active{
    position: relative;
     img{
      position: absolute;
      width: 15px;
      left: 3px;
      top: 5px;
     }
  }
  >div{
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    border:1px solid #eee;
  }
}
 .cityPannel{
    border-top: 1px solid #f2f2f2;
    
    .title{
      height: 25px;
      padding:0 10px;
      line-height: 25px;
      background: #eee;
      color:#ccc
    }
    >div{
      height: 30px;
      line-height: 30px;
       padding:0 10px;
      border-bottom: 1px solid #f2f2f2
    }
  }
</style>


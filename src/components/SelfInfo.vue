<template>
    <div class='selfInfo'>
           <div class='selfMenu'>
           <div class='menuItem'> 
             个人信息
             <div class='photo'></div>
             <img  class='right' src="../assets/images/right.png" alt="">
            </div>
            <div class='menuItem'>  
             客户服务
             <img  class='right' src="../assets/images/right.png" alt="">
            </div>
            <div class='menuItem'> 
             帮助与反馈
             <img  class='right' src="../assets/images/right.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "个人信息");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group
  },
  methods: {},
  data() {
    return {

    };
  }
};
</script>
<style lang='less' scoped>
 .menuItem{
      height: 40px;
      line-height: 40px;
      padding: 0 40px;
      font-size: 16px;
      position: relative;
      border-bottom: 1px solid #f2f2f2;
      img{
        position: absolute;
        width: 16px;
      }
     
       .right{
        right: 15px;
        width: 10px;
        top: 12px;
      }
    }
</style>


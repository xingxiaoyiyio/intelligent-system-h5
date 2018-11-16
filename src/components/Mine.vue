<template>
    <div class='mine'>
        <div class='topPhoto'>
            <img src="../assets/images/photo.jpg" alt="">
            <div class='msg'> <img src="../assets/images/white_msg.png" alt=""> </div>
        </div>
        <p class='name'>Lisav   <span class='score'>我的积分100</span> </p>
        <div class='selfMenu'>
            <router-link :to='"/index/selfInfo"'>
                <div class='menuItem'> 
                        <img  class='icon' src="../assets/images/selfInfo.png" alt="">  
                        个人信息
                        <img  class='right' src="../assets/images/right.png" alt="">
                </div>
             </router-link>
             <router-link :to='"/index/selfInfo"'>
                <div class='menuItem'> 
                    <img  class='icon' src="../assets/images/service.png" alt="">  
                    客户服务
                    <img  class='right' src="../assets/images/right.png" alt="">
                </div>
             </router-link>
            <router-link :to='"/index/selfInfo"'>
              <div class='menuItem'> 
                  <img  class='icon' src="../assets/images/q&a.png" alt="">  
                  帮助与反馈
                  <img  class='right' src="../assets/images/right.png" alt="">
              </div>
            </router-link>
             <router-link :to='"/index/selfInfo"'>
                <div class='menuItem'> 
                    <img  class='icon' src="../assets/images/q&a.png" alt="">  
                    版本信息
                    <span  class='version'>V1.0.0</span>
                </div>
              </router-link>
        </div>
             <div class='loginout'>退出登录</div>
    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
     this.$store.commit("ACTIVE_TYPE", 3);
     this.$store.commit("UPDATE_FOOTER", true);
     this.$store.commit("UPDATE_HEAD", false);
  },
  components: {
    Group
  },
  methods: {},
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.mine{
  .topPhoto{
      background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 99%);
      height: 50px;
      padding-top: 50px;
      img{
          display: block;
          height: 75px;
          height: 75px;
          margin: 0 auto;
          border-radius: 50%;
      }
  }
    .name{
        font-size: 17px;
        margin-top: 35px;
        text-align: center;
        position: relative;
    }
   
    .score{
      color: #929292;
      font-size: 14px;
      position: absolute;
      line-height: 20px;
      display: block;
      right: 15px;
      top: 8px;
    }
   
    .msg{
      width: 30px;
      height: 30px;
      text-align: center;
      position: absolute;
      right: 15px;
      top:15px;
      img{
        width:25px;
        height:25px;
      }
    }
    .selfMenu{
          margin-top: 25px;
    }
    .loginout{
      width: 160px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
      border-radius: 4px;
      margin: 40px auto 0 auto

    }
    .selfMenu{
      a{
            color:#333;
       }
    }
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
      .icon{
        left: 15px;
        top: 10px;
      }
       .right{
        right: 15px;
        width: 10px;
        top: 12px;
      }
       .version{
        display: block;
        width: 80px;
        right: 15px;
        font-size: 14px;
        text-align: right;
        position: absolute;
        color: #929292;
        top: 0;
    }
    }
 
}
</style>


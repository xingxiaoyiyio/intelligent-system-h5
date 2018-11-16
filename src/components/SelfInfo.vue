<template>
    <div class='selfInfo'>
          <div class='selfMenu'>
            <div class='menuItem icon'> 
             头像
             <div class='photo'></div>
            </div>
            <div class='menuItem'>  
              <div class='label'>昵称</div>
              <div class='nameInput value'>  <input class='weui-input' value='Lisav' type="text"></div>
            </div>
            <div class='menuItem'> 
                <div class='label'>性别</div>
                  <div class='checkIcon value'>  
                    <check-icon :value="gender==='m'" @click.native="changeGender('m')"> 男</check-icon>
                    <check-icon :value="gender==='f'" @click.native="changeGender('f')"> 女</check-icon>
                  </div>
             </div>
             <!-- <div class='menuItem'>  -->
                <group>
                   <datetime v-model="birthday"   :title="'生日'"></datetime>
                </group>
               <!-- <div class='label'>生日</div>
                <div class='value'>{{birthday}}</div>
              <img  class='right' src="../assets/images/right.png" alt=""> -->
            <!-- </div> -->
         </div>
      </div>
</template>
<script>
import { Group,CheckIcon,Datetime } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "个人信息");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,CheckIcon,Datetime
  },
  methods: {
      changeGender(gender){
          this.gender=gender
      }
  },
  data() {
    return {
      gender:'f',
      birthday:'1990-11-09'
    };
  }
};
</script>
<style lang='less' scoped>
 .menuItem{
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      font-size: 16px;
      position: relative;
      display: flex;
      border-bottom: 1px solid #f2f2f2;
      .nameInput{
       
        input{
          color: #929292;
          text-align: right;
        }
      }
      .label{
        width: 80px;
      }
      img{
        position: absolute;
        width: 16px;
      }
     
       .right{
        right: 15px;
        width: 10px;
        top: 18px;
      }
    }
    .checkIcon{
      position: absolute;
      right: 20px;
      color: right;
      top: 0;
    }
    .value{
      color: #929292;
      text-align: right;
      flex:1;
      padding:0 15px;
    }
    
    .photo{
      width:40px;
      height: 40px;
      background: #f2f2f2;
      border-radius: 50%;
      right: 30px;
      position: absolute;
      top: 5px;
    }
    .checkIcon .weui-icon-success{
    color: #FA8829
}
.menuItem.icon:after{
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 15px;
}
</style>


<template>
    <div class='book'>
         <group>
            <cell title="门店选择" class='cellbox' value="碧桂园总部店" is-link link='/index/shopList'></cell>
            <datetime v-model="timeValue"  :start-date="startDate" :end-date="endDate"  format="YYYY-MM-DD HH:mm" :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']" :minute-list="['00', '15', '30', '45']" @on-change="changeTime" :title="'用餐时间'"></datetime>
             <popup-picker :title="'餐桌型号'" :data="tableList" v-model="table"  @on-change="changTable" ></popup-picker>
        </group>
        <div class='line'></div>

        <group>
            <div class='weui-cell cellbox'>
                <div class='name'>姓名</div>
                <div class='nameInput'>  <input class='weui-input' value='Lisav' type="text"></div>
                <div class='checkIcon'>  
                <check-icon :value="gender==='m'" @click.native="changeGender('m')"> 男</check-icon>
                <check-icon :value="gender==='f'" @click.native="changeGender('f')"> 女</check-icon></div>
            </div>
            <x-input title="手机号码"  v-model='phone'  name="mobile" placeholder="请输入" keyboard="number"></x-input>
        </group>
        <div class='bookBtn'  @click='submitBook'>马上订位</div>
      
    </div>
</template>
<script>
import { Group,Cell,Datetime,PopupPicker,CheckIcon,XInput} from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "预定");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group,Cell,Datetime,PopupPicker,CheckIcon,XInput
  },
  methods: {
      changeTime(value){
           console.log('change', value)
      },
      changTable(value){
            console.log('change', value)
      },
      changeGender(gender){
          this.gender=gender
      },
      submitBook(){
           this.$router.push({path: '/index/bookDetail'});
      }
  },
  data() {
    return {
        showTimePicker:false,
        timeValue:'2018-11-20 10:20:00',
        startDate:'2018-11-11',
        tableList:[['小桌(1-4人)','中桌(5-6人)','大桌(7-12人)']],
        phone:'1345590878',
        table:['小桌'],
        gender:'f',
        endDate:'2018-11-21',
    };
  }
};
</script>
<style lang='less' scoped>
.line{
    height: 6px;
    background: #f2f2f2;
}
.cellbox{
    font-size: 17px;
}
.name{
    min-width: 85px;
}
.nameInput{
    width: 0;
    flex:1
}
.checkIcon .weui-icon-success{
    color: #FA8829
}
.bookBtn{
    background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
border-radius: 4px;
width: 160px;
height: 50px;
line-height: 50px;
text-align: center;
margin: 0 auto;
color:#fff;
margin-top: 30px;
font-size:17px;
}
</style>


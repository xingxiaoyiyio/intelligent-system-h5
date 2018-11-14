<template>
    <div class='evaluate'>
        <div class='top'>
             <group>
                <cell title="口感评价">
                    <rater v-model="comment1" star="♡" active-color="#FF9900" :margin="5"></rater>
                </cell>
                <cell title="上菜速度">
                    <rater v-model="comment2" active-color="#FF9900" :margin="5"></rater>
                </cell>
                <cell title="服务环境">
                   <rater v-model="comment3" star="☻" active-color="#FF9900" :margin="5"></rater>
                </cell>
             </group>
        </div>
        <div class='line'></div>
        <div class='remark'>
            <textarea cols="30" rows="5" placeholder="菜品口味如何，服务周到吗？"></textarea>
        </div>
        <div class='uploadImg'>
            <div class='uploadIcon'>
                <div class='icon'> <img src="../assets/images/upload.png" alt=""> </div>
                <p>上传图片</p>
            </div>
        </div>
         <group class='recom'>
           <cell :title="'推荐菜品'" link="/index/RecommendList"></cell>
         </group>
        <div class='anonymous'>
            匿名评价 <input type="checkbox"  v-model='ifAnonymous' />   
        </div>
        <div class='submitBtn'>发布</div>
    </div>
</template>
<script>
import { Rater, Group, Cell } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "评价");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Rater,
    Group,
    Cell
  },
  methods: {},
  data() {
    return {
      comment1: 1,
      comment2: 2,
      comment3: 3,
      ifAnonymous:true
    };
  }
};
</script>
<style lang='less' scoped>
.evaluate {
  .uploadImg {
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;
  }
  .submitBtn{
      width:150px;
      height:50px;
      line-height: 50px;
      margin:15px auto 0 auto;
      text-align: center;
      color: #fff;
      font-size: 17px;
      background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
      border-radius: 4px;
  }
  .recom {
    .weui-cells {
      margin-top: 0 !important;
    }
  }
  .anonymous{
    height: 30px;
    line-height: 30px;
    padding: 10px 15px;
  }
  .uploadIcon {
    width: 60px;
    height: 60px;
    text-align: center;
    background: #f2f2f2;
    border: 1px dashed #ccc;
    padding: 10px;
    margin: 20px;
    color: #929292;
    img {
      width: 20px;
      padding: 5px;
    }
  }
  .remark {
    border-bottom: 1px solid #f2f2f2;
    padding: 20px;
  }
}
</style>


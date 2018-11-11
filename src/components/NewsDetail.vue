<template>
    <div class='newsDatail'>
        <p class='title'>
            最新优惠活动
        </p>
        <div class='time'>
            发布时间：2018-10-08  12:30:00
        </div>
        <div class='img'>
            <img src="../assets/img/banner2.jpg" alt="">
        </div>
        <p class='info'>
            最新优惠活动最新优惠活动最新优惠活动
        </p>
    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "新闻详情");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
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
.newsDatail{
    padding:20px;
}
.title{
    font-size: 24px;
}
.img{
    max-height: 110px;
    overflow: hidden;
    img{
        width: 100%;
    }
}
.time{
   height: 40px;
    line-height: 40px;
    color: #929292;
}
.info{
    text-indent: 28px;
    margin-top: 15px;
}
</style>


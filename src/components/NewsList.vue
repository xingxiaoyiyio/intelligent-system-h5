<template>
    <div class='newsList'>
        <div class='newsItem'>
            <div class='img'>
                <img src="../assets/images/news.png" alt="">
            </div>
            <div class='info'>
                <p class='title'>机器人餐厅南海店开张啦~</p>
                <p class='dec'>南海分店开张了，期待你的光临！</p>
            </div>
            <div class='date'>
                <p class='time'>2018-09-10 12:30</p>
                 <router-link :to="'/index/newsDetail'"><p class='detail'>详情 <span><img src="../assets/images/right.png" alt=""></span></p></router-link>   
            </div>
        </div>
    </div>
</template>
<script>
import { Group, Cell } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "新闻播报");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Cell,
    Group
  },
  methods: {
    loadNews() {
         let self = this;
            this.baseAjax({
                url: "/news/list",
                params: {
                shopid: "8001"
                },
                success: function(data) {
                console.log(data)
                }
            });
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.newsItem {
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid #f2f2f2;
   p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
    height: 30px;
    line-height: 30px;
  }
  .img {
    width: 30px;
    padding-top: 3px;
    img {
      width: 20px;
      padding-top: 6px;
    }
  }
  .detail {
    height: 30px;
    line-height: 30px;
    padding-right: 30px;
    position: relative;
    color:#333;
    span {
      position: absolute;
      right: 0;
      padding-top:3px;
      img {
        width: 12px;
      }
    }
  }
  .info {
    flex: 1;
    width: 0;
    .title {
      font-size: 16px;
      color: #333;
      .time {
        line-height: 30px;
        margin-left: 5px;
      }
    }
  }
 
}
.date {
  text-align: right;
}
</style>


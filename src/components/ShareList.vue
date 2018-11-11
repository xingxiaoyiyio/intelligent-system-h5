<template>
    <div class='shareList'>
        <div class='shareBox'>
               <div  v-for="(item,index) in shareList" :key="index">
               <router-link :to="'/index/EvaluateDetail'">
              <div class='share-item'>
                  <div class='shareimg'>
                       <img v-bind:src=item.url alt="">
                  </div>
                  <div class='r-dec'>
                      <p class='name'>{{item.title}}</p>
                      <div class='sdec'>{{item.dec}}</div>
                      <div class='rec-dishs'>
                          <div class='ltitle'>推荐菜谱</div>
                          <div class='rdish'>{{item.reclist}}</div>
                      </div>
                  </div>
              </div>
                </router-link>
                </div>
          </div>
    </div>
</template>
<script>
import { Group } from "vux";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "热门分享");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
  },
  components: {
    Group
  },
  methods: {},
  data() {
    return {
      shareList: [
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          title: "机器人餐厅店铺1",
          dec:
            "机器人餐厅体验太棒了~，吃得非常愉快，最喜欢可爱的迎宾小智了看就看健康健康就",
          reclist: "酸辣牛肉、红烧排骨、蒜蓉虾"
        },
        {
          url: "http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg",
          title: "机器人餐厅店铺2",
          dec:
            "机器人餐厅体验太棒了~，吃得非常愉快，最喜欢可爱的迎宾小智了看就看健康健康就",
          reclist: "酸辣牛肉、红烧排骨、蒜蓉虾"
        }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.shareBox {
  padding: 20px;
  .share-item {
    overflow: hidden;
    display: flex;
    height: 110px;
    padding-bottom: 10px;
    .name{
        color:#333;
    }
    p {
      font-size: 16px;
    }
    .shareimg {
      width: 130px;
      height: 110px;
      overflow: hidden;
      display: flex;
      align-items: center;
      img {
        height: 100%;
      }
    }
    .r-dec {
      flex: 1;
      width: 0;
      padding-left: 10px;
    }

    .sdec {
      height: 45px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: #929292;
      margin-top: 5px;
    }
    .rec-dishs {
      height: 30px;
      display: flex;
      font-size: 12px;
      margin-top: 5px;
      .ltitle {
        width: 55px;
        text-align: center;
        line-height: 20px;
        height: 20px;
        border: 1px solid #30accf;
        border-radius: 2px;
        color: #30accf;
      }
      .rdish {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 25px;
        padding-left: 5px;
        color: #30accf;
        white-space: nowrap;
      }
    }
  }
}
</style>


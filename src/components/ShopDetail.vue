<template>
<div class='shopDetail'>
    <div class='map'>

    </div>
    <div class='detail'>
        <div class='info'>
            <p class='title'>机器人餐厅1(碧桂园总部店)<span>距离15km</span> </p>
            <p class='dec'>营业： 00:00-23:00</p>
            <p class='dec'>地址： 佛山市顺德区北窖镇顺德碧桂园大道1号</p>
            <p class='dec'>等位： 12桌【小桌】8桌【中桌】10【大桌】</p>
        </div>
        <div class='route'>查看路线</div>
    </div>
</div>
</template>
<script>
export default {
    mounted() {
          this.$store.commit('UPDATE_PAGE_TITLE', '门店详情')
          this.$store.commit('UPDATE_HEAD', true);
          this.$store.commit('UPDATE_FOOTER', false);
        }
}
</script>

<style lang='less' scoped>
.shopDetail{
    height: 100%;
}
.map{
    height: 100%;
    width: 100%;
    padding-bottom: 200px;
}
.detail{
      height: 186px;
    position: absolute;
    width: 100%;
    bottom: 0;
        border-top: 1px solid #eee;
    .info{
        padding:15px;
    }
}
.title{
        font-size: 17px;
    overflow: hidden;
    height: 30px;
    line-height: 30px;
    span{
            float: right;
    font-size: 14px;
    color: #929292;
    }
}
.dec{
    font-size: 14px;
     color: #929292;
     height: 25px;
     line-height: 25px;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
}

.route{
    background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
}
</style>

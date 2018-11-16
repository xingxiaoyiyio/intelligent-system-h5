<template>
<div class='shopDetail'>
    <div class='map' id="allmap"></div>
    <div class='detail'>
        <div class='info'>
            <p class='title'>{{shopItem.name}}<span>距离{{shopItem.distance}}km</span> </p>
            <p class='dec'>营业： {{shopItem.work}}</p>
            <p class='dec addr'>地址： {{shopItem.address}} <span class='phone'><img src="../assets/images/phone.png" alt=""></span>   </p>
            <p class='dec'>等位： 12桌【小桌】8桌【中桌】10【大桌】</p>
        </div>
        <div class='route'>查看路线</div>
    </div>
</div>
</template>
<script>
import BMap from "BMap";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "门店详情");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
    this.ready();
  },
  data() {
    return {
    };
  },
  methods: {
    ready() {
      var th = this;
      let lat=this.shopItem.longitude,lng=this.shopItem.latitude;
      const map = new BMap.Map("allmap");
      if(!lat || !lng){
        lat=113.281957;
        lng=22.930372;
      }
      const point = new BMap.Point(lat,lng); // 创建点坐标
      map.centerAndZoom(point, 12);

      const greenIcon = new BMap.Icon("./src/assets/images/map-red.png", new BMap.Size(134, 130), {
          offset: new BMap.Size(0, 0), // 指定定位位置
          imageOffset: new BMap.Size(0, 0) // 设置图片偏移
      });
      const marker = new BMap.Marker(point,{icon: greenIcon});
          map.addOverlay(marker);//标出所在地
    }
  },
  computed:{
    shopItem(){
         if(this.$route.query){
            return this.$route.query.item || {}
         }else{
            return {}
         }
        
    }
  },
  created() {
   
  }
};
</script>

<style lang='less' scoped>
.shopDetail {
  height: 100%;
}
.map {
  height: 100%;
  width: 100%;
  padding-bottom: 200px;
  overflow: hidden;
}
.detail {
  height: 186px;
  background: #fff;
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #eee;
  .info {
    padding: 15px;
  }
}
.title {
  font-size: 17px;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  span {
    float: right;
    font-size: 14px;
    color: #929292;
  }
}
.dec {
  font-size: 14px;
  color: #929292;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.addr{
    position: relative;
    padding-right: 40px;
    .phone{
           width: 25px;
    padding-left: 10px;
    height: 30px;
    position: absolute;
    right: 0;
    border-left: 1px solid #ccc;
        img{
              width: 20px;
    text-align: right;
        }
    }
}

.route {
  background-image: linear-gradient(-180deg, #fdc135 0%, #fa8829 100%);
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
</style>

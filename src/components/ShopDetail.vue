<template>
<div class='shopDetail'>
    <div class='map' id="allmap"></div>
    <div class='detail'>
        <div class='info'>
            <p class='title'>机器人餐厅1(碧桂园总部店)<span>距离15km</span> </p>
            <p class='dec'>营业： 00:00-23:00</p>
            <p class='dec addr'>地址： 佛山市顺德区北窖镇顺德碧桂园大道1号   <span class='phone'><img src="../assets/images/phone.png" alt=""></span>   </p>
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
      userlocation: { lng: "", lat: "" }
    };
  },
  methods: {
    ready() {
      var th = this;
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(113.281957,22.930372); // 创建点坐标
      map.centerAndZoom(point, 12);
      var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      console.log(r.point)
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);//标出所在地
            map.panTo(r.point);//地图中心移动
            
            var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs){
               var addComp = rs.addressComponents; 
               var city = result.addressComponents.city;
               console.log(rs.address);//地址信息
            });
        }else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})
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

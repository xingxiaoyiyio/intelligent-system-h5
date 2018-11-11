<template>
<div class='shopDetail'>
    <div class='map' id="allmap"></div>
    <div class='detail'>
        <div class='info'>
             <router-link :to="'/index/shopList'"><p class='title'>机器人餐厅1(碧桂园总部店) <img src="../assets/images/down.png" alt=""></p></router-link>  
            <p class='dec addr'>营业： 00:00-23:00 <span class='dist'>距离15km</span>    <span class='phone'><img src="../assets/images/phone.png" alt=""></span>    </p>
            <p class='dec'>地址： 佛山市顺德区北窖镇顺德碧桂园大道1号</p>
            <div class='waiting'>
                <p>正在等位</p>
                <p class='type'>【小桌】12桌</p>
                <p class='type'>【中桌】10桌</p>
                <p class='type'>【大桌】10桌</p>
            </div>
        </div>
        <div class='queueBtn'>
           <router-link :to="'/index/queue'">
           <div>
                排队取号
           </div>
           </router-link>
        </div>
    </div>
</div>
</template>
<script>
import BMap from "BMap";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "取号");
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
    geolocation.getCurrentPosition(function(r){console.log(r.point)
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);//标出所在地
            map.panTo(r.point);//地图中心移动
            
            var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs){
               var addComp = rs.addressComponents; 
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
  height: calc(~"100vh - 360px");
  width: 100%;
  overflow: hidden;
}
.detail {
  height: 310px;
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
  color:#333;
    img{
            width: 12px;
    margin-left: 10px;

    }
}
 .dist {
    float: right;
    font-size: 14px;
    color: #929292;
    padding-right: 5px;
  }
.dec {
  font-size: 14px;
  color: #929292;
  height: 30px;
  line-height: 30px;
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
.waiting{
        margin-top: 10px;
    border-top: 1px solid #f2f2f2;
    p{
        height: 30px;
    line-height: 30px;
    padding-left: 10px; 
    }
    p:first-child{
     height: 40px;
    line-height: 40px;
    }
}

.queueBtn {
  background-image: linear-gradient(-180deg, #fdc135 0%, #fa8829 100%);
  height: 50px;
  text-align: center;
      line-height: 50px;
    position: absolute;
    width: 100%;
    bottom: 0;
  a{
      color: #fff
  }
}
</style>

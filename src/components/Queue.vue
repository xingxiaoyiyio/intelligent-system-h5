<template>
    <div class='queue'>
         <div class='map' id="allmap"></div>
    <div class='detail'>
        <div class='table'>
            <p class='name'>餐桌型号：</p>
            <div class='typeBox'>
                <div>
                    <p class='typeInfo'>小桌(1-4人)</p>
                    <div class='type active'>小桌</div>
                </div>
                 <div>
                    <p class='typeInfo'>中桌(5-6人)</p>
                    <div class='type'>中桌</div>
                </div>
                 <div>
                    <p class='typeInfo'>大桌(7-12人)</p>
                    <div class='type'>大桌</div>
                </div>
            </div>
        </div>
        <div class='time'>
          <p class='name'>就餐时段：</p>
          <div class='info'>
              <p>午餐时间:10：00-15:00</p>
              <p>晚餐时间:16：00-23:00</p>
              <div class='timeType'>
                  <div>
                    <div class='type active'>午餐</div>
                  </div>
                  <div>
                    <div class='type'>晚餐</div>
                  </div>
              </div>
          </div>
        </div>
        <router-link :to="'/index/QueueDetail'">
                <div class='btn'>
                            确认排队
                </div>
        </router-link>
       
    </div>
    </div>
</template>
<script>
import BMap from "BMap";
export default {
  mounted() {
    this.$store.commit("UPDATE_PAGE_TITLE", "排号");
    this.$store.commit("UPDATE_HEAD", true);
    this.$store.commit("UPDATE_FOOTER", false);
    this.ready()
  },
  components: {},
  methods: {
    ready() {
      var th = this;
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(113.281957, 22.930372); // 创建点坐标
      map.centerAndZoom(point, 12);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          console.log(r.point);
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk); //标出所在地
            map.panTo(r.point); //地图中心移动

            var point = new BMap.Point(r.point.lng, r.point.lat); //用所定位的经纬度查找所在地省市街道等信息
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs) {
              var addComp = rs.addressComponents;
              console.log(rs.address); //地址信息
            });
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.queue {
  height: 100%;
}
.map {
  height: calc(~"100vh - 380px") !important;
  width: 100%;
  overflow: hidden;
}
.detail{
    height: 330px;
    position: absolute;
    overflow: hidden;
    width: 100%;
    bottom: 0;
    .typeBox{
        display: flex;
       >div{
           width: 30%;
       }
        
    }
    .table{
        padding: 10px 20px;
    }
    .name{
        font-size: 15px;
        line-height: 35px;
        height: 35px;
    }
    .typeInfo{
        color: #929292;
    }
    .type{
           width: 80px;
            height: 30px;
            background: #ccc;
            color: #fff;
            border-radius: 4px;
            margin-top: 10px;
            line-height: 30px;
            text-align: center;
        >div{
            text-align: center;
        }
    }
    .type.active{
        background: #FA8829;
    }
    .time{
        padding: 10px 20px;
    border-top: 1px solid #f2f2f2;
    margin-top: 5px;
    .info{
            color: #929292;
    }
    }
    .timeType{
        display: flex;
        >div{
            width: 30%
        }
    }
   
    .btn{
         position: absolute;
         text-align: center;
        color: #fff;
        font-size: 17px;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
    }
}
</style>


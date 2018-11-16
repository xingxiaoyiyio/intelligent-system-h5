<template>
    <div class='noData'>
        <div v-show=showImg>
           <img src="../assets/images/no-data.png" alt="">
        </div>
        <div class='msg'>
            {{msg}}
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
      },
     props: {
         msg:{
             default:'暂无数据'
         },
         showImg:{
             default:false
         }
    }
}
</script>


<style lang='less'>
.noData{
    div{
        text-align: center;
        img{
           margin-top: 20px;
           width: 100px;
        }
    }
    .msg{
        color:#929292;
        margin-top: 15px;
    }
}
      
</style>


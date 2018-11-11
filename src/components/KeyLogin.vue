<template>
    <div class='keyLogin'>
        <p class='title'>账号登录</p>
        <group>
           <x-input title="手机号码"  v-model='phone'  name="mobile" placeholder="请输入" keyboard="number"></x-input>
           <x-input title="密码  " type='password' v-model='phone'  name="key" placeholder="请输入" keyboard="number"></x-input>
        </group>
        <p class='forgetKey'>忘记密码？</p>
        <div class='loginBtn'>
            <div class='btn'>登录</div>
            <p>验证码登录</p>
        </div>
        <div class='bottom'>
            <p class='line'>授权登录</p>
            <div class='btnbox'>
                <div class='weChart'>
                    <div class='img'></div>
                    <p>微信登录</p>
                </div>
                <div class='qq'>
                    <div class='img'></div>
                    <p>QQ登录</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {XInput,Group} from 'vux'
export default {
        mounted() {
          this.$store.commit('UPDATE_PAGE_TITLE', '')
          this.$store.commit('UPDATE_HEAD', true);
          this.$store.commit('UPDATE_FOOTER', false);
        },
        components: {
            Group,
            XInput
        },
        data(){
            return{
                phone:''
            }
        }
}
</script>

<style lang="less" scoped>
.keyLogin{
     padding: 10px 20px;
    .weui-cell{
        padding: 30px 15px 10px 15px;
        border-bottom: 1px solid #f2f2f2
    }

    .weui-cell:before{
        border-top: none
    }

    .weui-cell:after{
        border-bottom: none
    }


    .weui-cells.vux-no-group-title:before{
         border: none;
         height:0
    }
    .vux-no-group-title:before{
         border: none !important;
         border-top: none !important;
         height:0
    }

    .forgetKey{
        text-align: right;
        color: #30ACCF;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        padding-right: 20px;
    }

  
}

.title{
    font-size: 24px;
   
}
.btn{
    width: 150px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: 17px;
    border-radius: 4px;
    margin: 0 auto;
    background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
}
.loginBtn{
        margin-top: 20px;
    p{
        text-align: center;
        margin-top: 20px;
    }
}

.bottom{
          text-align: center;
    position: absolute;
    width: 90%;
    margin-left: -20px;
    padding: 20px;
    .line{
        border-bottom: 1px solid #f2f2f2;
    }
    p{
        color: #929292;
        height: 40px;
        line-height: 40px;
    }
    .btnbox{
         display: flex;
         padding: 10px 40px;
         >div{
             width: 50%;
             text-align: center;
             text-align: center;
         }
         .img{
             width: 45px;
             height: 45px;
             border-radius: 50%;
             margin: 0 auto;
             border: 1px solid #eee;
         }
    }

}



</style>


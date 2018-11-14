<template>
    <div class='menu'>
        <!-- 菜品分类 -->
        <div class='menuTop'>
            <scroller lock-y :scrollbar-x=false>
                <div class="box1" v-bind:style="{ width: swipboxWidth }">
                    <div :class="activeMenu === index ?'activeMenu box1-item':'box1-item'"  v-for="(item,index) in menuLevel1" :key="index"  @click="clickMenu(index,item.id)">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </scroller>
        </div>
        <!-- 确认下单弹框 -->
        <div v-transfer-dom class='menuConfirm'>
            <confirm v-model="orderModal"
            :confirmText="'确认下单'"
            @on-confirm="onConfirm">
                <div>
                    <div class='inline'>
                        <div>
                            用餐人数
                        </div>
                         <div class='qty'>
                               <div class='qtyicon' @click="popQty=popQty >0 ? popQty-1 :0">
                                        <img src="../assets/images/dec.png" alt="">
                                </div>
                                <div class='no'>{{popQty}}</div>
                                <div class='qtyicon'  @click="popQty++">
                                    <img src="../assets/images/plus.png" alt="">
                                </div>
                        </div>
                    </div>
                   <div class='inline'>
                   <div class='scanIcon'>
                       桌号<img src="../assets/images/scan.png" alt="">
                   </div>
                   <div class='tableNo'>
                       <popup-picker  :data="tableList" v-model="tableNo" :popup-style="{zIndex:5001}"  @on-show="orderModal=false" @on-hide="orderModal=true" ></popup-picker>
                   </div>
                    </div>

                </div>
            </confirm>
        </div>
        <!-- 选择规格弹框 -->
        <div class='specModal' v-transfer-dom >
             <confirm v-model="specModal" :show-cancel-button="false" :show-confirm-button="false">
                 <div class='top'>{{activeDish.name}} 
                         <span  class='closed' @click="specModal=false">
                               <img src="../assets/images/close.png" alt="">
                         </span>
                </div> 
                 <div class='specItemsBox'>
                     <div class='specItem' v-for="(item,index) in activeDish.spec" :key=index>{{item}}</div>
                 </div> 
                 <div class='bottom'>
                     <div>￥32.00</div>
                     <div class='addtoshop' @click='specModal=false'>加入购物车</div>
                 </div>
              </confirm>
        </div>
        <!-- 购物车弹框 -->
        <div v-transfer-dom>
            <popup v-model="showShoppingList">
                <div class='shopingList'>
                   <div class='top'>
                       <div class='delIcon' @click="clearShoplist">
                            <img src="../assets/images/del-icon.png" alt="">
                            清除购物车
                       </div>
                       
                   </div>
                   <div v-show='shoppingItems.length===0' class='empty'>
                        购物车为空
                   </div>
                   <div class='itemBox'>
                       <div class='itempack'  v-for="(item,index) in shoppingItems" :key="index">
                            <div class='item'>
                                <div class='name'>{{item.name}}</div>
                                <div class='price'>￥{{item.price}}</div>
                                <div class='qty'>
                                        <div class='qtyicon' @click="shoppingItems[index].qty = shoppingItems[index].qty >0 ?shoppingItems[index].qty-1 :0 ">
                                                <img src="../assets/images/dec.png" alt="">
                                            </div>
                                            <div class='no'>{{item.qty || 0}}</div>
                                            <div class='qtyicon'  @click="shoppingItems[index].qty++ ">
                                                <img src="../assets/images/plus.png" alt="">
                                        </div>
                                </div>
                            </div>
                            <p>份</p>
                       </div>
                   </div>
                </div>
            </popup>
        </div>
        <!-- 菜品列表 -->
        <scroller class='listBox' lock-x  ref="scrollerEvent">
            <div>
                <div class='itemOuter'  v-for="(item,index) in dishList" :key="index">
                    <!-- <div class="dishItem" >
                        <div class='img'>
                            <img v-bind:src=item.url alt="">
                        </div>
                        <div class='dishinfo'>
                            <div class='topInfo'>
                                <p>{{item.name}}</p>
                            </div>
                            <div class='bottomInfo'>
                                <div class='price'>￥{{item.price}}</div>
                                <div v-if='item.spec' class='specBox' @click="specModal=true">
                                    <div class='spec'>选规格 <span>2</span> </div>
                                </div>
                                <div v-else class='qty'>
                                    <div class='qtyicon' @click="minus(index)">
                                        <img src="../assets/images/dec.png" alt="">
                                    </div>
                                    <div class='no'>{{item.qty || 0}}</div>
                                    <div class='qtyicon'  @click="plus(index)">
                                        <img src="../assets/images/plus.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->

                     <div class="dishItem" >
                        <div class='img blankImg'>
                            <img v-bind:src=item.icon alt="">
                        </div>
                        <div class='dishinfo'>
                            <div class='topInfo'>
                                <p>{{item.name}}</p>
                            </div>
                            <div class='bottomInfo'>
                                <div class='price'>￥{{item.price}}</div>
                                <div v-if='item.spec' class='specBox' @click="specModal=true">
                                    <div class='spec'>选规格 <span>2</span> </div>
                                </div>
                                <div v-else class='qty'>
                                    <div class='qtyicon' @click="updateCart(item,1)">
                                        <img src="../assets/images/dec.png" alt="">
                                    </div>
                                    <div class='no'>{{item.qty || 0}}</div>
                                    <div class='qtyicon'  @click="updateCart(item,2)">
                                        <img src="../assets/images/plus.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
         <!-- 底部点好了 -->
        <div class='bottomBox'>
            <div class='cartBox'>
                <div class='leftNo'>
                    ￥{{titalAmount}}
                </div>
                <div class='rightOk' @click="orderModal=true">
                    点好了
                </div>
            </div>
            <div class='cartIcon'>
                <img src="../assets/images/shop.png"  @click="showShoppingList=!showShoppingList"  alt="">
                <div class='totalCount'>{{totalCount}}</div>
            </div>
          
        </div>
    </div>
</template>
<script>
  import {Scroller,Confirm,TransferDomDirective as TransferDom,PopupPicker,Popup} from 'vux'
  import {mapGetters} from 'vuex'
  import Vue from 'vue'
  import { api } from '../config/api'
  const { prodCategoryUrl,queryProdByIdUrl ,cartListUrl,updateCartUrl,specListUrl} = api;
  const productListById = {}
  const specListById = {}

  export default {
    mounted() {
          this.$store.commit('UPDATE_PAGE_TITLE', '点餐')
          this.$store.commit('UPDATE_HEAD', true);
          this.$store.commit('UPDATE_FOOTER', false);
          this.loadCategory()  //获取菜品种类
          this.loadCartList()  //购物车列表
      },   
    components: {
       Scroller,
       PopupPicker,
       Popup,
       Confirm
    },
      directives: {
    TransferDom
  },
    data(){
        return {
            menuLevel1:[
                {name:'鲁菜',id:'c9b946d6b9264a04b96aad9f44fc0522'}
            ],
            activeMenu:0,
            totalCount:4,
            specModal:false,
            titalAmount:"98.00",
            showShoppingList:false,
            orderModal:false,
            popQty:0,
            tableList:[['A01','A02','A03','A04']],
            tableNo:['A02'],
            showTableList:false,
            activeDish:{name:'蛋炒饭',price:60,spec:['大份','中份','小份'],url:'http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg',qty:1},
            shoppingItems:[
                {name:'红烧茄子',price:23,   url:'http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg',qty:0},
                // {name:'蛋炒饭',price:60,spec:['大份','中份','小份'],url:'http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg',qty:1},
            ],
            dishList:[
                // {name:'香辣虾',price:60,price:60,spec:['大份','中份','小份'],icon:'http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg',qty:1},
                {name:'香辣虾',price:60,icon:'http://pic25.photophoto.cn/20121128/0042040254149743_b.jpg'}
            ]
        }
     },
     methods:{
        loadCategory(){
                let self = this;
                this.baseAjax({
                    url: prodCategoryUrl,
                    success: function(data) {
                    console.log(data)
                    if (data.result && data.result.length) {
                       self.menuLevel1=data.result;
                       self.loadProductById(self.menuLevel1[0].id)
                    }
                    }
                });
        },
        onConfirm(){
            console.log('confirm')
        },
        loadCartList(){
            let self = this;
            this.baseAjax({
                url: cartListUrl,
                data:{
                    accessToken:''
                },
                success: function(data) {
                     console.log(data)
                    if (data.result && data.result.length) {
                      
                    }
                }
            });
        },
        clickMenu(index,id){
            console.log(id)
           this.activeMenu=index;
           if(!productListById[id]){
                this.loadProductById(id)
           }else{
                self.dishList = productListById[id];
           }
        },



        loadSpecList(productId){
              this.baseAjax({
                url: specListUrl,
                data:{
                    productId:productId
                },
                success: function(data) {
                    console.log(data)
                    if (data.result && data.result.length) {
                       
                    }
                }
            });
        },

        updateCart(item,type){
            console.log(item)
             if(!item.quantity) item.quantity = 0;
            item.quantity= type===1 ? item.quantity +1 : item.quantity>1 ? item.quantity-1 : 0;
              console.log(item)
            return;
            let self = this;
            let postData={
                accessToken:'',
                quantity:item.quantity,
                id:item.productId
            }
            this.baseAjax({
                url: updateCartUrl,
                data:postData,
                success: function(data) {
                    console.log(data)
                    if (data.result && data.result.length) {
                       self.loadCartList();
                    }
                }
            });
        },

        loadProductById(id){
            let self = this;
            this.baseAjax({
                url: queryProdByIdUrl,
                data:{
                    categoryId:id
                },
                success: function(data) {
                    if (data.result && data.result.length) {
                        productListById[id] = data.result;
                        self.dishList=data.result
                    }
                }
            });
        },
        clearShoplist(){
            this.shoppingItems=[];
            this.totalCount=0;
            this.showShoppingList=false;
            this.titalAmount=0
        }

     },
computed:{
    ...mapGetters([
        'headShow',
        'footerShow'
        ]),
        swipboxWidth(){
            const  width=this.menuLevel1.length * 80 > window.innerWidth - 30 ? this.menuLevel1.length * 80 : window.innerWidth - 30
            return width+'px'
        } 
    }
}

</script>
<style scoped lang='less'>

.box1 {
  height: 30px;
  position: relative;
}
.box1-item {
  width: 70px;
  height: 30px;
  display:inline-block;
  margin-left: 10px;
  float: left;
  text-align: center;
  line-height: 30px;
}
.box1-item:first-child {
  margin-left: 0;
}
.activeMenu{
    color: #FA8A29 
}
.menuTop{
    padding: 10px 20px;
}
.bottomBox{
    height: 50px;
    position: absolute;
    background: #fff;
    bottom: 0;
    width: 100%;
    z-index: 600;
}

.totalCount{
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    background: #FA8829;
    right: 0;
    top: 0;
    border-radius: 50%;
    position: absolute;
    font-size: 12px;
}
.tableNo{
    padding-left: 20px
}
.cartBox{
 display: flex;
 font-size: 17px;
}
.leftNo{
    flex:1;
    text-align: center;
    line-height: 50px;
    padding-left: 30px;
}
.rightOk{
  text-align: center;
  color: #fff;
    line-height: 50px;
    width: 120px;
  background-image: linear-gradient(-180deg, #FDC135 0%, #FA8829 100%);
}
.scanIcon{
    img{
 margin-left: 15px  
    }
 
}
.cartIcon{
     position: absolute;
    left: 30px;
    top: -20px;
    width: 68px;
    height: 68px;
    img{
        width: 68px;
    }
}
.listBox{
    height: calc(~"100vh - 150px") !important;
    background: #F2F2F2;
    overflow: hidden;
}
.inline:first-child{
        border-bottom: 1px solid #f2f2f2;
}
.inline{
    display: flex;
    padding-left:20px;
    line-height: 40px;
    >div{
        width: 50%;
        display: flex;
        align-items: center;
        img{
            width:20px;
            height: 20px;;
        }
    }
    .qty{
        justify-content: space-between;
    }
    .qtyicon{
       padding: 0 10px 10px 10px;
    }
}
.itemOuter{
  padding:0 25px;
  background: #fff;
}
  
   
.dishItem{
    height: 100px;
    text-align: center;
    display: flex;
    padding:15px 0;
    border-top: 1px solid #eee;
    .img{
         width: 100px;
         overflow: hidden;
          border-radius: 5px;
    }
    .dishinfo{
        padding:5px 0 0 10px;
        flex:1;
    }
    img{
        height: 100px;
        overflow: hidden;
        
    }
 
    .bottomInfo{
        display: flex;
        height: 40px;
    }
    .price{
        color: #FA8829;
        width: 60px;
        font-size: 15px;
        text-align: left;
        width: 50%;
    }
    .specBox{
        width: 50%;
    }

    .spec{
        width:60px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        background: #FA8829;
        border-radius: 10px;
        color:#fff;
        margin: 0 auto;
    position: relative;
    span{
            display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #fff;
        background: #FA8829;
        border-radius: 50%;
        right: -10px;
        top: -10px;
    }
    }
  

    .topInfo{
        height: 60px;
        p{
            line-height: 30px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 15px;
        }
    }
}

 .qty{
        display: flex;
         width: 50%;
        flex:1;
        justify-content: space-around;
        .no{
            line-height: 20px;
            font-size: 16px;
        }
    }
 
    .qtyicon{
               width: 20px;
                height: 20px;
                padding: 0 10px 10px 10px;
           img{
                width: 20px;
                 height: 20px;
           }
    }
    .shopingList{
        .top{
            text-align: right;
            color: #8F8E94;
            height: 28px;
            padding: 6px 15px 0;
            background: #F2F2F2;
            img{
                width:16px;
                height: 16px;
            }
        }
    }
    .delIcon{
         width: 110px;
         float: right;
    }

    .itemBox{
        padding: 10px 10px 60px 20px;
        max-height: 320px;
        overflow: auto;
        background: #fff;
        clear: both;
        .itempack{
            height: 55px;
             margin-top: 5px;
            border-bottom: 1px solid #f2f2f2;
            p{
                height: 20px;
                line-height: 20px;
                color: #8F8E94;
                font-size: 12px;
            }
        }
        .item{
            display: flex;
            height: 30px;
            .name{
                width: 40%
            }
            .price{
                width: 20%
            }
            .qty{
                width: 40%
            }
        }
    }
    .empty{
        background: #fff;
        padding: 20px;
        color:#8F8E94;
        height:60px;
    }

</style>
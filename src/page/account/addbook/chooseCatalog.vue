<template>
    <div class="choose-panel">
        <div class="choose-top">
            <div class="c-back" @click="back">
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" aria-labelledby="circleArrowLeftIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="circleArrowLeftIconTitle">Arrow Left</title> <path d="M10.5 15l-3-3 3-3"/> <path d="M16.5 12H9"/> <path stroke-linecap="round" d="M7.5 12H9"/> <circle cx="12" cy="12" r="10"/> </svg>
            </div>
            <div class="top-content">
                <span class="c-outcome" @click="changeToIncome" :class="!inComeShow?'type-choose':''">支出</span>  
                <span class="c-income" @click="changeToIncome" :class="inComeShow?'type-choose':''">收入</span>   
            </div>
        </div>
        <div class="choose-content">
            <div class="svg-container" v-if="!inComeShow">
                <div @click="shownum('001')" class="svgItem" id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>餐饮</div>
                </div>
                <div @click="shownum('002')" class="svgItem"  id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>购物</div>
                </div>
                <div @click="shownum('003')" class="svgItem"  id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>日用</div>
                </div>
                <div @click="shownum('004')" class="svgItem"  id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>交通</div>
                </div>
            </div> 
            <!--收入类型-->
            <div class="svg-container" v-if="inComeShow">
                <div @click="shownum('006')" class="svgItem" id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>工资</div>
                </div>
                <div @click="shownum('007')" class="svgItem"  id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>兼职</div>
                </div>
                <div @click="shownum('007')" class="svgItem"  id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>理财</div>
                </div>
                <div @click="shownum('008')" class="svgItem"  id="bag">
                    <div class="svg-img">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                    </div>
                    <div>基金</div>
                </div>
            </div> 
        </div>
        <v-num :checkrow="checkRow" v-if="numShow" @closechild="closechild"></v-num>
    </div>
</template> 

<script>
import vNum from '../addbook/num';
export default {
    name:'chooseCatalog',
    data() {
        return {
            checkRow:{
                type:'1',
                catalog:'',
            },
            collapse:false,
            numShow:false,
            inComeShow:false
        }
    },
    components:{
        vNum
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    created(){

    },
    methods:{
        //退出登录
        logout(){
            this.$router.push('/login');
        },
        //关闭子窗口
        closechild(){
            this.numShow = false;
        },
        //显示数字框框
        shownum(catalog){
            this.checkRow.catalog = catalog;
            this.numShow = true;
        },
        //返回首页
        back(){
            this.$router.push('/home');
        },
        //切换成收入类型
        changeToIncome(){
            this.inComeShow = !this.inComeShow;
            if(this.inComeShow == true){
                this.checkRow.type="0";
            }else{
                this.checkRow.type="1";
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.choose-top{
    background-color: rgb(117, 194, 238);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 15%;
    .top-content{
        position: relative;
        text-align: center;
        .c-back{
            margin: 1rem 0 0 1rem;
        }
        .c-outcome{
            padding: 1rem;
        }
        .c-income{
            margin-left: 1rem;
            padding: 1rem;
        }
        .type-choose{
            border-bottom: 1px solid black;
        }
    }
}
.choose-content{
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 1rem;
    .svg-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .svgItem{
            display: inline-block;
            text-align: center;
            font-size: 0.6rem;
        }
        .svg-img{
            background-color: rgb(248, 248, 245);
            border-radius: 2rem;
        }
        .svg-img:hover{
            background-color: rgb(117, 194, 238);
        }
        
    }
}
</style>

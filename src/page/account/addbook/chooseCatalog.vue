<template>
    <div class="choose-panel">
        <div class="choose-top">
            <div class="c-back" @click="back">
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" aria-labelledby="circleArrowLeftIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="circleArrowLeftIconTitle">Arrow Left</title> <path d="M10.5 15l-3-3 3-3"/> <path d="M16.5 12H9"/> <path stroke-linecap="round" d="M7.5 12H9"/> <circle cx="12" cy="12" r="10"/> </svg>
            </div>
            <div class="top-content">
                <span class="c-income">收入</span>   
                <span class="c-outcome">支出</span>  
            </div>
        </div>
        <div class="choose-content">
            <div class="svg-container">
                <div @click="shownum" id="bag">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                </div>
                <div @click="shownum" id="bag">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                </div>
                <div @click="shownum" id="bag">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                </div>
                <div @click="shownum" id="bag">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="bagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="bagIconTitle">Bag</title> <rect width="14" height="12" x="5" y="7"/> <path d="M8 7a4 4 0 1 1 8 0"/> </svg>
                </div>
            </div> 
        </div>
        <v-num v-if="numShow"></v-num>
    </div>
</template> 

<script>
    import vNum from '../addbook/num';
    export default {
        data() {
            return {
                collapse:false,
                numShow:false
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
            shownum(){
                this.numShow = true;
            },
            back(){
                this.$router.push('/home');
            }
        }
    }
</script>

<style lang="scss" scoped>
.choose-top{
    background-color: yellow;
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
        .c-income{
            padding: 1rem;
            border-bottom: 1px solid black;
        }
        .c-outcome{
            margin-left: 1rem;
            padding: 1rem;
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
    }
}
</style>

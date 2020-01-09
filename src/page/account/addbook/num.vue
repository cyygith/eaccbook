<template>
    <div class="add-panel">
        <div class="cal-panel">
            <div class="momey-panel">
                <div class="money-mark">
                    <div class="m-mark">
                        备注：
                    </div>
                    <div class="m-content">
                        加都兑换货币12000卢比，汇率10.7:1
                    </div>
                    <div class="m-money">1231235.23</div>
                </div>
            </div>
            <div class="num-panel">
                <table class="num-table">
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>date</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>+</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>0</td>
                        <td>mis</td>
                        <td>finish</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collapse:false
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏,监听
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
        },
        methods:{
            //退出登录
            logout(){
                this.$router.push('/login');
            },
            // 侧边栏折叠
            collapseChage(){
                // this.collapse = !this.collapse;
                // bus.$emit('collapse', this.collapse);
            },
        }
    }
</script>

<style lang="scss" scoped>

.cal-panel{
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    height: 30%;
    background-color: rgba(195, 199, 198, 0.596);
    .momey-panel{
        height: 10%;
        padding: 0.5rem 0.2rem 0.4rem 0.2rem;
        .money-mark{
            display: flex;
            align-items: flex-start;
            justify-content:space-around;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            font-size: 0.8rem;
            .m-mark{
                width: 15%;
                white-space: nowrap;
            }
            .m-content{
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 55%;
                margin-right: 5%;
            }
            .m-money{
                width: 25%;
                white-space: nowrap;
                font-size: 0.9rem;
                font-weight: bold;
            }
        }
        .money-item{
            flex:1;
            display: flex;
            justify-content: end;
        }
    }
}
    /**数字键盘***/
    .num-panel{
        height: 80%;
    }
    .num-table{
        height: 100%;
        width: 100%;
    }
    td{
        text-align: center;
        width: 25%;
        border: 1px solid black;
    }
    td:hover{
        background-color: rgba(240, 236, 237, 0.582);
        color: black;
    }

</style>

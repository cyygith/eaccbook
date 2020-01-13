<template>
    <div class="register-panel">
        <div class="l-content">
            <div class="item-content">
                <span class="i-text">手机号</span>
                <span class="i-content">17700083790</span>
            </div>
            <div class="item-line"></div>
            <div class="item-content">
                <span class="i-text">密码</span>
                <span class="i-content">
                    888888
                </span>
            </div>
            <div class="item-line"></div>
        </div>
        <div class="l-button">
            <div class="c-button">注册</div>
        </div>
    </div>
</template>

<script>
    import bus from '../common/bus';
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
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
        }
    }
</script>

<style lang="scss" scoped>
.l-content{
    padding: 1rem;
    .item-content{
        width: 100%;
        position: relative;
        .i-text{
            display: inline-block;
            text-align: right;
            width: 20%;
            margin-right: 1rem;
        }
        .i-icon{
            position: absolute;
            right: 0;
            top: 0;
        }
    }
    .item-line{
        border-bottom: 1px solid black;
        margin: 1rem 0 1rem 0;
    }
}
.l-button{
    padding: 1rem;
    background-color: rgb(117, 194, 238);
    text-align: center;
}
</style>

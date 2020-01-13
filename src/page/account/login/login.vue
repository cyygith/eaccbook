<template>
    <div class="login-panel">
        <div class="l-content">
            <div class="item-content">
                <span class="i-text">手机号</span>
                <span class="i-content">
                    17700083790
                </span>
                <span class="i-icon">
                    <svg role="img"  xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="cancelIconTitle" stroke="grey" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="green"> <title id="cancelIconTitle">Cancel</title> <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"/> <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"/> </svg>
                </span>
            </div>
            <div class="item-line"></div>
            <div class="item-content">
                <span class="i-text">密码</span>
                <span class="i-content">
                    888888
                </span>
                <span class="i-icon">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="eyeClosedIconTitle" stroke="green" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="grey"> <title id="eyeClosedIconTitle">Hidden (closed eye)</title> <path d="M20 9C20 9 19.6797 9.66735 19 10.5144M12 14C10.392 14 9.04786 13.5878 7.94861 13M12 14C13.608 14 14.9521 13.5878 16.0514 13M12 14V17.5M4 9C4 9 4.35367 9.73682 5.10628 10.6448M7.94861 13L5 16M7.94861 13C6.6892 12.3266 5.75124 11.4228 5.10628 10.6448M16.0514 13L18.5 16M16.0514 13C17.3818 12.2887 18.3535 11.3202 19 10.5144M5.10628 10.6448L2 12M19 10.5144L22 12"/> </svg>
                </span>
            </div>
            <div class="item-line"></div>
        </div>
        <div class="l-button">
            <div class="c-button">登录</div>
        </div>
        <div class="l-fnction">
            <span class="i-findpwd">找回密码</span>
            <span class="i-register">注册</span>
        </div>
    </div>
</template>

<script>
import {commonApi} from "@/service/sys-api";
export default {
    data() {
        return {
            form:{
                username: '',
                password: '',
                rememberMe:false
            },
            collapse:false,
            rules:{
                username:[{required:true,message:'请输入电话号码',trigger:blur}],
                password:[{required:true,message:'请输入密码',trigger:blur}]
            },
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
        //登录
        login(){
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.loading = true;
                    let param = this.form;
                    commonApi.login(param).then((res)=>{
                        try{
                            if(res.code == "0"){
                                sessionStorage.setItem('access-token',res.data.token);
                                // sessionStorage.setItem('roles',JSON.stringify(res.data.roles));
                                sessionStorage.setItem('user',JSON.stringify(res.data.user));
                                this.$router.push('/home');
                            }else{
                                this.$message({message:res.msg,type:'error'})
                            }
                        }catch(err){
                            console.dir(err);
                            this.$alert('程序出现异常，请联系管理员处理','提示信息');
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });  
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
.l-fnction{
    margin: 1rem;
    position: relative;
    .i-register{
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>

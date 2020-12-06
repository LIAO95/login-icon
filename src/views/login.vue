<template>
  <div class="login_content">
      <div class="login-header">
           <img src="../assets/logo.png" alt="">
            <p>AI靶场后台管理</p>
      </div>

      <div class="login-con">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
                <el-form-item prop="username">
                    <el-input  
                        prefix-icon="el-icon-user-solid" 
                        type="username" size="mini" 
                        v-model="ruleForm.username"
                        placeholder="username"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input placeholder="password" prefix-icon="el-icon-goods" type="password" size="mini" v-model="ruleForm.pwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button 
                        type="primary" 
                        size="mini" 
                        style="width: 100%; background-image: linear-gradient(to right, #547ff0 , #46f0ed); border: none; border-radius: 20px"
                        @click="submitForm"
                     >Loging</el-button>
                </el-form-item>
            </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                username: 'admin',
                pwd: ''
            },

            rules: {
                username:  { required: true, message: '请输入用户名', trigger: 'blur' },
                pwd: { required: true, message: '请输入密码', trigger: 'blur' }
            }
        }
    },

    methods: {
        submitForm() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.$router.push('/')
                }
            });
        }
    }
}
</script>

<style scoped>

    .login_content {
        background: url('../assets/login_bg.png') no-repeat;
        width:100%;
        height:100%;
        background-size:100% 100%;

        position: relative;
    }

    .login-header {
        padding: 10px 18%;
        background: rgba(0, 0, 0, 0.5);

        display: flex;
        align-items: center;
    }

    .login-header img {
        width: 60px;
        margin-right: 10px;
    }

    .login-header p {
       font-size: 18px;
       color: #fff;
    }

    .login-con {
        width: 250px;
        padding: 40px 59px 20px;

        border-radius: 10px;
        background: #fff;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>

<style>
.el-input--mini .el-input__inner {
    border-radius: 20px;
}
.el-input__prefix .el-input__suffix {
    color: #06c9f7;
}
.el-input--mini .el-input__inner:focus{
   box-shadow: 0 0 12px 4px rgba( 0, 0, 0, 0.1);
}
</style>
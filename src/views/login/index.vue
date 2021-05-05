<template>
  <div class="main-bg">
    <div class="login-div">
      <div class="login">
        <div class="login-title">用户登录</div>
        <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input
              ref="username"
              v-model="loginForm.username"
              prefix-icon="el-icon-user-solid"
              placeholder="帐号"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              ref="password"
              prefix-icon="el-icon-lock"
              v-model="loginForm.password"
              placeholder="密码"
              name="password"
              type="password"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>
          <el-button class="login-btn" @click="submitForm('loginForm')">登录</el-button>
          <router-link to="register" class="register">立即注册</router-link>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入帐号密码', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', this.loginForm).then((res) => {
            if(res.code === 20000 ){
              this.$message({
                type: 'success',
                message: res.msg
              })
              this.$router.push({ path:'/' })
            }
          }).catch(() => {})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form-item{
  margin-bottom: 30px;
}
.main-bg {
  background: url("~@/assets/img/main-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 600px;
  margin-top: 60px;
  min-width: 1300px;
  width: 100%;

  .login-div {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
  }

  .login {
    position: absolute;
    right: 20px;
    background: #fff;
    width: 420px;
    height: 350px;
    border-radius: 8px;
    padding: 30px;
    box-sizing: border-box;

    .login-title{
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 40px;
    }

    .login-btn{
      width: 100%;
      color: #fff;
      background: #ff4466;
    }

    .register{
      font-size: 15px;
      color: #a2a2a2;
      padding: 10px 0;
      float: right
    }
  }
}

</style>
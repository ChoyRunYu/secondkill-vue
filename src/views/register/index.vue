<template>
  <div class="main-bg">
    <div class="register-div">
      <div class="register">
        <div class="register-title">用户注册</div>
        <el-form
          :model="registerForm"
          status-icon
          :rules="registerRules"
          ref="registerForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              ref="username"
              v-model="registerForm.username"
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
              v-model="registerForm.password"
              placeholder="密码"
              name="password"
              type="password"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>
          <el-form-item prop="rpwd">
            <el-input
              ref="rpwd"
              prefix-icon="el-icon-lock"
              v-model="registerForm.rpwd"
              placeholder="确认密码"
              name="rpwd"
              type="password"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>
          <el-button
            class="register-btn"
            @click="submitForm('registerForm')"
          >立即注册</el-button>
          <router-link
            to="login"
            class="login"
          >立即登录</router-link>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { checkUsername, register } from '@/api/user'

export default {
  data() {
    var validateRpwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validataUsername = (rule, value, callback) => {
      if(value === ""){
        callback(new Error("请输入用户名"))
      }else {
        this.checkUsernameApi(value, (data) => {
          if(!data.state){
            callback(new Error(data.msg))
          }else{
            callback()
          }
        })
      }
    }
    return {
      registerForm: {
        username: "",
        password: "",
        rpwd: ""
      },
      registerRules: {
        username: [{ validator: validataUsername, trigger: "blur" }],
        password: [
          { required: true, message: "请输入帐号密码", trigger: "blur" }
        ],
        rpwd: [
          { validator: validateRpwd, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          register(this.registerForm.username, this.registerForm.password).then(res => {
            if(res.code === 20000){
              this.$message({
                type: "success",
                message: res.msg
              });
              this.$router.push({ path: "/login" });
            }
          }).catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    checkUsernameApi(username, callback){
      checkUsername(username).then(res => {
        if(res.data === true){
          callback({state: true, msg: res.msg})
        }else{
          callback({state: false, msg: res.msg})
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.main-bg {
  background: url("~@/assets/img/main-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 600px;
  margin-top: 60px;
  min-width: 1300px;
  width: 100%;

  .register-div {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
  }

  .register {
    position: absolute;
    right: 20px;
    background: #fff;
    width: 420px;
    height: 370px;
    border-radius: 8px;
    padding: 30px;
    box-sizing: border-box;

    .register-title {
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .register-btn {
      width: 100%;
      color: #fff;
      background: #ff4466;
    }

    .login {
      font-size: 15px;
      color: #a2a2a2;
      padding: 10px 0;
      float: right;
    }
  }
}
</style>
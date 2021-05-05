<template>
  <div>
    <el-dialog
    title="登录"
    :visible.sync="isShow"
    width="25%"
    >
    <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="帐号" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="resetForm()">重置</el-button>
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>

export default {
  name: 'LoginDialog',
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
    }
  },
  mounted(){
  },
  methods: {
    /** 
     * 重置表单 
     */
    resetForm(){
      this.loginForm = {
        username: '',
        password: ''
      }
    },
    /** 
     * 登录按钮
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', this.loginForm).then((res) => {
            if(res.code === 20000 ){
              this.$message({
                type: 'success',
                message: res.msg
              })
              this.isShow = false
            }
          }).catch(() => {})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  computed: {
    isShow:  {
      get: function (){
        return this.$store.getters.isShowLoginDialog
      },
      set: function(value) {
        this.$store.commit('SET_ISSHOWLOGINDIALOG', value)
      }
    }
  }
}
</script>

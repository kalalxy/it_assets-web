<template>
  <div class="login"
       v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="box png">
      <div class="logo png"></div>
      <div class="input">
        <div class="log">
          <div class="name">
            <label>账户名称</label><input type="text" class="text" id="username" placeholder="账户名称"
                                      name="account">
          </div>
          <div class="pwd">
            <label>账户密码</label><input type="password" class="text" id="password" placeholder="账户密码"
                                      name="password">
            <input type="button" class="submit" tabindex="3" value="登 录" @click="checkUser()">
            <div class="check"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        loading: false
      }
    },
    mounted () {
    },
    methods: {
      checkUser () {
        let account = $('#username').val()
        let password = $('#password').val()
        if ((account == undefined) || (account == null) || (account.trim() == '')
          || (password == undefined) || (password == null) || (password.trim() == '')) {
          alert('账户名称或者密码不能为空！')
          return
        }
        let params = new URLSearchParams()
        let tmp = {}
        tmp['account'] = account
        tmp['password'] = password
        params.append('params', JSON.stringify(tmp))
        this.$axios.post('/service/index.html', params).then(res => {
          if (null != res.data && res.data.toString().trim() != '') {
            let acc = res.data.account
            let roleId = res.data.roleId
            // let enAcc =
            this.$router.push(`/main/frame/${acc}/${roleId}`)
          } else {
            alert('账号或密码错误！')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    padding: 1px 0 0 0;
    background: url(../assets/images/bg.png) center top #FFF;
    padding: 150px 0 0 0;
  }

  .login input.submit {
    border: none;
    font-weight: bold;
    color: #FFF;
    margin: 25px 0 0 150px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: #CCC 0px 0px 5px;
    -moz-box-shadow: #CCC 0px 0px 5px;
    box-shadow: #CCC 0px 0px 5px;
    background: #31b6e7;
    cursor: pointer;
  }

  .login input.submit:hover {
    background: #ff9229;
  }

  .login input.submit {
    padding: 6px 20px;
  }

  .login .box {
    position: relative;
    z-index: 100;
    margin: 0 auto;
    width: 700px;
    height: 1080px;
    background: url(../assets/images/login.png) center top no-repeat;
  }

  .login .log {
    position: relative;
    width: 370px;
    height: 260px;
    margin: 0 auto;
    padding: 90px 0 0 20px;
  }

  .login label {
    display: inline-block;
    width: 70px;
    text-align: right;
    padding-right: 20px;
    vertical-align: middle;
  }

  .login .name {
    padding: 10px 5px;
    font-size: 14px;
  }

  .login .pwd {
    padding: 10px 5px;
    font-size: 14px;
  }

  .login .alt {
    position: absolute;
    top: 43px;
    left: 260px;
    font-size: 20px;
  }

  .login .text {
    filter: alpha(opacity=80);
    -moz-opacity: 0.8;
    opacity: 0.8;
  }

  .login .copyright {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -40px;
    text-align: center;
    color: #AAA;
  }

  .login .air-balloon {
    position: absolute;
    top: -100px;
    left: -100px;
    z-index: 50;
  }

  .text {
    border: 1px solid #CCC;
    padding: 5px;
    background-color: #FCFCFC;
    line-height: 14px;
    width: 220px;
    font-size: 12px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: #CCC 0px 0px 5px;
    -moz-box-shadow: #CCC 0px 0px 5px;
    box-shadow: #CCC 0px 0px 5px;
    border: 1px solid #CCC;
    font-size: 12px;
  }

  .text:focus {
    border: 1px solid #31b6e7;
    background-color: #FFF;
    -webkit-box-shadow: #CCC 0px 0px 5px;
    -moz-box-shadow: #CCC 0px 0px 5px;
    box-shadow: #0178a4 0px 0px 5px;
  }

  .text:hover {
    background-color: #FFF;
  }
</style>

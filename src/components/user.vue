<template>
  <div class="page has-navbar" v-nav="{ title: '个人资料', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content">
      <div class="information">
        <div class="top">
          <div class="avatar">
            <img :src="imgUrl + 'images/avatar/'+ imgs" alt="">
          </div>
          <div class="info1">
            <div class="username">
              <span>用户名：</span><span class="username">{{username}}</span>
            </div>
            <div class="nickname">
              <span>昵称：</span><span class="nickname">{{nickname}}</span>
            </div>
            <div class="sex">
              <span>性别：</span><span class="sex">{{sex}}</span>
            </div>
            <div class="nums">
              <span>登陆次数：</span><span class="nums">{{nums}}</span>
            </div>
          </div>
        </div>
        <div class="bottom selfInfo">
          <div class="self">个人简介</div>
          <div class="content">
           {{selfIntroduction}}
          </div>
        </div>
      </div>
      <md-button class="button11 md-button button button-assertive button-block"  @click.native="LoginOut">退出登录</md-button>
    </div>
  </div>
</template>
<script>
  import Login from '@/api/login'
  import Cookie from '@/utils/auth'
  import getInfo from '@/api/userInfo'
  import Constants from '@/utils/constants'

  export default {
    name: 'User',
    data() {
      return {
        test: false,
        imgUrl: Constants.staticUrl,
        imgs: '',
        username:'',
        nickname:'',
        sex: '',
        selfIntroduction:'该用户太懒，什么都没有留下',
        nums:0
      }
    },
    methods: {
      back() {
        $router.back('/')
      },
      userInfo() {
        getInfo().then(res => {
          this.imgs = res.data.headImage
          this.username = res.data.username
          this.nickname =res.data.nickname
          if (res.data.gender === 0) {
            this.sex = '保密'
          } else if (res.data.gender === 1) {
            this.sex = '男'
          }else {
            this.sex = '女'
          }
          if (res.data.selfIntroduction !== null ) {
            this.selfIntroduction = res.data.selfIntroduction
          }
          this.nums = res.data.loginCount
        }).catch(error => console.log(error))
      },
      LoginOut() {
        $dialog.confirm({
          content: '亲，您确定要退出吗？',
          okText: '继续退出'
        }).then((res) => {
          if (res) {
            $loading.show('正在登出...');
            Login.logout().then(response => {
              $loading.hide();
              this.$store.commit("SET_LOGIN", false);
              Cookie.removeToken();
              $router.back('/');
            }).catch(error => {
              $loading.hide();
            });
          }
        });
      },
    },
    created(){
      this.userInfo()
    }
  }
</script>
<style>
  .navbar .navbar-container .bar.bar-header.bar-transparent {
    background: #235789;
  }
  .bar.bar-header.bar-transparent .title {
    color: #fff;
  }
</style>
<style scoped>
  .page.has-navbar .page-content {
    margin-top: 44px;
    padding: 0;
    background-color: #fff;
  }
  .information {
    overflow: hidden;
  }
  .top {
    padding: 5px;
    overflow: hidden;
  }
  .avatar {
    width: 100px;
    height: 120px;
    line-height: 120px;
    float: left;
    margin-left: 20px;
  }
  .avatar img {
    width: 100%;
    border-radius: 50%;
    background-color: #fc4c4c;
    vertical-align: middle;
  }
  .info1 {
    margin-left: 40px;
    float: left;
  }
  .info1 div {
    height: 30px;
    line-height: 30px;
  }
  .info1 div span:first-child {
    width: 80px;
    display: inline-block;
    text-align: left;
    float: left;
  }
  .info1 div span:nth-child(2) {
    display: inline-block;
    width: 120px;
    float: left;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .selfInfo {
    padding: 5px;
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
  }
  .content {
    min-height: 50px;
    border: 1px solid #cccccc;
  }

  .button11 {
    margin: 20px 25px;
  }
</style>

<template>
  <div class="home-context">
    <div class="page has-navbar" v-nav="{hideNavbar: true}">
      <von-header theme="light" :fixed="true">
        <button slot="left" class="button button-icon" @click="toggleSidebar">
          <span><i class="icon ion-navicon"/></span>
        </button>
        <span slot="title">客拉客-聊天室</span>
        <button v-if="!isLogin" slot="right" class="button button-icon" @click="onMenu">
          <span><i class="icon ion-ios-contact"/></span>
        </button>
        <div v-else slot="right" class="top-avatar">
          <div class="user-top-avatar" :style="`background:url(`+imgUrl+`images/avatar/`+userInfo.headimage+`);background-size:cover;background-position:center;`" @click="onMenu"></div>
        </div>
    </von-header>
    <tabs fixed :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
    <div ref="messageScroll" class="page-content moveMarginBottom" @click="closeSheet" :style="`margin-bottom:`+contentMargin+`px;`">
      <div class="messages" v-show="tabIndex==0">
        <MessageItem v-for="(message,index) in messageList" :key="index" :item="message"></MessageItem>
      </div>
      <component v-show="tabIndex>0" v-bind:is="targetComponent"></component>
    </div>
    <div v-if="redBagFlag" class="redbag-container">
      <div class="red-bag">
        <h1 @click="closeWindow">x</h1>
        <div class="role-1">
          <von-input
          v-model="redForm.moneyMount"
          placeholder="请输入红包金额"
          type="tel"
          ></von-input>
        </div>
        <div class="role-2">
          <von-input
          v-model="redForm.num"
          placeholder="请输入红包个数"
          type="tel"
          ></von-input>
        </div>
        <div class="role-3">
          <p>账户余额：</p>
          <p>{{balance}}</p>
        </div>
        <div class="role-3">
            <md-button @click.native.prevent="redBagSubmit()" class="button button-assertive">
              发红包
            </md-button>
        </div>
      </div>
    </div>

    <div v-if="redStd === '1'" class="redbag-container">
      <div class="new-red-bag">
        <h1 @click="closeShow1">x</h1>
        <span>恭喜发财，大吉大利</span>
        <div @click="openRedSubmit" class="btn">
          <p>马上抢</p>
        </div>
      </div>
    </div>

    <div v-if="redStd === '3'" class="redbag-container">
      <div class="new-red-bag">
        <h1 @click="closeShow1">x</h1>
        <span>来晚了，红包已经被抢完了</span>
      </div>
    </div>

    <div v-if="redStd === '2'" class="redbag-container">
      <div class="new-red-bag">
        <h1 @click="closeShow1">x</h1>
        <div class="avatar">
          <img :src="imgUrl+'images/avatar/'+redData.redpackInfo.sendeHeadImage" alt="">
        </div>
        <div class="avatar">
          <p>{{redData.redpackInfo.senderName}}</p>
        </div>
        <div class="avatar">
          <span>{{'恭喜您抢到了'+grabMoney+'元'}}</span>
        </div>
        <div @click.prevent="openAll" style="margin-top: 75px;" class="avatar">
          <p style="color: #fa9d3b;">看看大家的手气>></p>
        </div>
      </div>
    </div>

    <div v-if="redStd === '4'" class="redbag-container">
      <div class="red-bag">
        <h1 @click="closeShow1">x</h1>
        <div class="avatar">
          <img :src="imgUrl+'images/avatar/'+redData.redpackInfo.sendeHeadImage" alt="">
        </div>
        <div class="avatar">
          <h2>{{redData.redpackInfo.name}}</h2>
        </div>
        <div class="avatar">
          <h3>{{redData.redpackInfo.amount}}</h3><h2>元</h2>
        </div>
        <div class="avatar" style="background: #e5e5e5; border-bottom: 1px solid #ccc; border-top: 1px solid #ccc; justify-content: flex-start">
          <h2 style="margin-left: 15px">已领取{{redData.redpackInfo.receivedNum}}/{{redData.redpackInfo.num}}个</h2>
        </div>
        <div class="user-can">
          <ul>
            <li v-for="(item,index) in redRecord" :key="index">
              <div class="user-imgs">
               			<img :src="imgUrl+'images/avatar/'+item.avatar">
              </div>
              <div class="list-right">
                <div class="list-right-top">
									<div class="user-name">{{item.nickname}}</div>
									<div class="user-money">{{item.money}}元</div>
                </div>
                	<div class="user-time">{{item.time|dateFormat('yyyy-MM-dd hh:mm:ss')}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-show="messageTabbar" class="tabbar moveBottom visible fixed" :style="`bottom:`+tabbarBottom+`px;`">
      <div class="message-bar">
        <a class="link push" @click="pushClick"><i class='icon ion-android-add-circle'/></a>
        <a class="link smile" @click="smileClick"><i class="icon ion-happy"></i></a>
        <div class="messagebar-area">
          <label>
            <textarea ref="textarea" placeholder="请输入信息" @focus="closeSheet" class="resizable" v-model="message"></textarea>
          </label>
        </div>
        <a class="link send" @click="sendClick"><svg-icon icon-class="ios-arrow-dropup-circle"></svg-icon></a>
      </div>
    </div>
    <transition name="moveHeight">
    <div class="smile-box" v-show="smileShow">
      <Smile @defaultFaceChange="defaultFaceChange"></Smile>
    </div>
  </transition>
    <transition name="moveHeight">
      <div class="messagebar-sheet" v-show="sheetShow">
        <ul>
          <li @click.prevent="sendred">
            <div class="sheet-top">
              <svg-icon icon-class="redpack2"></svg-icon>
            </div>

            <div class="sheet-text">红包</div>
          </li>
          <li style="position: relative" @click="qiandao">
            <div class="sheet-top">
              <svg-icon icon-class="signin2"></svg-icon>
            </div>
            <div class="sheet-text">签到</div>
            <img v-if="isSignin" width="30" height="30" style="position: absolute; top: 10px; left: 10px" :src="imgUrl+'images/ok.png'" alt="">
          </li>
          <li>
            <Upload 
							accept="image/*"
							name="image"
							:max-size="2048"
							:before-upload="uploadImg" 
							:headers="{token: userToken}"
							:on-success="uploadImgSuccess"
							:on-error="uploadImgError"
							:on-exceeded-size="uploadImgOverflow"
							:show-upload-list="false"
							:format="['jpg', 'jpeg', 'png', 'gif']"
							:multiple="false" action="http://api.8582333.com/api/upload">
						</Upload>
             <template>
                <div class="sheet-top">
                  <img width="30" height="30" src="../assets/images/imgicon.png" alt="">
                </div>
                <div class="sheet-text">图片</div>
              </template>
          </li>
        </ul>
      </div>
    </transition>
  </div>
    <div ref="OnlineUserTemplate" style="display: none;">
      <div class="user-list-box">
        <div class="item item-divider pb0">
          在线人数{{'('+UserCount+')'}}
        </div>
        <div class="item item-divider" v-if="manageList && manageList.length > 0">
          在线管理/客服
        </div>
        <item class="item-icon-left right" v-for="(items, index) in manageList" :key="index">
          客拉客客服➟小雪
          <div class="user-item-avatar" :style="`background:url(`+imgUrl+`images/avatar/40.gif);background-size:cover;background-position:center;`"></div>
          <div class="user-item-grade">
            <img :src="imgUrl+'images/role/1.png'">
          </div>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <div class="item item-divider">
          在线会员
        </div>
        <item class="item-icon-left right">
          今晚打老虎
          <div class="user-item-avatar" :style="'background:url('+imgUrl+'images/avatar/40.gif);background-size:cover;background-position:center;'"></div>
          <div class="user-item-grade">
            <img :src="imgUrl+'images/grade/1.png'">
          </div>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-left right">
          今晚打老虎
          <div class="user-item-avatar" :style="'background:url('+imgUrl+'images/avatar/40.gif);background-size:cover;background-position:center;'"></div>
          <div class="user-item-grade">
            <img :src="imgUrl+'images/grade/1.png'">
          </div>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
      </div>
  </div>
  <LiveModal ref="loginModal" title="欢迎登录" theme="default">
    <div class="page-content padding padding-top login-context">
      <von-input type="text" v-model="loginForm.username" placeholder="用户名/手机号" label="会员账号"></von-input>
        <von-input type="password" v-model="loginForm.password" placeholder="登录密码" label="登录密码" style="margin-bottom: 5px;"></von-input>
        <div class="item item-divider">
          <a :href="chatUrl" target="_blank" class="red">忘记密码？</a>
        </div>
        <div class="padding">
          <button class="button button-positive button-block" @click="loginClick">确认登录</button>
        </div>
        <div class="item item-divider">
          <a :href="chatUrl" target="_blank">没有账号，立即注册！</a>
        </div>
    </div>
  </LiveModal>


  </div>
</template>

<script>
import MessageItem from '@/components/messageItem.vue'
import Smile from '@/components/smile.vue'
import Customer from '@/components/customer.vue'
import Bet from '@/components/bet.vue'
import Live from '@/components/live.vue'
import Lottery from '@/components/lottery.vue'
import Constants from '@/utils/constants'
import Login from '@/api/login'
import Red from '@/api/redbag'
import SigninApi from '@/api/signin'
import User from '@/api/user'
import {Upload} from 'iview'

import Util from '@/utils/util'
import Cookie from '@/utils/auth'
import md5 from '@/utils/md5Utils'
import '@/assets/css/home.less'
import '@/assets/css/redbag.less'


export default {
  name: 'Home',
  components:{
    MessageItem,
    Smile,
    Customer,
    Bet,
    Live,
    Lottery,
    Upload
  },
  data () {
    return {
      chatUrl:Constants.chatUrl,
      imgUrl:Constants.staticUrl,
      tabs:[
          "聊天",
          "开奖",
          "直播",
          "投注",
          "客服"
      ],
      tabIndex:0,
      targetComponent:'',
      menuButtonText:'',
      message:'',
      sheetShow:false,
      smileShow:false,
      sheetHeight:90,
      tabbarBottom:0,
      contentMargin:48,
      loginLoading: false,
      isLogin:false,
      messageTabbar:true,
      isScroll:true,
      userInfo:{},
      loginForm:{
        username:'',
        password:''
      },
      messageList:[],
      isSendMessage:false,
      redBagFlag: false,
      balance: '0.00',
      grabMoney: '0',
      redForm: {
        moneyMount: '',
        num: ''
      },
      redId: '',
      redBagStutas: '',
      redData:{
					redpackInfo:{}
      },
      redRecord:[],
      isSignin: Boolean,
      manageList: [],
      UserCount: 0,
      uploadImgToken: this.$store.state.token,
    }
  },
  watch: {
    redStd(data) {
      if(data === '2') {
        Red.getDetail({
          redpacketId: this.$store.state.redBagId
        }).then(
          res => {
            this.redData = res.data;
          }
        )
      }
    }
  },

  computed: {
    redStd() {
      return this.$store.state.redBagStutas
    },
    userToken() {
      return this.$store.state.token
    }
  },
  created() {
    this.getUserList();
  },
  mounted(){
    var that = this;
    this.isQiandao();

    //显示登陆框事件
    this.$root.eventHub.$on("showLoginEvent",item=>{
      that.$refs.loginModal.show();
    });
    //接收到公共消息事件
    this.$root.eventHub.$on("ReceiveMessageEvent",item=>{
        //接收消息回调
        that.messageList.push(item);
        if(that.isScroll){
            setTimeout(()=>{
              that.scrollToBottom();
            },200);
        }
    });
    //发送消息完成事件发布
    this.$root.eventHub.$on("sendMessageCompleteEvent",item=>{
      that.message = null;
      that.isSendMessage = false;
    });
    this.$nextTick(()=> {
      this.getUserInfo();
      this.scrollToBottom();
    });
  },
  methods: {
    uploadImgOverflow(err) {
        this.showPopup(`图片超过限定大小！`);		
        return false		      
    },
		uploadImgError(err) {
        this.showPopup(`上传图片出错! ${err}`);				
		},
    uploadImgSuccess(callbackData) {
        console.log(callbackData)
				if(callbackData.code !== 0) {
          this.showPopup('上传图片出错！');
					return false
				} else {
					//todo 
					let img = callbackData.url ; //+ '?imageView2/2/w/340'
					this.imgUri = img;
					var jsonMsg = {
						type: 'message',
						mtype: 'user',
						fromuserid: this.userInfo.userid,
						fromnickname: this.userInfo.nickname,
						fromuserheadimage: this.userInfo.headimage,
						fromuseruserdegree: this.userInfo.userdegree,
						fromuseruserflag: this.userInfo.userflag,
						touserid: '',
						tousernickname: '',
						content: {
							id: 1,
							msg: img
						}
					};
					if(this.userInfo.userflag == 2) {//管理员
						jsonMsg.mtype = 'manage';
					}
					this.$root.sendToAll(jsonMsg);
				}
			},
    uploadImg(){
      var grade = this.$store.state.userInfo.userdegree;
      var flag = this.$store.state.userInfo.userflag;
      if(flag == 1){
        if( grade < 3){
          $toast.show(`您没有上传图片的权限！`, 1500);
          return false;
        }
      }
      return true; 	
    },
    randerList() {
      if(!Util.isNull(this.$root.sidebar)){
        console.log('-sidebar销毁-->');
        this.$root.sidebar = null;
        $sidebar.destroy();
      }
      var template = this.$refs.OnlineUserTemplate.innerHTML;
      if(Util.isNull(this.$root.sidebar)) {
        console.log('-sidebar创建-->');
        this.$root.sidebar = $sidebar.fromTemplate(template, {position: 'left'})
      }
    },
    getUserList(){//获取用户列表
				var that = this;
				User.getList().then(response =>{
					const data = response.data;
					var temp = [];
					var manaeeTemp = [];
					data.forEach(item =>{
						//debugger
						if(item.user_id !== that.userInfo.userid && item.user_flag == 1){
							const obj = {
								userid:item.user_id,
								user_degree: item.user_degree,
								nickname:item.nickname,
								grade:Util.isNull(item.user_degree) ? 0 : item.user_degree,
								avatar:(item.head_image == 0 || Util.isNull(item.head_image)) ? 'default.gif' :item.head_image,
								sessionid:item.sessionid
							};
							var isRepeat = true;
							temp.forEach(tempItem=> {
								if(tempItem.userid == item.user_id){
									isRepeat = false;
								}
							});
							if(isRepeat){
								temp.push(obj);
							}

						}else{
							const obj = {
								userid:item.user_id,
								nickname:item.nickname,
								flag:item.user_flag,
								avatar:(item.head_image == 0 || Util.isNull(item.head_image)) ? 'default.gif' :item.head_image
							};
							var isRepeat = true;
							manaeeTemp.forEach(tempItem=> {
								if(tempItem.userid == item.user_id){
									isRepeat = false;
								}
							});
							if(isRepeat){
								manaeeTemp.push(obj);
							}
						}
					});
					that.OnLineUserList = temp;
					that.tempOnLineUserList = temp;
					let num = 0;
					for(let j=0; j<that.OnLineUserList.length; j++) {
						if(that.OnLineUserList[j].user_degree > 0) {
							num++
						}
					}
          this.UserCount = num;

				});
			},
    sendGift() {
      $toast.show('敬请期待', 1500);
    },
    qiandao() {
      if(!this.$store.state.isLogin) {
        this.showPopup('亲，请先登录哦！');
        return false
      }
      if(this.isSignin) {
        this.showPopup('今日已经签到过了！');
        return false
      }
      SigninApi.checkIn().then(
        res => {
          this.isSignin = true;
          $toast.show(`签到成功，获得${res.data.gold}金币`, 1500);
        }
      )
    },
    isQiandao() {
				SigninApi.checkSigin().then(response =>{
					let data = response.data;
					this.isSignin = data.isqiandao == 1 ? true : false;
				}).catch(error =>{
          //$toast.show(error.message || error.msg, 1500);
        });
    },
    openAll(){//查看大家手气
      this.redRecord = [];
      this.redData.packList.forEach(item =>{
        var record = {
          avatar:item.receiverHeadImage,
          nickname:item.receiverName,
          money:item.money,
          time:item.receiveTime
        };
        this.redRecord.push(record);
      });
      this.$store.commit('UPDATE_STD', '4')
      // this.grabRedModal = false;//关闭红包窗口
      // this.redInfoModal = true;//显示红包记录窗口
      // this.redRecordType = 1;//显示抢红包全部记录
    },
    closeShow1() {
      this.$store.commit('UPDATE_STD', '')
    },
    getRedId(data) {
      console.log(data +'methods')
    },
  	openRedSubmit() {
      var that = this;
      let id = this.$store.state.redBagId;
      Red.grab(id).then(response =>{
        let data = response.data;
        console.log(data)
        that.redData = data;
        this.$store.commit('UPDATE_STD', '2');
        // that.grabRedModal = true;
        // if(data.status === 3){ //已抢完
        // 	that.grabIn = 2;
        // }else if(data.status === 2){//已领取
        // 	//已领取显示抢红包记录页面
        // 	that.redRecordType = 1;
        // 	that.openAll();
        // }else if(data.status === 1){


        // }
        // that.grabIn = 3;
        that.grabMoney = data.receivedRedpack.money;
        // that.grabLoading = false;

      })
    },
    closeWindow() {
      for(let i in this.redForm) {
        this.redForm[i] = ''
      }
      this.redBagFlag = false
    },
    redBagSubmit() {
      if(Util.isNull(this.redForm.moneyMount)) {
        this.showPopup('红包金额不能为空！');
        return false
      }
      if(Util.isNull(this.redForm.num)) {
        this.showPopup('红包个数不能为空!');
        return false
      }
      if(!Util.isNumber(Number(this.redForm.moneyMount))) {
        this.showPopup('请输入正确的红包金额!');
        return false
      }
      if(!Util.isNumber(Number(this.redForm.num))||Number(this.redForm.num<=0)) {
        this.showPopup('请输入正确的红包个数!');
        return false
      }
      if(this.redForm.moneyMount<5) {
        this.showPopup('金额必须大于5元!');
        return false
      }
      if(this.redForm.moneyMount>this.balance) {
        this.showPopup('红包金额不能大于账户余额!')
      }
      var params = {
					num:this.redForm.num,
					amout:this.redForm.moneyMount,
					remarks: '恭喜发财,大吉大利'
				}
				Red.send(params).then(response =>{
					// this.sendRedLoading = false;
          // this.sendRedModal = false;
          this.redBagFlag = false;
				}).catch(error =>{
					// this.sendRedLoading = false;
				});
    },
    getBalance() {
      Red.getBalance().then(
        res => {
          this.balance = res.data.money;
        }
      )
    },
    sendred() {
      this.sheetShow = !this.sheetShow;
        if(this.sheetShow){
          this.tabbarBottom = this.sheetHeight;
          this.contentMargin += this.sheetHeight;
        }else{
          this.tabbarBottom = 0;
          this.contentMargin -= this.sheetHeight;
        }
      this.tabbarBottom = 0;
      if(!this.$store.state.isLogin) {
        this.showPopup('需要登录才能使用该功能哦');
        return false
      }
      this.getBalance();
      this.redBagFlag = true;
    },
    showPopup(data) {
      let options = {
        effect: 'scale',
        title: '温馨提示',
        showClose: true,
        buttons: [
          {text: '确定'},
        ]
      }
      let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">'+data+'</p>', options)

      popup.show().then((buttonIndex) => {
        console.log(buttonIndex)
      })
    },
    toggleSidebar() {
      this.randerList();
      this.$root.sidebar.toggle()
    },
    onMenu(){
      if(this.isLogin){
        this.$router.forward('/user')
      }else{
        this.$refs.loginModal.show();
      }
    },
    pushClick(){
        this.smileShow = false;
        this.sheetShow = !this.sheetShow;
        if(this.sheetShow){
          this.tabbarBottom = this.sheetHeight;
          this.contentMargin += this.sheetHeight;
        }else{
          this.tabbarBottom = 0;
          this.contentMargin -= this.sheetHeight;
        }
    },
    closeSheet(){
      if(this.sheetShow){
        this.sheetShow = false;
        this.tabbarBottom = 0;
        this.contentMargin -= this.sheetHeight;
      }
      this.smileShow = false;
    },
    sendClick(){
      if(!this.$root.isSocketConnect){
          $toast.show('网络异常与服务器连接已断开。', 1500);
          return;
      }
      let text = this.message.replace(/&nbsp;/ig,'').trim();
      if(Util.isNull(text)) {
        $toast.show('不能发送空白消息。', 1500);
        return
      }
      var grade = this.$store.state.userInfo.userdegree;
      var flag = this.$store.state.userInfo.userflag;
      if(flag == 1){
        if( grade === 1 || grade === 0){
          $toast.show('没有发言权限！', 1500);
          return;
        }
      }
      if(this.isSendMessage){
        return;
      }
      this.isSendMessage = true;
      var jsonMsg = {
          type:'message',
          mtype:'user',
          fromuserid:this.userInfo.userid,
          fromnickname:this.userInfo.nickname,
          fromuserheadimage:this.userInfo.headimage,
          fromuseruserdegree:this.userInfo.userdegree,
          fromuseruserflag:this.userInfo.userflag,
          touserid:'',
          tousernickname:'',
          senttype:'received',
          content:{
            id:0,
            msg:this.message
          }
        };
        if(this.userInfo.userflag == 2) {//管理员
          jsonMsg.mtype = 'manage';
        }
        this.$root.sendToAll(jsonMsg);
    },
    smileClick(){
      if(this.sheetShow){
        this.sheetShow = false;
        this.tabbarBottom = 0;
        this.contentMargin -= this.sheetHeight;
      }
      this.smileShow = !this.smileShow;
    },
    onTabClick(index){
      this.tabIndex = index;

      if(index == 0){//表示选择了聊天
        this.contentMargin = 48;
        this.messageTabbar = true;
      }else{
        this.contentMargin = 0;       //将page-context div得margin-bottom设置0px;
        this.messageTabbar = false;   //隐藏聊天栏
        if(index == 1){
          this.targetComponent = 'Lottery';
        }else if(index == 2){
          this.targetComponent = 'Live';
        }else if(index == 3){
          this.targetComponent = 'Bet';
        }else if(index == 4){
          this.targetComponent = 'Customer';
        }

      }
    },
    defaultFaceChange(item){
      if(Util.isNull(this.message)) {
        this.message = ''
      }
      this.message += item;
    },
    loginClick(){
      var that = this;
      if(this.loginLoading){
        return;
      }

      if(!this.loginForm.username.trim()){
        $dialog.alert({
          content: '请输入您的会员账号',
          okTheme: 'positive',
          effect: 'slide'
        }).then(() => {
          console.log('alert hide.')
        })
        return;
      }
      if(!this.loginForm.password.trim()){
        $dialog.alert({
          content: '请输入登录密码',
          okTheme: 'positive',
          effect: 'slide'
        }).then(() => {
          console.log('alert hide.')
        })
        return;
      }
      $loading.show('正在登录...');
      this.loginLoading = true;
      Login.loginUser(this.loginForm).then(response =>{
          const data = response.data;
          that.loginLoading = false;
          $loading.hide();
          that.isLogin = Constants.isLogin = true;
          Cookie.setToken(data.token);
          const userdata = {
            userid:data.user.userId,
            username: data.user.username,
            nickname: data.user.nickname,
            userflag:data.user.userFlag,
            headimage:Util.isNull(data.user.headImage)?'default.gif':data.user.headImage,
            userdegree:data.user.userDegree,
            gender: data.user.gender,
            loginCount: data.user.loginCount,
            createTime: data.user.createTime,
            userFlag: data.user.userFlag,
            selfIntroduction: data.user.selfIntroduction,
            gold: data.user.gold,
            platformAccount: data.user.platformAccount,
          };
          that.userInfo = userdata;
          if(that.$store){
            that.$store.commit("SET_USER_INFO",userdata);
            that.$store.commit("SET_TOKEN",data.token);
            that.$store.commit("SET_LOGIN",true);
          }
          this.$refs.loginModal.hide();
      }).catch(error =>{
          that.loginLoading = false;
          $loading.hide();
      });
    },
    getUserInfo(){
      var that = this;
        Login.getInfo().then(response =>{
          const data = response.data;
          this.isLogin = Constants.isLogin = true;
            const userdata = {
              userid:data.userId,
              username: data.username,
              nickname: data.nickname,
              userflag:data.userFlag,
              headimage:Util.isNull(data.headImage)?'default.gif':data.headImage,
              userdegree:data.userDegree,
              gender: data.gender,
              loginCount: data.loginCount,
              createTime: data.createTime,
              userFlag: data.userFlag,
              selfIntroduction: data.selfIntroduction,
              gold: data.gold,
              platformAccount: data.platformAccount,
          }
          that.userInfo = userdata;
          if(that.$store){
              that.$store.commit("SET_USER_INFO",userdata);
              that.$store.commit("SET_LOGIN",true);
          }
          that.$root.InitSocket();
        }).catch(error =>{
          that.isLogin = Constants.isLogin = false;
          var rname = md5.getMd5();
          const userdata = {
            userid:rname,
            nickname:'游客'+rname,
              userflag:1,
              headimage:'default.gif',
              userdegree:0
          }
          that.userInfo = userdata;
          if(that.$store){
            that.$store.commit("SET_USER_INFO",userdata);
            that.$store.commit("SET_LOGIN",false);
          }
          that.$root.InitSocket();
        });
    },
    scrollToBottom(){
      var div = this.$refs.messageScroll;
      if(div && div.scrollHeight){
        div.scrollTop = div.scrollHeight;
      }

    }
  },
  beforeDestroy(){
    this.isSignin = false
  }
}
</script>
<style>
  .bar.bar-header {
    background: #235789;
  }
  .bar.bar-light .title{
    color: #fff;
  }
  .button .icon {
    color: #ffffff;
  }
  
  .von-input-wrapper .von-input {
    margin: 0;
  }
  .modal .bar.bar-header h1.title {
    color: #fff;
  }
.bar .title+.button:last-child {
  color: #fff;
}
.ivu-upload {
  width: 50px;
  height: 70px;
  position: absolute;
  opacity: 0;
}
.ivu-upload-input {
  
}
</style>

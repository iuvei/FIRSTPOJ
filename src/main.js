// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Vonic from 'vonic'
import sess from './sess'
import Stomp from 'stompjs'
// Import Routes
import Routes from './routes.js'
import VueFilter from '@/utils/vueFilter.js'
import Store from '@/utils/vuexStore'
import '@/icons' // icon
import '@/assets/css/app.less'
import LiveModal from '@/components/Modal.vue'
import Emoji from '@/utils/dealemoji.js'
import emojidata from '@/assets/js/emojidata.js'

Vue.component('LiveModal', LiveModal);
Vue.use(Vuex)
console.log(Vuex)
for(let key in VueFilter){
  Vue.filter(key,VueFilter[key]);
}
const store = new Vuex.Store(Store);
Vue.config.productionTip = false
var data = {
	eventHub:new Vue(),
	isSocketConnect:false,
	sidebar: undefined,
	stompClient:null,
  tx:null
};
var methods = {
  //初始化webSocket连接
	InitSocket(){
		var headers = {
          user_id:store.state.userInfo.userid,
          token:store.state.token,
          fromnickname:store.state.userInfo.nickname,
          user_flag:store.state.userInfo.userflag,
          head_image:store.state.userInfo.headimage,
          user_degree:store.state.userInfo.userdegree,
          client:'H5'
      }
      var that = this;
      //连接websocket后端服务器
      this.stompClient = Stomp.client(process.env.SOCKET_ADDRESS);
      this.stompClient.connect(headers, frame=>{
          this.isSocketConnect = true;
          //广播
          this.stompClient.subscribe('/topic/public', greeting=>{
            console.log('广播--->'+greeting.body);
            let news = JSON.parse(greeting.body);
            if(news.type === 'message'&&news.mtype === 'user') {
              if(news.content.id === 1) {
                news.content.msg = 'http://' + news.content.msg + '?imageView2/2/w/340'
              }
              let firstDeal = Emoji(news.content.msg);
              if(typeof firstDeal !== 'string') {
                
                let emojiMsg = '';
                for(let i=0;i<firstDeal.length;i++) {
                  let m = emojidata.allEmoji[firstDeal[i]]?'<img style="width: 24px" src="' + emojidata.allEmoji[firstDeal[i]] + '">':firstDeal[i];
                  emojiMsg += m;
                }
                news.content.msg = emojiMsg;
              }
            }
            that.receiveMessage(news);
          });
          this.stompClient.subscribe('/user/' + store.state.userInfo.userid + '/message',function(greeting){
            console.log('个人'+greeting.body);
          });
      },error=>{
        this.isSocketConnect = false;
      });
	},
  disconnect(){//断开连接
    if(this.stompClient !== null){
      this.stompClient.disconnect();
    }
  },
  sendToAll(message){
    this.tx = this.stompClient.begin();
    this.stompClient.send("/sendToAll", {transaction: this.tx.id,token:store.state.token}, JSON.stringify(message));
    this.tx.commit();
    this.eventHub.$emit("sendMessageCompleteEvent");
  },
  receiveMessage(msg){//公共消息处理
    if(msg.type === 'onconnect'){//连接通知
    }else if(msg.type === 'disconnect'){//下线通知
    }else if(msg.type === 'message'){//发送消息
      var msgObj = {
          userid:msg.fromuserid,
          nickname:msg.fromnickname,
          type:msg.type,
          mtype:msg.mtype,
          avatar:msg.fromuserheadimage,
          time:msg.msgtime,
          grade:msg.fromuseruserdegree,
          flag:msg.fromuseruserflag,
          senttype:'received'
      };
      if(msg.mtype === 'user'){//普通用户发送消息
        msgObj.context = msg.content.msg;
        this.eventHub.$emit("ReceiveMessageEvent",msgObj);
      }else if(msg.mtype === 'system'){
        msgObj.context = msg.content.msg;
        this.eventHub.$emit("ReceiveMessageEvent",msgObj);
      }else if(msg.mtype === 'manage'){
        msgObj.context = msg.content.msg;
        this.eventHub.$emit("ReceiveMessageEvent",msgObj);
      }else if(msg.mtype === 'redpacket'){
        msgObj.context = msg.content;
        this.eventHub.$emit("ReceiveMessageEvent",msgObj);
      }
    }else if(msg.type === 'red'){//抢红包消息
      var redobj = {
        nickname:msg.fromnickname,
        type:msg.type,
        grabnickname:msg.tousernickname,
        context:msg.content.amount
      };
      this.eventHub.$emit("ReceiveMessageEvent",redobj);
    }
  }
};
Vonic.app.setConfig('data', data);
Vonic.app.setConfig('methods', methods);
//需要登录才可以访问得路由地址
const loginRoutes = [
    '/user'
  ]
const beforeEach = (toRoute, fromRoute, next) =>{
	const to = toRoute.path;
  	const from = fromRoute.path;
  	const scrollTop = Vonic.app.pageContentScrollTop();
  	//console.log('to=>'+to+' from=>'+from);
  	//debugger
  	if(to && loginRoutes.indexOf(to) > -1){
  		if(!store.state.isLogin){//没有登录
  			next({ path: '/' });
  		}else{
  			next();
  		}
  	}else{
  		next();
  	}
  	
};
const afterEach = (toRoute, fromRoute,next) =>{
	
};
Vonic.app.setConfig('beforeEach', beforeEach);
Vonic.app.setConfig('afterEach',afterEach);
Vue.use(Vonic.app,{
	routes: Routes,
	store:store,
	pushMehod: 'push',
  	pageTransition: 'ios'
});
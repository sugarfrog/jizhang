
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/login/forget","pages/login/register","pages/index/index","pages/rili/rili","pages/record/record","pages/tushi/tushi","components/tarbar/tarbar","components/card-chart/card-chart","pages/modalpop/modalpop","pages/charge/charge","pages/second/second"],"window":{"navigationBarBackgroundColor":"#27424a"},"tabBar":{"borderStyle":"#e8e8e8","iconWidth":"25px","height":"55px","backgroundColor":"#27424a","fontSize":"10px","color":"#ffffff","selectedColor":"#ffffff","midButton":{"width":"76px","height":"114px","iconPath":"static/tabs/add.png","iconWidth":"105px","text":"记一笔"},"list":[{"text":"账单","pagePath":"pages/index/index","iconPath":"static/tabs/zhangdan.png","selectedIconPath":"static/tabs/zhangdan-active.png"},{"text":"报表","pagePath":"pages/record/record","iconPath":"static/tabs/baobiao.png","selectedIconPath":"static/tabs/baobiao-active.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"jizhang1.0.0","compilerVersion":"3.6.17","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/forget","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/register","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","subNVues":[{"id":"select","path":"pages/index/subNuve/popup","type":"popup","style":{"position":"dock","bottom":"85px","width":"200rpx","height":"100rpx","background":"transparent","mask":"rgba(0,0,0,0.5)","zindex":99}}]}},{"path":"/pages/rili/rili","meta":{},"window":{"navigationBarTitleText":"日历","enablePullDownRefresh":false}},{"path":"/pages/record/record","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"报表","enablePullDownRefresh":false}},{"path":"/pages/tushi/tushi","meta":{},"window":{"navigationBarTitleText":"图示","enablePullDownRefresh":false}},{"path":"/components/tarbar/tarbar","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/card-chart/card-chart","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/modalpop/modalpop","meta":{},"window":{}},{"path":"/pages/charge/charge","meta":{},"window":{}},{"path":"/pages/second/second","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","animationType":"fade-in","background":"transparent","backgroundColor":"transparent","webviewBGTransparent":true,"mask":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

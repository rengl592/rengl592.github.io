(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dae22e4"],{"9b3f":function(e,a,s){"use strict";var t=s("e38d"),i=s.n(t);i.a},a7ad:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"change-account white-radius"},[s("div",{staticClass:"change-account-main"},[s("el-upload",{staticClass:"avatar-uploader",attrs:{accept:".jpg,.jpeg,.png",action:e.upImgUrl,"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.avatarSuccess,"on-error":e.avatarError}},[e.userPic?s("img",{staticClass:"avatar",attrs:{src:e.userPic,alt:"pic"}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("仅支持jpg/jpeg/png格式，且不超过500kb")])]),s("ul",{staticClass:"change-account-list"},[s("li",[s("label",[e._v("用户名")]),s("el-input",{attrs:{size:"small",placeholder:"请输入用户名"},model:{value:e.userName,callback:function(a){e.userName=a},expression:"userName"}})],1),s("li",[s("label",[e._v("邮箱")]),s("el-input",{attrs:{size:"small",placeholder:"请输入邮箱"},model:{value:e.userEmail,callback:function(a){e.userEmail=a},expression:"userEmail"}})],1),s("li",[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.upBaseInfo}},[e._v("提交修改")])],1)])],1)])},i=[],r=s("3228"),l={data:function(){return{upImgUrl:r["b"],userPic:"",userName:"",userEmail:""}},methods:{beforeUpload:function(e){if(e.size>512e3)return this.$notify({title:"温馨提示",message:"单张图片最大仅限500kb"}),!1},avatarSuccess:function(e,a){this.userPic=a.response.obj[0]},avatarError:function(e,a){this.$notify({title:"温馨提示",message:"上传失败，请稍候再试。"})},upBaseInfo:function(){var e=this,a=/^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;this.userPic||this.userName||this.userEmail?this.userEmail&&!a.test(this.userEmail)?this.$notify({title:"温馨提示",message:"邮箱格式不正确"}):this.$api.post("UpBaseInfo",{headImage:this.userPic,name:this.userName,email:this.userEmail}).then(function(a){e.$notify({title:"温馨提示",message:"选择修改的信息修改成功"});var s=JSON.parse(localStorage.getItem("MYuserInfo"));e.userPic&&(s.userPic=e.userPic),e.userName&&(s.userName=e.userName,window.location.reload()),localStorage.setItem("MYuserInfo",JSON.stringify(s)),e.userPic="",e.userName="",e.userEmail=""}):this.$notify({title:"温馨提示",message:"至少选择修改一项"})}}},u=l,n=(s("9b3f"),s("2877")),c=Object(n["a"])(u,t,i,!1,null,"dca5b516",null);a["default"]=c.exports},e38d:function(e,a,s){}}]);
//# sourceMappingURL=chunk-3dae22e4.53c33855.js.map
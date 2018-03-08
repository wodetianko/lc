/*******************************************注册页面js代码*************************************************/
//输入框即时编辑
var str = [];
$(".innerPro").focusin(function(){
	if($(this).val()==str[$(".innerPro").index(this)]){
		$(this).val("");
	}
})
for(var i=0;i<4;i++){
	str[i]=$(".innerPro").eq(i).val();
}
$(".innerPro").focusout(function(){
	var a=$(".innerPro").index(this);
	//console.log(a);
	var str2 = $(this).val();
	if(!$(this).val()){
		$(this).val(str[a]);
	}
})

//验证码设定
$.idcode.setCode();
$(".nextVert").click(function(){
	$.idcode.setCode(); 
})

//密码强度
$("#pwd").keyup(function(){
	var passward = $("#pwd").val();
	var reg1 = /[a-zA-Z]/;
	var reg2 = /[0-9]/;
	var reg3 = /[^a-zA-Z0-9]/;

	if(passward.length>=6 & passward.length<=20){
		if(reg1.test(passward) & !reg2.test(passward) & !reg3.test(passward)){
			$("#pwdStrong").css({"background-position-x":0, "background-position-y":-12});
		}
		else if (!reg1.test(passward) & reg2.test(passward) & !reg3.test(passward)){
			$("#pwdStrong").css({"background-position-x":0, "background-position-y":-12});
		}
		else if (!reg1.test(passward) & !reg2.test(passward) & reg3.test(passward)){
			$("#pwdStrong").css({"background-position-x":0, "background-position-y":-12});
		}
		else if(reg1.test(passward) & reg2.test(passward) & reg3.test(passward)){
			$("#pwdStrong").css({"background-position-x":0, "background-position-y":-36});
		}
		else{
			$("#pwdStrong").css({"background-position-x":0, "background-position-y":-24});
		}
	}
	else if(passward.length<6){
		$("#pwdStrong").css({"background-position-x":0, "background-position-y":0});
	}
	else if(passward.length>20){
		alert("密码长度超限！");
	}
})

$(function(){
	var a = 0,b = 0, c = 0, d = 0;
	//手机号码验证
	$("#mobile_phone").focusout(function(){
		//e.stopPropagation();
		var phonenum = $("#mobile_phone").val();
		var reg = /^1[3|4|5|7|8]\d{9}$/;
		if(reg.test(phonenum)){
			a = 1;
			//alert("该手机号码可注册！");
		}else{
			a = 0;
			//alert("手机号码格式不正确，请重新输入！");
			return;
		}
	})
	
	//验证码验证
	$("#Txtidcode").focusout(function(){
		//e.stopPropagation();
		var IsBy = $.idcode.validateCode();  //调用返回值，返回值结果为true或者false
        if(IsBy){
        	b = 1;
            //alert("验证码输入正确");
        }
        else {
        	b = 0;
            //alert("请重新输入");
            
            return;
        }
	});
	
	//密码验证
	$("#pwd").focusout(function(){
		//e.stopPropagation();
		var passward = $("#pwd").val();
		if(passward.length>=6 & passward.length<=20){
			c = 1;
		}
		else{
			c = 0;
			//alert("密码格式不对！请重新输入！");		
			return;
		}
		
	})
	//密码一致性检查
	$("#repwd").focusout(function(){
		//e.stopPropagation();
		
		if(c == 1){
			var passward1 = $("#pwd").val();
			var passward2 = $("#repwd").val();
			if(passward1 == passward2){
				d = 1;
			}
			else{
				d = 0;
				return;
			}	
		}
		else{
			//alert("请先创建密码！");
			return;
		}
	})
	
	//表单整体验证
	$("#regBtn").click(function(){
	//e.stopPropagation();
	if(a==1){
		if(b==1){
			if(c==1){
				if(d==1){
					if( $("#ourtreaty").is(":checked") ){
						var a1 = $("#mobile_phone").val()
						var a2 = $("#pwd").val()
						var url = "http://h6.duchengjiu.top/shop/api_user.php"
						var data = {
							"status":"register",
							"username":a1,
							"password":a2
						}
						$.post(url,data,function(obj){
							
							if(obj.code == 2001){
								alert("用户名已存在");
								$("#mobile_phone").val("请输入手机号码");
								return
							}else{
								alert("注册成功");
								window.location.href = "login_1.html";
							}
						})
					}else{
						alert("请勾选同意")
						return ;
					}
				}else{
					alert("密码不一致")
					return ;
				}
				
			}else{
				alert("密码格式不对")
				return ;
			}
		}else{
			alert("请输入正确的验证码")
			return ;
		}
	}else{
		alert("请输入正确的手机号")
		return ;
	}
})
})
//输入框即时编辑
var str = [];
for(var i=0;i<2;i++){
	str[i]=$(".showno").eq(i).html();
}
$(".innerPro").focusin(function(){
	$(this).siblings("label").html("");
})
$(".innerPro").focusout(function(){
	var a=$(".innerPro").index(this);
	//console.log(a);
	//var str2 = $(this).val();
	if(!$(this).val()){
		$(this).siblings("label").html(str[a]);
	}
})

$("#regBtn").click(function(){
	var username = $("#usename").val();
	var pssward = $("#psw").val();
	if(!username){
		alert("请输入用户名！");
		return;
	}
	if(!pssward){
		alert("请输入密码！");
		return;
	}
	var url = "http://h6.duchengjiu.top/shop/api_user.php";
	var data = {
				"status":"login",
				"username":username,
				"password":pssward
					};
	$.post(url,data,function(obj){
			console.log(obj)
			if(obj.code == 2003){
				alert("用户名不存在");
				$(".innerPro").val("");
				for(var i=0;i<2;i++){
					$(".showno").eq(i).html(str[i]);
				}
				return
			}
			else if(obj.code == 0){
				alert("登录成功");
				window.location.href = "index.html";
				$.cookie("username", username);
				console.log($.cookie("username"));
			}
			else{
				alert(obj.message);
			}
			
		});
})

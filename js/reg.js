// 左边轮播图
let arr = ["img/b1.jpg", "img/b2.jpg", "img/b3.jpg"]
let index = -1;
setInterval(() => {
    index++;
    if (index > 2) {
        index = 0;
    }
    $("#banner").css("background-image", "url(" + arr[index] + ")")
}, 2000)
//. 验证码 
let flagNum = false; //初始化false
let num = $(".code");
num.html(suiji());
num.click(function () {
    num.html(suiji());
})
setInterval(function () {
    num.html(suiji());
}, 30000)
// 验证码
$(".codenew").blur(function () {
    if ($(this).val() == "") {
        $(".num1").html("*验证码不能为空");
        $(this).next().css({
            "display": "", "width": "", "height": "", "background": "", "line-height": ""
            , "text-align": "", "color": "", "opacity": "", "border-radius": "", "margin-top": ""
        })
        return false;
    } else if ($(this).val() == num.html()) {
        $(".num1").html("√");
        flagNum = true;
    } else {
        $(".num1").html("×");
    }
    setSpanStyle($(this).next());
}
)
// 随机验证码
function suiji() {
    var k = "";
    for (var i = 0; i < 4; i++) {
        var j = parseInt(Math.random() * 9);
        k = k + j;
    }
    return k;
}
// 1.用户名
let flagUser = false;
$("#num").blur(function () {
    if ($(this).val() == "") {
        $(this).next().html("*必填,6-16位数字、字母组合，且以字母开头");
        $(this).next().css({
            "display": "", "width": "", "height": "", "background": "", "line-height": ""
            , "text-align": "", "color": "", "opacity": "", "border-radius": "", "margin-top": ""
        })
        return false;
    }
    let value = regCheck("user", $(this).val()) ? "√" : "×";
    if (value == "√") {
        $.get(
            "checkuser.php",
            {
                username: $("#num").val(),
            },
            fun,
        );
    } else {
        $("#num").next().html("×");
        setSpanStyle($("#num"));
    }
})
function fun(str) {
    if (str == "1") {
        $("#num").next().html("√");
        flagUser = true;
    } else {
        $("#num").next().html("×");
    }
    setSpanStyle($("#num"));
}
// 密码
let flagPass = false;
$("#pass").blur(function () {
    if ($(this).val() == "") {
        $(this).next().html("*必填,长度为6-16个字母、数字组合,不能为纯数字");
        $(this).next().css({
            "display": "", "width": "", "height": "", "background": "", "line-height": ""
            , "text-align": "", "color": "", "opacity": "", "border-radius": "", "margin-top": ""
        })
        return false;
    }
    let value = regCheck("pass", $(this).val()) ? "√" : "×";
    $(this).next().html(value);
    if ($(this).next().html() == "√") {
        flagPass = true;
    }
    setSpanStyle($(this));
})
// 手机号
var flagPhone = false; //初始化false
$("#phone").blur(function () {
    if ($(this).val() == "") {
        $(this).next().html("*必填");
        $(this).next().css({
            "display": "", "width": "", "height": "", "background": "", "line-height": "50px"
            , "text-align": "", "color": "", "opacity": "", "border-radius": "", "margin-left": "10px"
        })
        return false;
    }
    $(this).next().html(regCheck("phone", $(this).val()) ? "√" : "×");

    if ($(this).next().html() == "√") {
        flagPhone = true;
    }
    setSpanStyle($(this));
})
// 复选框
let flagCheck = false;
$("#check").click(function () {
    console.log($(this).prop("checked"))
    if ($(this).prop("checked") == true) {
        flagCheck = true;
    }
})
// 提交
$("#submit").click(function () {
    if (flagUser && flagPass && flagNum && flagCheck && flagPhone) {
        alert("注册成功")
        $.post(
            "regSave.php",
            {
                username: $("#num").val(),
                userpass: $("#pass").val()
            },
            fun1,
        );
    } else {
        alert("请确认信息无误");
        return false;
    }
})
function fun1(obj) {
    if (obj == "1") {
        alert("注册成功")
        removeCookie("username");
        setTimeout(function () {
            location.href = "index.html";
        }, 2000)
        return true;
    } else{
        alert("注册失败")
    }
}
function regCheck(type, str) {
    switch (type) {
        // 用户名:// *必填,6-16位数字、字母组合，且以字母开头
        case "user": var reg = /^[a-z][a-z0-9]{5,15}$/i; break;
        // 设置密码:// *必填,长度为6-16个字母、数字组合,不能为纯数字
        case "pass": var reg = /^(?![0-9]+$)[0-9A-Za-z]{6,16}$/i; break;
        // 姓名:// 必填,2-20个字符,只能为汉字,字母,空格,不能以空格开头和结尾
        case "name": var reg = /^[a-z\u4e00-\u9fa5][\ a-z\u4e00-\u9fa5]{0,18}[a-z\u4e00-\u9fa5]$/i; break;
        // 身份证号:// *必填,18位数字和字母，不能以字母开头   
        case "id": var reg = /^[1-9]\d{16}(\d|x)$/i; break;
        // 手机号: // *必填,11位纯数字
        case "phone": var reg = /^1\d{10}$/; break;
        default: "";
    }
    return reg.test(str);
}
function setSpanStyle(obj) {
    obj.next().css({
        "display": "inline-block", "width": "60px", "height": "30px", "background": "red", "line-height": "30px"
        , "text-align": "center", "color": "#000", "opacity": ".7", "border-radius": "10px", "margin-top": "10px"
    })
}


// 滑过二级菜单
$(".oalast").mouseover(function () {
    $(".nav2box").css({ "display": "block" })
    $(".nav2box td").hover(function () {
        $(this).css({ "color": "#0096D0" })
    }, function () {
        $(this).css({ "color": "#000" })
    })
})
$(".oalast").mouseout(function () {
    $(".nav2box").css({ "display": "none" })

})
// 定位二级
$(".lastding").mouseover(function () {
    $(".regionbox").css({ "display": "block", })
    $(".regionbox a").hover(function () {
        if ($(this).html() != $(".oldd").html()) {
            $(this).css({ "color": "red" })
        }
    }, function () {
        $(this).css({ "color": "" })
    })
    $(".d1 a").click(function () {
        $(this).css({ "background-color": "red", "color": "#fff" }).siblings("a").css({ "background-color": "", "color": "" }),
            $(".oldd").html($(this).html()),
            $(".regionbox").css({ "display": "none" })
    })
    $(this).mouseout(function () {
        $(".regionbox").css({ "display": "none" })
    })
})
 // 登录
 $(".reginin").click(function () {
    $(".registerin,.over").css("display", "block")
})
$("#btnclose").click(function () {
    $(".registerin,.over").css("display", "none")
})
// 点击登录时ajax
$("#btnLogin").click(function () {
    $.get(
        "loginCheck.php",
        {
            username: $("#username").val(),
            userpass: $("#userpass").val()
        },
        fun1,
    );
})
function fun1(obj) {
    console.log(obj);
    if (obj == "1") {
        saveCookie("username", $("#username").val(), 7);
        $("#msg").html("登录成功");
        $("#msg").css({ "color": "green" });
        setTimeout(function () {
            window.location.reload(true)
            $(".unlogin,.perreg").css({ "display": "none" });
            $('#userSpan,.userSpan').html($("#username").val())
            $("#welcomeBox,.succeed").css({ "display": "block" });

        }, 2000)
    } else {
        $("#msg").html("账号或密码错误");
        $("#msg").css("color", "red");
    }
}
function initUI() {
    //从cookie获取username；
    let uname = getCookie("username");
    if (uname != null) {
        $("#userSpan,.userSpan").html(uname);
        $("#welcomeBox,.succeed").css({ "display": "block" });
        $(".unlogin,.perreg").css({ "display": "none" });
    } else {
        $(".unlogin,.perreg").css("display", "block");
        $("#welcomeBox,.succeed").css("display", "none");
    }
}
window.onload=function(){
   initUI(); 
}

// 点击退出时
$("#btnLogout").click(function () {
    removeCookie("username");
    location.reload() 
    initUI();
})

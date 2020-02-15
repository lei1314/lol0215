
// 头部引入
$(".topnav").load("head&foot/head.html")
$.getScript("js/head.js");
// 底部引入
$(".foot").load("head&foot/foot.html")
$.getScript("js/foot.js");




// 滑过a加下划线
$(".tline").hover(function () {
    $(this).css({ "text-decoration": "underline" })
}, function () {
    $(this).css({ "text-decoration": "none" })
})

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


// 主导航栏变橙色
$(".orange1").hover(function () {
    $(this).css({ "color": "#ff5900" })
}, function () {
    $(this).css({ "color": "#9f9f9f" })
})

// 子导航栏
$(".write").hover(function () {
    $(this).css({ "color": "green" })
}, function () {
    $(this).css({ "color": "#000" })
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

// 输入框的内容定时切换
let str1 = ["儿童劫皮肤", "小学生诺手", "无敌托儿索"];
let i = 0;
setInterval(function () {
    i++;
    if (i == str1.length) {
        i = 0;
    };
    $(".qiehuan").attr("placeholder", str1[i])
}, 1000)

// 倒计时
daoTime(24, 00, 00)
function daoTime(h, m, s) {
    let time;
    clearInterval(time);
    time = setInterval(function () {
        s--;
        if (h == 0 && m == 0 & s == 0) {
            clearInterval(time);
        }
        if (s == -1) {
            s = 59;
            m--;
            if (m == -1) {
                m = 59;
                h--;
            }
        }
        show();
    }, 1000);
    //输入框显示内容
    function show() {
        $(".hour").html(h < 10 ? "0" + h : h);
        $(".min").html(m < 10 ? "0" + m : m);
        $(".ss").html(s < 10 ? "0" + s : s);
    }
}

// 周边商城加边框
$(".link img").hover(function () {
    $(this).css({ "border": "none" });
    // $(".hred").css({"color":"red"})

}, function () {
    $(this).css({ "border": "30px solid #fff" })
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
            $(".registerin,.over").css("display", "none")
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


window.onload = function () {
    initUI();
    // 点击退出时
    $("#btnLogout").click(function () {
        removeCookie("username");
        initUI();
    });


    //获取url地址的字符串
    let atr = location.search;
    // 然后字符串切割返回的是数组
    let num = atr.split('=')[1];
    let imgbox = null;
    $.get(
        "getGoodsInfo.php",
        {
            "goodsId": num
        },
        function (obj) {
            let data = JSON.parse(obj);
            console.log(data);
            console.log(data.goodsImg);
            imgbox = data.goodsImg;
            let str = "";
            str += `
                <div class="goodsbox">
                    <div class="djinfobox">
                        <div id="box" class="goods-img fl">
                            <img src="${data.goodsImg}" alt="" style="display:block;width:260px;height:154px">
                            <p id="hide-img"></p>
                            <a href="">收藏商品</a>
                        </div>
                        <div class="goodsbuy-box fl">
                            <p class="goodsname">${data.goodsName}<span>折扣</span></p>
                            <div class="goods-bj">
                                <del>原&nbsp;&nbsp;&nbsp;&nbsp;价&nbsp;:&nbsp;99&nbsp;Q币</del>
                                <p class="goods-price">折扣价：<span>${data.goodsPrice}QB</span> 微信价 <span>￥${data.beiyong1}</span> </p>
                                <p class="longtime">期限：永久</p>
                                <p>剩余时间: <span class="hour">24</span>时<span class="min">00</span>分<span
                                        class="ss">00</span>秒 </p>
                                <div class="addcar">
                                    <span style="display:none">${data.goodsId}</span>
                                    <a class="addgoodscar" href="javascript:">加入购物车</a>
                                    <a href="">赠送</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="goods-info-box">
                        <div class="comico">
                            <a href="">商品详情</a>
                            <a href="">手机购买</a>
                            <i class="i-code"></i>
                        </div>
                        <p class="dj-detail">${data.goodsDesc}</p>
                        <div class="comico">
                            <a href="">道具视频</a>
                        </div>
                        <div class="goodstab">
                            <div class="goods_video">
                                <video controls autoplay loop poster="img/d0163b8rg68 (1).png">
                                    <source src="${data.beiyong3}" type="video/mp4" />
                                    您的浏览器版本太低，请升级浏览器！
                                </video>
                                <div class="txp clear">
                                    <div class="fl">
                                        <span></span>
                                        <p>大家都在看</p>
                                        <p>Uzi求求你不要再秀了，不要再用凌波微步了，给女警火男一点面子</p>
                                    </div>
                                    <div class="fr">用腾讯视频观看</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                `
            $(".maincont").append(str);

            // 放大图片
            $("#hide-img").click(function () {
                $("#hideimg").css("display", "block")
            });
            $("#cloce").click(function () {
                $("#hideimg").css("display", "none")
            })


        }
    ).then(function () {
        new Mirror($(".goods-img")[0], {
            img: imgbox,
            width: 100,
            multiple: 4
        });
        // 点击添加购物车时
        $(".addgoodscar").click(function () {
            if ($("#userSpan").html() == "") {
                $(".registerin,.over").css("display", "block")
            } else {
                $.post("addShoppingCart.php",
                    {
                        "username": $("#userSpan").html(),
                        "goodsId": $(this).siblings("span").text(),
                        "goodsCount": 1
                    },
                    function (obj) {
                        if (obj == "1") {
                            alert("添加成功");
                        } else {
                            alert("添加失败");
                        }
                    }
                )
            }
        })
    })

}


// 返回顶部
$(".go-top").click(function () {
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})



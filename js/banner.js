// 轮播图
let _index = 0;
let _qindex = 0;
let time = null;
$(".dollList span").mouseover(function () {
    clearInterval(time);
    $(this).addClass("hover").siblings("span").removeClass("hover");
    _index = $(this).index();//获取当前号
    // console.log(_index);
    if (_index > _qindex) {
        $(".imgList img").eq(_qindex).animate({ "left": "-770px" }, 100);
        $(".imgList img").eq(_index).css("left", "770px").animate({ "left": "0px" }, 100);
    } else if (_index < _qindex) {
        $(".imgList img").eq(_qindex).animate({ "left": "770px" }, 100);
        $(".imgList img").eq(_index).css("left", "-770px").animate({ "left": "0px" }, 100);
    }
    _qindex = _index; //把现在这个序号存起来
}).mouseout(function () {
    autoPlay();
})
// 鼠标划入大盒子时
$(".banner").hover(function () {
    $(".banner button").show();
    clearInterval(time)
}, function () {
    $(".banner button").hide();
    autoPlay();
})
// 自动播放
window.onload = function () {
    autoPlay();
}
// 自动播放
function autoPlay() {
    clearInterval(time)
    time = setInterval(() => {
        _index++;
        if (_index > 3) {
            _index = 0;
            _qindex = 3;
        }
        $(".dollList span").eq(_index).addClass("hover").siblings("span").removeClass("hover");
        $(".imgList img").eq(_qindex).animate({ "left": "-770px" }, 520);
        $(".imgList img").eq(_index).css("left", "770px").animate({ "left": "0px" }, 500);
        _qindex = _index;
    }, 2000);
}
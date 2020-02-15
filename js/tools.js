
//功能：求某个dom元素距离body的距离
//参数：dom元素
//返回值：距离 {left:100,top:10}

function position(domObj){
    let obj = {
        left:0,
        top:0
    }
    while(domObj!=document.body){
        obj.left += domObj.offsetLeft;
        obj.top += domObj.offsetTop;
        domObj = domObj.offsetParent;//有定位的父级元素。
    }
    return obj;
}
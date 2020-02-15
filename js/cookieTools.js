
//保存（修改）cookie
//参数：
    //键
    //值
    //有效期（单位：天）
//返回值：无

function saveCookie(key,value,daycount){
    let d = new Date();
    d.setDate(d.getDate()+daycount);
    //对于中文，最好做 编码: escape
    document.cookie=`${key}=${escape(value)};expires=${d.toGMTString()}`;
}

//获取cookie，根据键,获取值
//参数：
    //键
//返回值：键对应的值。

// getCookie("username");
function getCookie(key){
    //从cookie获取username；
    let str = unescape(document.cookie);//userpass=123; username=曹奔
    let value = null;
    let arr = str.split("; ");//["userpass=123","usernamea=曹奔","username=曹奔02"]
    for(let i in arr){
        if(arr[i].startsWith(key+"=")){
            [,value]=arr[i].split("=");
            break;
        }
    }
    return value;
}


//删除cookie
//参数：
    //键
//返回值：无
function removeCookie(key){
    saveCookie(key,"byebye",-1);
}

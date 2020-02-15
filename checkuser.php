<?php
    header("Content-type:text/html;charset=utf-8");
    // 接收数据
    $username=$_GET['username'];
    // 处理
    $conn=mysql_connect("localhost","root","root");
    if(!$conn){
        echo "出错了。。。";
    }else{
        mysql_select_db("my1912",$conn);
        $sqlstr="select * from user where username='$username'";

        $result=mysql_query($sqlstr,$conn);//查找结果
        mysql_close($conn);//关闭



        if(mysql_num_rows($result)==0){
            echo "1";
        }else{
            echo "0";
        }
    }

?>